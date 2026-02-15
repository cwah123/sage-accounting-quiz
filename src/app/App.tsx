import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { QuizOption } from "./components/QuizOption";
import { VATOption } from "./components/VATOption";
import { EmployeeOption } from "./components/EmployeeOption";
import { RevenueOption } from "./components/RevenueOption";
import { ProgressBar } from "./components/ProgressBar";
import { ProductCard } from "./components/ProductCard";
import { ProductCards } from "./components/ProductCards";
import { ResultsHeader } from "./components/ResultsHeader";
import MainNavigation from "./components/MainNavigation";
import SecondaryNav from "./components/SecondaryNav";
import Stripe from "../imports/Stripe-189-2266";
import svgPaths from "../imports/svg-ygakoriasz";
import backButtonSvg from "../imports/svg-94tkbpdsxm";

type BusinessType = "sole-trader" | "limited-company" | "other" | null;
type VATStatus = "yes" | "no" | null;
type EmployeeCount = "0-19" | "20+" | null;
type RevenueAmount = "under" | "over" | null;

export default function App() {
  const [selectedOption, setSelectedOption] = useState<BusinessType>(null);
  const [vatStatus, setVATStatus] = useState<VATStatus>(null);
  const [employeeCount, setEmployeeCount] = useState<EmployeeCount>(null);
  const [revenueAmount, setRevenueAmount] = useState<RevenueAmount>(null);
  const [showResults, setShowResults] = useState(false);
  const [quizStep, setQuizStep] = useState<1 | 2 | 3 | 4>(1);

  const quizHeaderRef = useRef<HTMLParagraphElement>(null);
  const takeQuizAgainRef = useRef<HTMLDivElement>(null);

  // Custom smooth scroll function with 300ms duration
  const smoothScrollTo = (targetPosition: number) => {
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 300;
    let start: number | null = null;

    const animation = (currentTime: number) => {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      const progress = Math.min(timeElapsed / duration, 1);
      
      // Easing function (ease-in-out)
      const ease = progress < 0.5
        ? 4 * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;
      
      window.scrollTo(0, startPosition + distance * ease);
      
      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  };

  // Scroll to "Take the quiz again" when results are shown
  useEffect(() => {
    if ((vatStatus || revenueAmount) && takeQuizAgainRef.current) {
      setTimeout(() => {
        const element = takeQuizAgainRef.current;
        if (element) {
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - 60 + 10;
          
          smoothScrollTo(offsetPosition);
        }
      }, 100);
    }
  }, [vatStatus, revenueAmount]);

  const handleTakeQuizAgain = () => {
    setSelectedOption(null);
    setVATStatus(null);
    setEmployeeCount(null);
    setRevenueAmount(null);
    setQuizStep(1);
    setShowResults(false);

    // Scroll to quiz header
    setTimeout(() => {
      const element = quizHeaderRef.current;
      if (element) {
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - 60 - 40;
        
        smoothScrollTo(offsetPosition);
      }
    }, 100);
  };

  const handleOptionClick = (option: BusinessType) => {
    // Wait for button animation to complete before any state changes
    setTimeout(() => {
      setSelectedOption(option);
      
      // If sole trader or other, show VAT question
      if (option === "sole-trader" || option === "other") {
        setTimeout(() => {
          setQuizStep(2);
        }, 200);
      } else if (option === "limited-company") {
        // If limited company, show employee count question
        setTimeout(() => {
          setQuizStep(3);
        }, 200);
      }
    }, 350);
  };

  const handleVATClick = (vat: VATStatus) => {
    // Wait for button animation to complete before any state changes
    setTimeout(() => {
      setVATStatus(vat);
      // Wait for progress bar to animate to 100% before showing results
      setTimeout(() => {
        setShowResults(true);
      }, 500);
    }, 350);
  };

  const handleEmployeeClick = (count: EmployeeCount) => {
    // Wait for button animation to complete before any state changes
    setTimeout(() => {
      setEmployeeCount(count);
      setTimeout(() => {
        setQuizStep(4);
      }, 200);
    }, 350);
  };

  const handleRevenueClick = (amount: RevenueAmount) => {
    // Wait for button animation to complete before any state changes
    setTimeout(() => {
      setRevenueAmount(amount);
      // Wait for progress bar to animate to 100% before showing results
      setTimeout(() => {
        setShowResults(true);
      }, 500);
    }, 350);
  };

  const handleBackClick = () => {
    if (quizStep === 2) {
      setQuizStep(1);
      setVATStatus(null);
    } else if (quizStep === 3) {
      setQuizStep(1);
      setEmployeeCount(null);
    } else if (quizStep === 4) {
      setQuizStep(3);
      setRevenueAmount(null);
    }
  };

  const getProgress = () => {
    if (quizStep === 1 && !selectedOption) return 23;
    if (quizStep === 1 && selectedOption) return 50;
    if (quizStep === 2 && !vatStatus) return 66;
    if (quizStep === 2 && vatStatus) return 100;
    if (quizStep === 3 && !employeeCount) return 66;
    if (quizStep === 3 && employeeCount) return 83;
    if (quizStep === 4 && !revenueAmount) return 83;
    if (quizStep === 4 && revenueAmount) return 100;
    return 100;
  };

  const getRecommendedProducts = (): ("individual" | "accounting" | "intacct")[] => {
    switch (selectedOption) {
      case "sole-trader":
        return ["individual"];
      case "limited-company":
        return ["accounting"];
      case "other":
        return ["intacct"];
      default:
        return [];
    }
  };

  return (
    <div className="min-h-screen bg-background dark">
      {/* Primary Navigation */}
      <div className="h-[60px] w-full">
        <MainNavigation />
      </div>
      
      {/* Secondary Navigation - Sticky */}
      <div className="sticky top-0 z-50 h-[60px] w-full">
        <SecondaryNav />
      </div>

      {/* Hero Section - Always visible */}
      <div className="relative shrink-0 w-full">
        <div className="content-stretch flex flex-col items-start px-[40px] relative w-full py-[0px]">
          <div className="relative shrink-0 w-full">
            <div className="content-stretch flex flex-col items-start px-[80px] relative w-full py-[40px]">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full">
                  <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
                    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
                      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
                        <h1 className="text-center w-full whitespace-pre-wrap text-foreground">
                          Easy-to-use online accounting software
                        </h1>
                      </div>
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
                          <p style={{ fontSize: 'var(--text-hero)' }} className="text-center w-full whitespace-pre-wrap text-foreground/90">
                            Whether you are a sole trader, small business or a medium-sized business, we have your accounting needs covered. Our cloud accounting software is easy to use, secure, and customisable to your needs.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hide Quiz and Results sections when VAT registered or revenue selected */}
      {!showResults && (
        <>
          {/* Quiz Section */}
          <div className="relative rounded-[40px] shrink-0 w-full">
            <div className="content-stretch flex flex-col items-start pb-[49px] pt-[40px] px-[40px] relative w-full">
              <div className="mb-[-9px] relative rounded-[40px] shrink-0 w-full">
                <div className="content-stretch flex items-center justify-center px-[240px] relative w-full">
                  <div className="content-stretch flex flex-col gap-[8px] items-center justify-center relative shrink-0">
                    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
                      {/* Question Header */}
                      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full mb-[24px]">
                        <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0 w-full">
                          <p ref={quizHeaderRef} className="text-lg text-center text-foreground/85 font-medium">
                            Find the right Sage accounting software for your business
                          </p>
                          {(quizStep === 2 || quizStep === 3 || quizStep === 4) && (
                            <button
                              onClick={handleBackClick}
                              className="relative shrink-0 size-[24px] p-[4px] rounded-lg hover:bg-muted transition-colors"
                            >
                              <div aria-hidden="true" className="absolute border border-border border-solid inset-0 pointer-events-none rounded-lg" />
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                                <path d={backButtonSvg.p11b50e60} fill="currentColor" className="text-foreground/90" />
                              </svg>
                            </button>
                          )}
                        </div>
                        <h3 className="text-center w-full whitespace-pre-wrap text-foreground/95">
                          {quizStep === 1 ? "How is your business structured?" : quizStep === 2 ? "Do you pay VAT?" : quizStep === 3 ? "How many employees do you have?" : "What is your annual revenue?"}
                        </h3>
                      </div>

                      {/* Progress Bar */}
                      <div className="h-[24px] shrink-0 w-[766px]" />
                      <ProgressBar progress={getProgress()} />
                      <div className="h-[40px] shrink-0 w-[766px]" />

                      {/* Options */}
                      <AnimatePresence mode="wait">
                        {!showResults && quizStep === 1 && (
                          <motion.div
                            initial={{ opacity: 1 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="content-stretch flex gap-[40px] items-center justify-center relative shrink-0 w-full"
                          >
                            <QuizOption
                              icon="person"
                              label="Sole Trader"
                              onClick={() => handleOptionClick("sole-trader")}
                              isSelected={selectedOption === "sole-trader"}
                            />
                            <QuizOption
                              icon="bag"
                              label="Limited Company"
                              onClick={() => handleOptionClick("limited-company")}
                              isSelected={selectedOption === "limited-company"}
                            />
                            <QuizOption
                              icon="home"
                              label="Other"
                              onClick={() => handleOptionClick("other")}
                              isSelected={selectedOption === "other"}
                            />
                          </motion.div>
                        )}

                        {!showResults && quizStep === 2 && (
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="content-stretch flex gap-[40px] items-center justify-center relative shrink-0 w-full"
                          >
                            <VATOption
                              type="yes"
                              label="Yes, I'm VAT registered"
                              onClick={() => handleVATClick("yes")}
                              isSelected={vatStatus === "yes"}
                            />
                            <VATOption
                              type="no"
                              label="No, I'm not VAT registered"
                              onClick={() => handleVATClick("no")}
                              isSelected={vatStatus === "no"}
                            />
                          </motion.div>
                        )}

                        {!showResults && quizStep === 3 && (
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="content-stretch flex gap-[40px] items-center justify-center relative shrink-0 w-full"
                          >
                            <EmployeeOption
                              type="0-19"
                              label="0-19 employees"
                              onClick={() => handleEmployeeClick("0-19")}
                              isSelected={employeeCount === "0-19"}
                            />
                            <EmployeeOption
                              type="20+"
                              label="20+ employees"
                              onClick={() => handleEmployeeClick("20+")}
                              isSelected={employeeCount === "20+"}
                            />
                          </motion.div>
                        )}

                        {!showResults && quizStep === 4 && (
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="content-stretch flex gap-[40px] items-center justify-center relative shrink-0 w-full"
                          >
                            <RevenueOption
                              type="under"
                              label="Under £2 millions"
                              onClick={() => handleRevenueClick("under")}
                              isSelected={revenueAmount === "under"}
                            />
                            <RevenueOption
                              type="over"
                              label="Over £2 millions"
                              onClick={() => handleRevenueClick("over")}
                              isSelected={revenueAmount === "over"}
                            />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Results Section */}
          <AnimatePresence>
            {showResults && (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative w-full"
              >
                <div className="content-stretch flex items-center justify-center pb-[24px] px-[240px] relative shrink-0 w-full">
                  <p className="text-lg text-center text-foreground/85 font-medium">
                    All accounting solutions
                  </p>
                </div>
                <div className="flex flex-wrap gap-[40px] items-start justify-center px-[240px] pb-[80px]">
                  {getRecommendedProducts().map((product, index) => (
                    <motion.div
                      key={product}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    >
                      <ProductCard type={product} />
                    </motion.div>
                  ))}
                </div>

                {/* Show all products button */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="flex justify-center pb-[80px]"
                >
                  <button
                    onClick={() => {
                      setSelectedOption(null);
                      setVATStatus(null);
                      setQuizStep(1);
                      setShowResults(false);
                    }}
                    className="bg-accent hover:bg-accent/90 transition-colors rounded-button px-[24px] py-[16px]"
                  >
                    <span className="text-accent-foreground">Start Over</span>
                  </button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}

      {/* Results Header - Show when results are displayed */}
      {showResults && (vatStatus || revenueAmount) && (
        <div ref={takeQuizAgainRef}>
          <ResultsHeader
            onTakeQuizAgain={handleTakeQuizAgain}
          />
        </div>
      )}

      {/* Product Cards - Always visible below quiz */}
      <ProductCards 
        vatStatus={showResults ? vatStatus : null} 
        revenueAmount={showResults ? revenueAmount : null} 
      />

      {/* Stripe - Trustpilot, HMRC, MTD badges */}
      <div className="w-full">
        <Stripe />
      </div>
    </div>
  );
}