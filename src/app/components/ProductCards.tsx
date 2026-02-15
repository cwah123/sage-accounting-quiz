import image_037347e46f25df0defe259f35ab67d634c62753f from 'figma:asset/037347e46f25df0defe259f35ab67d634c62753f.png'
import image_482f987eaabfd377a4eb2e6f4eee90814d65de5a from 'figma:asset/482f987eaabfd377a4eb2e6f4eee90814d65de5a.png'
import image_e4006daca03274461d8b40e8f4433cebbcb86816 from 'figma:asset/e4006daca03274461d8b40e8f4433cebbcb86816.png'
import svgPaths from "../../imports/svg-a72gqe4tl8";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import CircleGlow from "../../imports/CircleGlow";

type VATStatus = "yes" | "no" | null;
type RevenueAmount = "under" | "over" | null;

interface ProductCardsProps {
  vatStatus?: VATStatus;
  revenueAmount?: RevenueAmount;
}

function SageIndividualPreview() {
  return (
    <div className="h-[200px] overflow-clip relative shrink-0 w-full flex items-center justify-center" data-name="micro-ui-SMALL-accounting-GB-agnostic">
      <div className="scale-[0.75] origin-center">
        <div className="h-[267px] w-[404px] relative">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute blur-[0px] h-[121px] left-[calc(50%-1px)] top-[calc(50%-28px)] w-[304px]" data-name="base glow" style={{ backgroundImage: "linear-gradient(-46.8073deg, rgb(143, 73, 254) 65.629%, rgb(17, 175, 255) 23.116%, rgb(0, 214, 57) 94.112%)" }} />
          <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[237.971px] left-[calc(50%+3.58px)] top-[calc(50%+3.51px)] w-[370.846px]" data-name="upper glow">
            <div className="absolute inset-[-4.1%_-2.63%]">
              <ImageWithFallback 
                src={image_037347e46f25df0defe259f35ab67d634c62753f} 
                className="block"
                alt="Sage Individual PNG background"
                style={{
                  width: '90%',
                  height: '90%',
                  objectFit: 'contain',
                  margin: '5%'
                }}
              />
            </div>
          </div>
          <div className="absolute contents left-[23px] top-[20px]" data-name="base">
            
            
            
            
            
          </div>
          <div className="absolute contents left-[285px] top-[150px]" data-name="icon">
            
            
          </div>
        </div>
      </div>
    </div>
  );
}

function SageAccountingPreview() {
  return (
    <div className="h-[200px] overflow-clip relative shrink-0 w-full flex items-center justify-center">
      <ImageWithFallback 
        src={image_482f987eaabfd377a4eb2e6f4eee90814d65de5a} 
        className="block w-full h-auto"
        alt="Sage Accounting sales invoice preview"
        style={{
          objectFit: 'contain'
        }}
      />
    </div>
  );
}

function SageIntacctPreview() {
  return (
    <div className="h-[200px] overflow-clip relative shrink-0 w-full flex items-center justify-center">
      <ImageWithFallback 
        src={image_e4006daca03274461d8b40e8f4433cebbcb86816} 
        className="block w-full h-auto"
        alt="Sage Intacct CFO Dashboard preview"
        style={{
          objectFit: 'contain'
        }}
      />
    </div>
  );
}

