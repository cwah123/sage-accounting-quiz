import { motion } from "motion/react";
import svgPaths from "../../imports/svg-ygakoriasz";
import imgCopilotLogo from "figma:asset/153b955bbde3b9be1a424e94aba682a8bf4e8034.png";

interface ProductCardProps {
  type: "individual" | "accounting" | "intacct";
}

function CheckIcon() {
  return (
    <div className="-translate-y-1/2 absolute left-[14.41px] size-[26.286px] top-[calc(50%+2.31px)]">
      <div className="absolute inset-[-128.26%_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.2866 60.0002">
          <g>
            <path
              clipRule="evenodd"
              d={svgPaths.p32df4600}
              fill="white"
              fillRule="evenodd"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

function SelfAssessmentPreview() {
  return (
    <div className="h-[267px] overflow-clip relative shrink-0 w-[404px]">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute blur-[0px] h-[121px] left-[calc(50%-1px)] top-[calc(50%-28px)] w-[304px]" style={{ backgroundImage: "linear-gradient(-46.8073deg, rgb(143, 73, 254) 65.629%, rgb(17, 175, 255) 23.116%, rgb(0, 214, 57) 94.112%)" }} />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[237.971px] left-[calc(50%+3.58px)] top-[calc(50%+3.51px)] w-[370.846px]">
        <div className="absolute inset-[-4.1%_-2.63%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 390.347 257.472">
            <g filter="url(#filter0_f_1_280812)" opacity="0.5">
              <path d={svgPaths.p1508e972} fill="url(#paint0_linear_1_280812)" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="257.472" id="filter0_f_1_280812" width="390.347" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_1_280812" stdDeviation="4.87544" />
              </filter>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_280812" x1="493.597" x2="86.757" y1="290.222" y2="-61.2628">
                <stop offset="0.1" stopColor="#8F49FE" />
                <stop offset="0.6" stopColor="#11AFFF" />
                <stop offset="1" stopColor="#00D639" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute contents left-[23px] top-[20px]">
        <div className="absolute bg-white h-[221px] left-[23px] rounded-bl-[12px] rounded-br-[28px] rounded-tl-[12px] rounded-tr-[12px] top-[20px] w-[358px]" />
        <div className="absolute bg-[#f2f5f6] h-[151px] left-[40px] top-[69px] w-[308px]" />
        <div className="-translate-y-1/2 absolute flex flex-col justify-center leading-[0] left-[54px] not-italic text-[11px] text-[rgba(0,0,0,0.9)] top-[85.5px] whitespace-nowrap">
          <p className="leading-[normal]">Tax year 2025/26</p>
        </div>
        <p className="absolute inset-[13.17%_32.57%_79.34%_10%] leading-[normal] not-italic text-[16.72px] text-black">Self Assessment Tax Returns</p>
        <div className="absolute h-[133px] left-[50px] overflow-clip top-[102px] w-[308px]">
          <div className="absolute bg-[#00d639] inset-[0_7.47%_20.3%_0]" />
          <div className="absolute bg-white inset-[1px_24px_28px_54px]" />
          <p className="absolute font-normal leading-[19.4px] left-[66.98px] text-[14px] text-[rgba(0,0,0,0.9)] top-[46.66px]">
            Submitted 1 January
            <br />
            at 2:13pm by Alice Ferns
          </p>
          <p className="absolute leading-[normal] left-[66.98px] not-italic text-[15.148px] text-[rgba(0,0,0,0.9)] top-[20.67px]">Submitted to HMRC</p>
          <CheckIcon />
        </div>
      </div>
      <div className="absolute contents left-[285px] top-[150px]">
        <div className="absolute flex items-center justify-center left-[285px] size-[101.699px] top-[150px]">
          <div className="-scale-y-100 flex-none">
            <div className="relative size-[101.699px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 101.699 101.699">
                <path d={svgPaths.pdccb540} fill="black" />
              </svg>
            </div>
          </div>
        </div>
        <div className="absolute left-[308.11px] overflow-clip size-[55.472px] top-[173.11px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 55.4721 55.4721">
            <g>
              <path d={svgPaths.p351fd780} fill="#00D639" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function SalesInvoicePreview() {
  return (
    <div className="h-[267px] overflow-clip relative shrink-0 w-[404px]">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute blur-[20px] h-[121px] left-[calc(50%-1px)] top-[calc(50%-28px)] w-[304px]" style={{ backgroundImage: "linear-gradient(-46.8073deg, rgb(143, 73, 254) 65.629%, rgb(17, 175, 255) 23.116%, rgb(0, 214, 57) 94.112%)" }} />
      <div className="absolute left-[22px] top-[20px] h-[227px] w-[360px] bg-white rounded-[12px] p-[20px]">
        <p className="leading-[normal] not-italic text-[16px] text-black mb-[20px]">Sales Invoice</p>
        <div className="bg-[#f2f5f6] h-[140px] w-full rounded-[8px] p-[20px]">
          <div className="flex items-center gap-[20px] mb-[40px]">
            <div className="flex items-center gap-[8px]">
              <div className="size-[20px] rounded-full bg-[#00d639] flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d={svgPaths.p1ce72a80} fill="white" />
                </svg>
              </div>
              <span className="text-[11px] text-[rgba(0,0,0,0.9)]">Created</span>
            </div>
            <div className="flex items-center gap-[8px]">
              <div className="size-[20px] rounded-full bg-[#00d639] flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d={svgPaths.p1ce72a80} fill="white" />
                </svg>
              </div>
              <span className="text-[11px] text-[rgba(0,0,0,0.9)]">Sent</span>
            </div>
            <div className="flex items-center gap-[8px]">
              <div className="size-[20px] rounded-full bg-[#00d639] flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d={svgPaths.p1ce72a80} fill="white" />
                </svg>
              </div>
              <span className="text-[11px] text-[rgba(0,0,0,0.9)]">Viewed</span>
            </div>
            <div className="flex items-center gap-[8px]">
              <div className="size-[20px] rounded-full bg-[#00d639] flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d={svgPaths.p1ce72a80} fill="white" />
                </svg>
              </div>
              <span className="text-[11px] text-[rgba(0,0,0,0.9)]">Paid</span>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <p className="text-[10px] text-[rgba(0,0,0,0.9)] mb-[8px]">Amount Paid</p>
              <p className="text-[15px] text-[rgba(0,0,0,0.9)]">£168.00</p>
            </div>
            <div>
              <p className="text-[10px] text-[rgba(0,0,0,0.9)] mb-[8px]">Amount Outstanding</p>
              <p className="text-[15px] text-[rgba(0,0,0,0.9)]">£0.00</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute right-[20px] bottom-[20px] size-[80px] rounded-full bg-black flex items-center justify-center">
        <img src={imgCopilotLogo} alt="Copilot" className="size-[50px]" />
      </div>
    </div>
  );
}

function CFODashboardPreview() {
  return (
    <div className="h-[267px] overflow-clip relative shrink-0 w-[404px]">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute blur-[20px] h-[121px] left-[calc(50%-1px)] top-[calc(50%-28px)] w-[304px]" style={{ backgroundImage: "linear-gradient(-46.8073deg, rgb(143, 73, 254) 65.629%, rgb(17, 175, 255) 23.116%, rgb(0, 214, 57) 94.112%)" }} />
      <div className="absolute left-[22px] top-[20px] h-[227px] w-[360px] bg-white rounded-[12px] p-[20px]">
        <div className="flex justify-between items-center mb-[20px]">
          <p className="leading-[normal] not-italic text-[16px] text-black">CFO Dashboard</p>
          <div className="flex gap-[8px]">
            <div className="px-[12px] py-[6px] bg-[#f2f5f6] rounded-[16px]">
              <span className="text-[11px] text-[rgba(0,0,0,0.9)]">£74,454</span>
            </div>
            <div className="px-[12px] py-[6px] bg-[#f2f5f6] rounded-[16px]">
              <span className="text-[11px] text-[rgba(0,0,0,0.9)]">£74,204</span>
            </div>
            <div className="px-[12px] py-[6px] bg-[#00d639] rounded-[16px]">
              <span className="text-[11px] text-white">4 weeks ▾</span>
            </div>
          </div>
        </div>
        <div className="space-y-[12px]">
          <div>
            <div className="flex justify-between mb-[4px]">
              <span className="text-[11px] text-[rgba(0,0,0,0.65)]">Outstanding Invoices</span>
              <span className="text-[11px] text-[rgba(0,0,0,0.9)]">Milestone tracker</span>
            </div>
            <div className="h-[20px] bg-gradient-to-r from-yellow-400 via-green-400 to-blue-400 rounded-[4px]"></div>
          </div>
          <div>
            <span className="text-[11px] text-[rgba(0,0,0,0.9)]">How we figure it out? Using AI</span>
            <div className="h-[20px] bg-gradient-to-r from-orange-400 to-yellow-400 rounded-[4px] mt-[4px]"></div>
          </div>
          <div>
            <div className="h-[20px] bg-gradient-to-r from-blue-400 to-purple-400 rounded-[4px]"></div>
          </div>
          <div className="flex justify-between mt-[16px]">
            <button className="px-[16px] py-[8px] bg-[#f2f5f6] rounded-[20px] text-[11px] text-[rgba(0,0,0,0.9)]">
              More info
            </button>
            <span className="text-[11px] text-[rgba(0,0,0,0.65)]">9 Dec, 10:32</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProductCard({ type }: ProductCardProps) {
  const products = {
    individual: {
      category: "Sole Traders with MTD requirements",
      title: "Sage Individual",
      subtitle: "with Ai",
      description: "Sort Self Assessment today and get ahead of Making Tax Digital without the stress.",
      features: "FREE plans available",
      button: "Discover Sage Individual",
      preview: <SelfAssessmentPreview />,
    },
    accounting: {
      category: "1-19 Employees",
      title: "Sage Accounting",
      subtitle: "with Ai",
      description: "Get paid 7 days faster and save 5 hours weekly with Sage Copilot.",
      features: "Get 90% off for 6 months then starting at £18 per month (excluding VAT).",
      button: "Discover Sage Accounting",
      preview: <SalesInvoicePreview />,
    },
    intacct: {
      category: "20+ Employees",
      title: "Sage Intacct",
      subtitle: "with Ai",
      description: "The leader in cloud accounting and financial management software. Scalable, highly customisable, with real-time reporting to help you make data-driven business decisions.",
      features: "Contact us to discuss pricing.",
      button: "Discover Sage Intacct",
      preview: <CFODashboardPreview />,
    },
  };

  const product = products[type];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-muted relative rounded-card shrink-0 w-full max-w-[440px]"
    >
      <div className="content-stretch flex flex-col items-start p-[40px] relative w-full">
        <div className="content-stretch flex flex-col items-start pb-[40px] relative shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0 w-full">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
              <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
                <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
                  <p className="text-sm text-foreground/65 font-medium w-full whitespace-pre-wrap">
                    {product.category}
                  </p>
                  <h3 className="w-full whitespace-pre-wrap text-foreground/90">
                    <span className="leading-[1.4]">
                      {product.title}
                      <br />
                    </span>
                    <span
                      className="bg-clip-text leading-[1.4]"
                      style={{
                        backgroundImage: "linear-gradient(60.9117deg, rgb(19, 160, 56) 1.6956%, rgb(0, 146, 219) 6.4822%, rgb(47, 122, 230) 18.56%, rgb(143, 73, 254) 28.678%)",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      {product.subtitle}
                    </span>
                  </h3>
                  <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
                    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
                      <div className="text-lg text-foreground/90 w-full whitespace-pre-wrap">
                        <p className="mb-[16px]">{product.description}</p>
                        <p className="font-bold">
                          {product.features}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-start flex flex-wrap gap-[16px] items-start relative shrink-0 w-full">
                  <button className="bg-primary hover:bg-accent transition-colors rounded-button px-[16px] py-[13px]">
                    <span className="text-sm text-primary-foreground/90 hover:text-accent-foreground">
                      {product.button}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
          {product.preview}
        </div>
      </div>
    </motion.div>
  );
}