export function ProductCards({ vatStatus, revenueAmount }: ProductCardsProps) {
  // Support both VAT-based and revenue-based highlighting
  const isResultState = vatStatus === "yes" || vatStatus === "no" || revenueAmount === "under" || revenueAmount === "over";
  const isIndividualHighlighted = vatStatus === "no";
  const isAccountingHighlighted = vatStatus === "yes" || revenueAmount === "under";
  const isIntacctHighlighted = revenueAmount === "over";

  return (
    <div className="content-stretch flex items-center justify-center pb-[49px] pt-[40px] px-[40px] relative w-full">
      <div className="mb-[-9px] relative rounded-radius shrink-0 w-full max-w-[1920px]">
        <div className="content-stretch flex items-center justify-center relative w-full p-[0px]">
          <div className="content-stretch flex gap-[24px] items-stretch justify-center relative shrink-0 w-full">
            
            {/* Background Glow - positioned behind the highlighted card */}
            {isResultState && (
              <div 
                className="absolute top-1/2 -translate-y-1/2 pointer-events-none transition-all duration-500 z-0"
                style={{
                  left: isIndividualHighlighted 
                    ? 'calc(16.666% - 375px)' 
                    : isAccountingHighlighted 
                      ? 'calc(50% - 375px)' 
                      : 'calc(83.333% - 375px)',
                  width: '750px',
                  height: '750px'
                }}
              >
                <CircleGlow />
              </div>
            )}
            
            {/* Card 1: Sage Individual */}
            <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative h-full z-10" data-name="Flex item 1">
              <div 
                className={`content-stretch flex flex-col items-start relative shrink-0 w-full h-full transition-all duration-500 ${
                  isIndividualHighlighted ? '-translate-y-[24px]' : ''
                }`} 
                data-name="product signposting centered"
              >
                {isIndividualHighlighted && (
                  <div className="absolute -top-[38px] left-1/2 -translate-x-1/2 z-10">
                    <div className="content-stretch flex items-center justify-center px-[37px] py-[8px] relative rounded-tl-[8px] rounded-tr-[8px]" style={{ backgroundImage: "linear-gradient(179.102deg, rgb(0, 214, 57) 13.06%, rgb(17, 175, 255) 719.66%, rgb(143, 73, 254) 1635.6%)" }}>
                      <div className="flex flex-col font-['Sage_Text:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-[rgba(0,0,0,0.9)] whitespace-nowrap">
                        <p className="leading-[1.4]">Recommended software</p>
                      </div>
                    </div>
                  </div>
                )}
                <div 
                  className={`relative rounded-[40px] shrink-0 w-full h-full flex flex-col transition-all duration-500 ${
                    !isResultState 
                      ? 'bg-white' 
                      : isIndividualHighlighted 
                        ? 'bg-white border-4 border-[#00d639]' 
                        : 'border-2 border-[rgba(94,94,94,0.5)]'
                  }`}
                  data-name="Stylebox padding"
                >
                  <div className={`content-stretch flex flex-col items-start relative w-full h-full justify-between p-[40px] rounded-[40px] ${!isResultState || isIndividualHighlighted ? '' : 'bg-[rgba(27,27,27,0.7)]'}`}>
                    <div className="content-stretch flex flex-col items-start pb-[40px] relative shrink-0 w-full" data-name="Stylebox margin">
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="highlight pseudo wrapper">
                        <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0 w-full" data-name="Highlight">
                          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                            <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
                              <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
                                <p className={`font-['Sage_Text:Medium',sans-serif] leading-[1.4] not-italic relative shrink-0 w-full whitespace-pre-wrap transition-colors duration-500 ${ !isResultState || isIndividualHighlighted ? 'text-[rgba(0,0,0,0.65)]' : 'text-[rgba(255,255,255,0.65)]' }`} style={{ fontSize: 'var(--font-size)' }}>
                                  Sole Traders with MTD requirements
                                </p>
                                <div className="leading-[0] not-italic relative shrink-0 w-full whitespace-pre-wrap">
                                  <span className={`leading-[1.4] font-headline font-black transition-colors duration-500 ${
                                    !isResultState || isIndividualHighlighted ? 'text-[rgba(0,0,0,0.9)]' : 'text-[rgba(255,255,255,0.9)]'
                                  }`} style={{ fontSize: '32px' }}>
                                    Sage Individual
                                    <br aria-hidden="true" />
                                  </span>
                                  <span className="bg-clip-text leading-[1.4] font-headline font-black" style={{ backgroundImage: "linear-gradient(60.9117deg, rgb(19, 160, 56) 1.6956%, rgb(0, 146, 219) 6.4822%, rgb(47, 122, 230) 18.56%, rgb(143, 73, 254) 28.678%)", WebkitTextFillColor: "transparent", fontSize: '32px' }}>
                                    with Ai
                                  </span>
                                </div>
                                <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
                                  <div className={`font-['Sage_Text:Regular',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[18px] w-full whitespace-pre-wrap transition-colors duration-500 ${
                                    !isResultState || isIndividualHighlighted ? 'text-[rgba(0,0,0,0.9)]' : 'text-[rgba(255,255,255,0.9)]'
                                  }`}>
                                    <p className="mb-[16px]">Sort Self Assessment today and get ahead of Making Tax Digital without the stress.</p>
                                    <p style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--font-weight-bold)' }}><span style={{ fontWeight: 'var(--font-weight-bold)' }}>FREE plans available</span></p>
                                  </div>
                                </div>
                              </div>
                              <div className="content-start flex flex-wrap gap-[16px] items-start relative shrink-0 w-full" data-name="Button group">
                                <div className={`content-stretch flex items-center justify-center px-[16px] py-[13px] relative rounded-[24px] shrink-0 transition-colors duration-500 ${
                                  !isResultState 
                                    ? 'bg-black' 
                                    : isIndividualHighlighted 
                                      ? 'bg-[#008146]' 
                                      : 'bg-white'
                                }`} data-name="Buttons">
                                  <div className="flex flex-col font-['Sage_Text:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-center whitespace-nowrap">
                                    <p className={`leading-[1.4] transition-colors duration-500 ${
                                      !isResultState 
                                        ? 'text-[rgba(255,255,255,0.9)]' 
                                        : isIndividualHighlighted 
                                          ? 'text-[rgba(255,255,255,0.9)]' 
                                          : 'text-[rgba(0,0,0,0.9)]'
                                    }`} style={{ fontSize: '16px' }}>
                                      {!isResultState 
                                        ? 'Discover Sage Individual' 
                                        : isIndividualHighlighted 
                                          ? 'Get 90% off for 6 months' 
                                          : 'Get started now'}
                                    </p>
                                  </div>
                                </div>
                                {isIndividualHighlighted && (
                                  <div className="content-stretch flex flex-col gap-[6px] items-start justify-center pt-[6px] relative shrink-0" data-name="Buttons">
                                    <div className="flex flex-col font-['Sage_Text:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.9)] whitespace-nowrap">
                                      <p className="leading-[1.4]">Discover Sage Individual</p>
                                    </div>
                                    <div className="h-[2px] relative shrink-0 self-stretch bg-[rgba(0,0,0,0.9)]" />
                                  </div>
                                )}
                                {!isIndividualHighlighted && isResultState && (
                                  <div className="content-stretch flex flex-col gap-[6px] items-start justify-center pt-[6px] relative shrink-0" data-name="Buttons">
                                    <div className="flex flex-col font-['Sage_Text:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.9)] whitespace-nowrap">
                                      <p className="leading-[1.4]">Discover Sage Individual</p>
                                    </div>
                                    <div className="h-[2px] relative shrink-0 self-stretch bg-[rgba(255,255,255,0.9)]" />
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Stylebox">
                      <SageIndividualPreview />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Sage Accounting */}
            <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative h-full z-10" data-name="Flex item 2">
              <div 
                className={`content-stretch flex flex-col items-start relative shrink-0 w-full h-full transition-all duration-500 ${
                  isAccountingHighlighted ? '-translate-y-[24px]' : ''
                }`} 
                data-name="product signposting centered"
              >
                {isAccountingHighlighted && (
                  <div className="absolute -top-[41px] left-1/2 -translate-x-1/2 z-10">
                    <div className="content-stretch flex items-center justify-center px-[37px] py-[8px] relative rounded-tl-[8px] rounded-tr-[8px]" style={{ backgroundImage: "linear-gradient(179.102deg, rgb(0, 214, 57) 13.06%, rgb(17, 175, 255) 719.66%, rgb(143, 73, 254) 1635.6%)" }}>
                      <div className="flex flex-col font-['Sage_Text:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-[rgba(0,0,0,0.9)] whitespace-nowrap">
                        <p className="leading-[1.4]">Recommended software</p>
                      </div>
                    </div>
                  </div>
                )}
                <div 
                  className={`relative rounded-[40px] shrink-0 w-full h-full flex flex-col transition-all duration-500 ${
                    !isResultState 
                      ? 'bg-white' 
                      : isAccountingHighlighted 
                        ? 'bg-white border-4 border-[#00d639]' 
                        : 'border-2 border-[rgba(94,94,94,0.5)]'
                  }`}
                  data-name="Stylebox padding"
                >
                  <div className={`content-stretch flex flex-col items-start relative w-full p-[40px] h-full justify-between rounded-[40px] ${!isResultState || isAccountingHighlighted ? '' : 'bg-[rgba(27,27,27,0.7)]'}`}> 
                    <div className="content-stretch flex flex-col items-start pb-[40px] relative shrink-0 w-full" data-name="Stylebox margin">
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="highlight pseudo wrapper">
                        <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0 w-full" data-name="Highlight">
                          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                            <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
                              <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
                                <p className={`font-['Sage_Text:Medium',sans-serif] leading-[1.4] not-italic relative shrink-0 w-full whitespace-pre-wrap transition-colors duration-500 ${
                                  !isResultState || isAccountingHighlighted ? 'text-[rgba(0,0,0,0.65)]' : 'text-[rgba(255,255,255,0.65)]'
                                }`} style={{ fontSize: 'var(--font-size)' }}>
                                  1-19 Employees
                                </p>
                                <div className="leading-[0] not-italic relative shrink-0 w-full whitespace-pre-wrap">
                                  <span className={`leading-[1.4] font-headline font-black transition-colors duration-500 ${
                                    !isResultState || isAccountingHighlighted ? 'text-[rgba(0,0,0,0.9)]' : 'text-[rgba(255,255,255,0.9)]'
                                  }`} style={{ fontSize: '32px' }}>
                                    Sage Accounting
                                    <br aria-hidden="true" />
                                  </span>
                                  <span className="bg-clip-text leading-[1.4] font-headline font-black" style={{ backgroundImage: "linear-gradient(60.9117deg, rgb(19, 160, 56) 1.6956%, rgb(0, 146, 219) 6.4822%, rgb(47, 122, 230) 18.56%, rgb(143, 73, 254) 28.678%)", WebkitTextFillColor: "transparent", fontSize: '32px' }}>
                                    with Ai
                                  </span>
                                </div>
                                <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
                                  <div className={`font-['Sage_Text:Regular',sans-serif] not-italic relative shrink-0 text-[18px] w-full whitespace-pre-wrap transition-colors duration-500 ${
                                    !isResultState || isAccountingHighlighted ? 'text-[rgba(0,0,0,0.9)]' : 'text-[rgba(255,255,255,0.9)]'
                                  }`}>
                                    <p className="leading-[1.6] mb-[16px]">Get paid 7 days faster and save 5 hours weekly with Sage Copilot.</p>
                                    <p>
                                      {!isResultState ? (
                                        <>
                                          <span className="leading-[1.6]" style={{ fontWeight: 'var(--font-weight-bold)' }}>Get 90% off for 6 months</span>
                                          <span className="leading-[1.6]"> then starting at £18 per month (excluding VAT).</span>
                                        </>
                                      ) : (
                                        <>
                                          <span className="font-['Sage_Text:Regular',sans-serif] leading-[1.6]">Starting at £18 per month (excluding VAT).</span>
                                        </>
                                      )}
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="content-start flex flex-wrap gap-[16px] items-start relative shrink-0 w-full" data-name="Button group">
                                <div className={`content-stretch flex items-center justify-center px-[16px] py-[13px] relative rounded-[24px] shrink-0 transition-colors duration-500 ${
                                  !isResultState 
                                    ? 'bg-black' 
                                    : isAccountingHighlighted 
                                      ? 'bg-[#008146]' 
                                      : 'bg-white'
                                }`} data-name="Buttons">
                                  <div className="flex flex-col font-['Sage_Text:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-center whitespace-nowrap">
                                    <p className={`leading-[1.4] transition-colors duration-500 ${
                                      !isResultState 
                                        ? 'text-[rgba(255,255,255,0.9)]' 
                                        : isAccountingHighlighted 
                                          ? 'text-[rgba(255,255,255,0.9)]' 
                                          : 'text-[rgba(0,0,0,0.9)]'
                                    }`} style={{ fontSize: '16px' }}>
                                      {!isResultState 
                                        ? 'Discover Sage Accounting' 
                                        : isAccountingHighlighted 
                                          ? 'Get 90% off for 6 months' 
                                          : 'Get started now'}
                                    </p>
                                  </div>
                                </div>
                                {isAccountingHighlighted && (
                                  <div className="content-stretch flex flex-col gap-[6px] items-start justify-center pt-[6px] relative shrink-0" data-name="Buttons">
                                    <div className="flex flex-col font-['Sage_Text:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.9)] whitespace-nowrap">
                                      <p className="leading-[1.4]">Discover Sage Accounting</p>
                                    </div>
                                    <div className="h-[2px] relative shrink-0 self-stretch bg-[rgba(0,0,0,0.9)]" />
                                  </div>
                                )}
                                {!isAccountingHighlighted && isResultState && (
                                  <div className="content-stretch flex flex-col gap-[6px] items-start justify-center pt-[6px] relative shrink-0" data-name="Buttons">
                                    <div className="flex flex-col font-['Sage_Text:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.9)] whitespace-nowrap">
                                      <p className="leading-[1.4]">Discover Sage Accounting</p>
                                    </div>
                                    <div className="h-[2px] relative shrink-0 self-stretch bg-[rgba(255,255,255,0.9)]" />
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Stylebox">
                      <SageAccountingPreview />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3: Sage Intacct */}
            <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative h-full z-10" data-name="Flex item 3">
              <div 
                className={`content-stretch flex flex-col items-start relative shrink-0 w-full h-full transition-all duration-500 ${
                  isIntacctHighlighted ? '-translate-y-[24px]' : ''
                }`} 
                data-name="product signposting centered"
              >
                {isIntacctHighlighted && (
                  <div className="absolute -top-[38px] left-1/2 -translate-x-1/2 z-10">
                    <div className="content-stretch flex items-center justify-center px-[37px] py-[8px] relative rounded-tl-[8px] rounded-tr-[8px]" style={{ backgroundImage: "linear-gradient(179.102deg, rgb(0, 214, 57) 13.06%, rgb(17, 175, 255) 719.66%, rgb(143, 73, 254) 1635.6%)" }}>
                      <div className="flex flex-col font-['Sage_Text:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-[rgba(0,0,0,0.9)] whitespace-nowrap">
                        <p className="leading-[1.4]">Recommended software</p>
                      </div>
                    </div>
                  </div>
                )}
                <div 
                  className={`relative rounded-[40px] shrink-0 w-full h-full flex flex-col transition-all duration-500 ${
                    !isResultState 
                      ? 'bg-white' 
                      : isIntacctHighlighted
                        ? 'bg-white border-4 border-[#00d639]'
                        : 'border-2 border-[rgba(94,94,94,0.5)]'
                  }`}
                  data-name="Stylebox padding"
                >
                  <div className={`content-stretch flex flex-col items-start relative w-full p-[40px] h-full justify-between rounded-[40px] ${!isResultState || isIntacctHighlighted ? '' : 'bg-[rgba(27,27,27,0.7)]'}`}> 
                    <div className="content-stretch flex flex-col items-start pb-[40px] relative shrink-0 w-full" data-name="Stylebox margin">
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="highlight pseudo wrapper">
                        <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0 w-full" data-name="Highlight">
                          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                            <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
                              <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
                                <p className={`font-['Sage_Text:Medium',sans-serif] leading-[1.4] not-italic relative shrink-0 w-full whitespace-pre-wrap transition-colors duration-500 ${
                                  !isResultState || isIntacctHighlighted ? 'text-[rgba(0,0,0,0.65)]' : 'text-[rgba(255,255,255,0.65)]'
                                }`} style={{ fontSize: 'var(--font-size)' }}>
                                  20+ Employees
                                </p>
                                <div className="leading-[0] not-italic relative shrink-0 w-full whitespace-pre-wrap">
                                  <span className={`leading-[1.4] font-headline font-black transition-colors duration-500 ${
                                    !isResultState || isIntacctHighlighted ? 'text-[rgba(0,0,0,0.9)]' : 'text-[rgba(255,255,255,0.9)]'
                                  }`} style={{ fontSize: '32px' }}>
                                    Sage Intacct
                                    <br aria-hidden="true" />
                                  </span>
                                  <span className="bg-clip-text leading-[1.4] font-headline font-black" style={{ backgroundImage: "linear-gradient(60.9117deg, rgb(19, 160, 56) 1.6956%, rgb(0, 146, 219) 6.4822%, rgb(47, 122, 230) 18.56%, rgb(143, 73, 254) 28.678%)", WebkitTextFillColor: "transparent", fontSize: '32px' }}>
                                    with Ai
                                  </span>
                                </div>
                                <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
                                  <div className={`font-['Sage_Text:Regular',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[18px] w-full whitespace-pre-wrap transition-colors duration-500 ${
                                    !isResultState || isIntacctHighlighted ? 'text-[rgba(0,0,0,0.9)]' : 'text-[rgba(255,255,255,0.9)]'
                                  }`}>
                                    <p className="mb-[16px]">The leader in cloud accounting and financial management software. Scalable, highly customisable, with real-time reporting to help you make data-driven business decisions.</p>
                                    <p><span style={{ fontWeight: 'var(--font-weight-bold)' }}>Contact us</span> to discuss pricing.</p>
                                  </div>
                                </div>
                              </div>
                              <div className="content-start flex flex-wrap gap-[16px] items-start relative shrink-0 w-full" data-name="Button group">
                                <div className={`content-stretch flex items-center justify-center px-[16px] py-[13px] relative rounded-[24px] shrink-0 transition-colors duration-500 ${
                                  !isResultState 
                                    ? 'bg-black' 
                                    : isIntacctHighlighted 
                                      ? 'bg-[#008146]' 
                                      : 'bg-white'
                                }`} data-name="Buttons">
                                  <div className="flex flex-col font-['Sage_Text:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-center whitespace-nowrap">
                                    <p className={`leading-[1.4] transition-colors duration-500 ${
                                      !isResultState 
                                        ? 'text-[rgba(255,255,255,0.9)]' 
                                        : isIntacctHighlighted
                                          ? 'text-[rgba(255,255,255,0.9)]'
                                          : 'text-[rgba(0,0,0,0.9)]'
                                    }`} style={{ fontSize: '16px' }}>
                                      {!isResultState 
                                        ? 'Discover Sage Intacct' 
                                        : isIntacctHighlighted
                                          ? 'Request a quote'
                                          : 'Request pricing'}
                                    </p>
                                  </div>
                                </div>
                                {isIntacctHighlighted && (
                                  <div className="content-stretch flex flex-col gap-[6px] items-start justify-center pt-[6px] relative shrink-0" data-name="Buttons">
                                    <div className="flex flex-col font-['Sage_Text:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.9)] whitespace-nowrap">
                                      <p className="leading-[1.4]">Discover Sage Intacct</p>
                                    </div>
                                    <div className="h-[2px] relative shrink-0 self-stretch bg-[rgba(0,0,0,0.9)]" />
                                  </div>
                                )}
                                {!isIntacctHighlighted && isResultState && (
                                  <div className="content-stretch flex flex-col gap-[6px] items-start justify-center pt-[6px] relative shrink-0" data-name="Buttons">
                                    <div className="flex flex-col font-['Sage_Text:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.9)] whitespace-nowrap">
                                      <p className="leading-[1.4]">Discover Sage Intacct</p>
                                    </div>
                                    <div className="h-[2px] relative shrink-0 self-stretch bg-[rgba(255,255,255,0.9)]" />
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Stylebox">
                      <SageIntacctPreview />
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}