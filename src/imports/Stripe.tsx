import svgPaths from "./svg-ygakoriasz";
import imgCopilotLogo from "figma:asset/153b955bbde3b9be1a424e94aba682a8bf4e8034.png";
import { imgGroup } from "./svg-ph8sv";

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <p className="font-['Sage_Headline:Black',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[50px] text-[rgba(255,255,255,0.9)] text-center w-full whitespace-pre-wrap">Easy-to-use online accounting software</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Paragraph">
        <p className="font-['Sage_Text:Regular',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[22px] text-[rgba(255,255,255,0.9)] text-center w-full whitespace-pre-wrap">Whether you are a sole trader, small business or a medium-sized business, we have your accounting needs covered. Our cloud accounting software is easy to use, secure, and customisable to your needs.</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Frame />
      <Frame12 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
      <Frame4 />
    </div>
  );
}

function PageLayout({ className }: { className?: string }) {
  return (
    <div className={className || "relative shrink-0 w-full"} data-name="Page layout">
      <div className="content-stretch flex flex-col items-start px-[240px] relative w-full">
        <div className="relative shrink-0 w-full" data-name="Stylebox padding">
          <div className="content-stretch flex flex-col items-start px-[80px] relative w-full">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Stylebox margin">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Hero  pseudo wrapper">
                <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full" data-name="Hero">
                  <Frame13 />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame25() {
  return <div className="content-stretch flex items-end justify-end mb-[-9px] shrink-0 w-full" />;
}

function Frame28() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0 w-full">
      <p className="font-['Sage_Text:Medium',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[18px] text-[rgba(255,255,255,0.85)] text-center">Find the right Sage accounting software for your business</p>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame28 />
      <p className="font-['Sage_Headline:Black',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[32px] text-[rgba(255,255,255,0.95)] text-center w-full whitespace-pre-wrap">How is your business structured?</p>
    </div>
  );
}

function Slot() {
  return <div className="h-[22.425px] shrink-0 w-full" data-name="Slot" />;
}

function StyleboxSpacer() {
  return (
    <div className="content-stretch flex flex-col h-[24px] items-start relative shrink-0 w-[766px]" data-name="Stylebox spacer">
      <Slot />
    </div>
  );
}

function Frame29() {
  return <div className="bg-[#00d639] h-full rounded-[60px] shrink-0 w-[177px]" />;
}

function Frame26() {
  return (
    <div className="bg-[#303030] content-stretch flex flex-[1_0_0] gap-[10px] items-center min-h-px min-w-px relative rounded-[60px] w-full">
      <Frame29 />
      <div className="absolute left-[170px] size-[12px] top-[-3.5px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
          <circle cx="6" cy="6" fill="var(--fill-0, #00D639)" id="Ellipse 446" r="6" />
        </svg>
      </div>
    </div>
  );
}

function Frame27() {
  return (
    <div className="h-[5px] relative shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[14px] relative size-full">
          <Frame26 />
        </div>
      </div>
    </div>
  );
}

function Slot1() {
  return <div className="h-[22.425px] shrink-0 w-full" data-name="Slot" />;
}

function StyleboxSpacer1() {
  return (
    <div className="content-stretch flex flex-col h-[40px] items-start relative shrink-0 w-[766px]" data-name="Stylebox spacer">
      <Slot1 />
    </div>
  );
}

function PQRPerson() {
  return (
    <div className="overflow-clip relative shrink-0 size-[60px]" data-name="P Q R/person">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
        <g id="surface1">
          <path d={svgPaths.p15ad6580} fill="var(--fill-0, white)" fillOpacity="0.9" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function CtaStates() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center justify-center pb-[24px] pt-[40px] px-[24px] relative rounded-[8px] shrink-0 size-[200px]" data-name="CTA states">
      <div aria-hidden="true" className="absolute border-2 border-[#e2e2e2] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <PQRPerson />
      <p className="font-['Sage_Text:Regular',sans-serif] leading-[1.6] min-w-full not-italic relative shrink-0 text-[18px] text-center text-white w-[min-content] whitespace-pre-wrap">
        Sole Trader
        <br aria-hidden="true" />
        <br aria-hidden="true" />
      </p>
    </div>
  );
}

function SoleTrader() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[200px]" data-name="sole_trader">
      <CtaStates />
    </div>
  );
}

function ABBag() {
  return (
    <div className="overflow-clip relative shrink-0 size-[60px]" data-name="A B/bag">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
        <g id="surface1">
          <path d={svgPaths.p3e2fd800} fill="var(--fill-0, white)" fillOpacity="0.9" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function CtaStates1() {
  return (
    <div className="bg-black content-stretch flex flex-col gap-[24px] items-center justify-center pb-[24px] pt-[40px] px-[24px] relative rounded-[8px] shrink-0 size-[200px]" data-name="CTA states">
      <div aria-hidden="true" className="absolute border-2 border-[#e2e2e2] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <ABBag />
      <p className="font-['Sage_Text:Regular',sans-serif] leading-[1.6] min-w-full not-italic relative shrink-0 text-[18px] text-center text-white w-[min-content] whitespace-pre-wrap">
        Limited Company
        <br aria-hidden="true" />
        <br aria-hidden="true" />
      </p>
    </div>
  );
}

function GHIHome() {
  return (
    <div className="overflow-clip relative shrink-0 size-[60px]" data-name="G H I/home">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
        <g id="surface1">
          <path d={svgPaths.p4497e00} fill="var(--fill-0, white)" fillOpacity="0.9" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame23() {
  return (
    <div className="bg-black content-stretch flex flex-col gap-[24px] items-center justify-center pb-[24px] pt-[40px] px-[24px] relative rounded-[8px] shrink-0 size-[200px]">
      <div aria-hidden="true" className="absolute border-2 border-[#e2e2e2] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <GHIHome />
      <p className="font-['Sage_Text:Regular',sans-serif] leading-[1.6] min-w-full not-italic relative shrink-0 text-[18px] text-center text-white w-[min-content] whitespace-pre-wrap">
        Other
        <br aria-hidden="true" />
        <br aria-hidden="true" />
      </p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex gap-[40px] items-center justify-center relative shrink-0 w-full">
      <SoleTrader />
      <CtaStates1 />
      <Frame23 />
    </div>
  );
}

function StyleboxPadding() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Stylebox padding">
      <Frame31 />
      <StyleboxSpacer />
      <Frame27 />
      <StyleboxSpacer1 />
      <Frame24 />
    </div>
  );
}

function PageLayout1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center relative shrink-0" data-name="Page layout">
      <StyleboxPadding />
    </div>
  );
}

function Frame22() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[240px] relative w-full">
          <PageLayout1 />
        </div>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="mb-[-9px] relative rounded-[40px] shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[40px] relative w-full">
        <Frame22 />
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="relative rounded-[40px] shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start pb-[49px] pt-[40px] px-[40px] relative w-full">
        <Frame25 />
        <Frame21 />
      </div>
    </div>
  );
}

function Modal() {
  return (
    <div className="bg-black content-stretch flex flex-col items-start overflow-clip px-[240px] py-[16px] relative rounded-[37.375px] shrink-0 w-[1920px]" data-name="Modal">
      <Frame20 />
    </div>
  );
}

function FlowLine() {
  return (
    <div className="absolute h-[141px] left-[-30px] top-[380px] w-[30px]" data-name="Flow line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 141">
        <g clipPath="url(#clip0_1_137743)" id="Flow line">
          <path d={svgPaths.p2164f100} id="Vector" stroke="var(--stroke-0, #00D639)" strokeWidth="38.25" />
        </g>
        <defs>
          <clipPath id="clip0_1_137743">
            <rect fill="white" height="141" width="30" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex items-center justify-center pb-[24px] relative shrink-0 w-full">
      <p className="font-['Sage_Text:Medium',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[18px] text-[rgba(255,255,255,0.85)] text-center">All accounting solutions</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <div className="font-['Sage_Text:Regular',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[0px] text-[18px] text-[rgba(0,0,0,0.9)] w-full whitespace-pre-wrap">
        <p className="mb-[16px]">Sort Self Assessment today and get ahead of Making Tax Digital without the stress.</p>
        <p className="font-['Sage_Text:Bold',sans-serif]">
          FREE plans available
          <br aria-hidden="true" />
          <br aria-hidden="true" />
          <br aria-hidden="true" />
        </p>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Paragraph />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <p className="font-['Sage_Text:Medium',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.65)] w-full whitespace-pre-wrap">Sole Traders with MTD requirements</p>
      <p className="font-['Sage_Headline:Black',sans-serif] leading-[0] not-italic relative shrink-0 text-[32px] text-[rgba(0,0,0,0.9)] w-full whitespace-pre-wrap">
        <span className="leading-[1.4]">
          Sage Individual
          <br aria-hidden="true" />
        </span>
        <span className="bg-clip-text leading-[1.4]" style={{ backgroundImage: "linear-gradient(60.9117deg, rgb(19, 160, 56) 1.6956%, rgb(0, 146, 219) 6.4822%, rgb(47, 122, 230) 18.56%, rgb(143, 73, 254) 28.678%)", WebkitTextFillColor: "transparent" }}>
          with Ai
        </span>
      </p>
      <Frame14 />
    </div>
  );
}

function Buttons() {
  return (
    <div className="bg-black content-stretch flex items-center justify-center px-[16px] py-[13px] relative rounded-[24px] shrink-0" data-name="Buttons">
      <div className="flex flex-col font-['Sage_Text:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.9)] text-center whitespace-nowrap">
        <p className="leading-[1.4]">Discover Sage Individual</p>
      </div>
    </div>
  );
}

function ButtonGroup() {
  return (
    <div className="content-start flex flex-wrap gap-[16px] items-start relative shrink-0 w-full" data-name="Button group">
      <Buttons />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Frame17 />
      <ButtonGroup />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame1 />
    </div>
  );
}

function Highlight() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0 w-full" data-name="Highlight">
      <Frame9 />
    </div>
  );
}

function HighlightPseudoWrapper() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="highlight pseudo wrapper">
      <Highlight />
    </div>
  );
}

function StyleboxMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[40px] relative shrink-0 w-full" data-name="Stylebox margin">
      <HighlightPseudoWrapper />
    </div>
  );
}

function Check() {
  return (
    <div className="-translate-y-1/2 absolute left-[14.41px] size-[26.286px] top-[calc(50%+2.31px)]" data-name="Check">
      <div className="absolute inset-[-128.26%_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.2866 60.0002">
          <g id="Check">
            <path clipRule="evenodd" d={svgPaths.p32df4600} fill="var(--fill-0, white)" fillRule="evenodd" id="icon-tick" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function SuccessMessage() {
  return (
    <div className="absolute h-[133px] left-[50px] overflow-clip top-[102px] w-[308px]" data-name="Success Message">
      <div className="absolute bg-[#00d639] inset-[0_7.47%_20.3%_0]" data-name="Rectangle" />
      <div className="absolute bg-white inset-[1px_24px_28px_54px]" data-name="White rectangle" />
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[19.4px] left-[66.98px] text-[14px] text-[rgba(0,0,0,0.9)] top-[46.66px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Submitted 1 January
        <br aria-hidden="true" />
        at 2:13pm by Alice Ferns
      </p>
      <p className="absolute font-['Lato:Bold',sans-serif] leading-[normal] left-[66.98px] not-italic text-[15.148px] text-[rgba(0,0,0,0.9)] top-[20.67px]">Submitted to HMRC</p>
      <Check />
    </div>
  );
}

function Base() {
  return (
    <div className="absolute contents left-[23px] top-[20px]" data-name="base">
      <div className="absolute bg-white h-[221px] left-[23px] rounded-bl-[12px] rounded-br-[28px] rounded-tl-[12px] rounded-tr-[12px] top-[20px] w-[358px]" />
      <div className="absolute bg-[#f2f5f6] h-[151px] left-[40px] top-[69px] w-[308px]" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Sage_UI:Medium',sans-serif] justify-center leading-[0] left-[54px] not-italic text-[11px] text-[rgba(0,0,0,0.9)] top-[85.5px] whitespace-nowrap">
        <p className="leading-[normal]">Tax year 2025/26</p>
      </div>
      <p className="absolute font-['Sage_UI:Bold',sans-serif] inset-[13.17%_32.57%_79.34%_10%] leading-[normal] not-italic text-[16.72px] text-black">Self Assessment Tax Returns</p>
      <SuccessMessage />
    </div>
  );
}

function Component60X60CrownGreenOnTransparentIcon() {
  return (
    <div className="absolute left-[308.11px] overflow-clip size-[55.472px] top-[173.11px]" data-name="60x60_crown_green-on-transparent_icon 2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 55.4721 55.4721">
        <g id="surface1">
          <path d={svgPaths.p351fd780} fill="var(--fill-0, #00D639)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute contents left-[285px] top-[150px]" data-name="icon">
      <div className="absolute flex items-center justify-center left-[285px] size-[101.699px] top-[150px]">
        <div className="-scale-y-100 flex-none">
          <div className="relative size-[101.699px]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 101.699 101.699">
              <path d={svgPaths.pdccb540} fill="var(--fill-0, black)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <Component60X60CrownGreenOnTransparentIcon />
    </div>
  );
}

function MicroUiSmallAccountingGbAgnostic({ className }: { className?: string }) {
  return (
    <div className={className || "h-[267px] overflow-clip relative shrink-0 w-[404px]"} data-name="micro-ui-SMALL-accounting-GB-agnostic">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute blur-[0px] h-[121px] left-[calc(50%-1px)] top-[calc(50%-28px)] w-[304px]" data-name="base glow" style={{ backgroundImage: "linear-gradient(-46.8073deg, rgb(143, 73, 254) 65.629%, rgb(17, 175, 255) 23.116%, rgb(0, 214, 57) 94.112%)" }} />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[237.971px] left-[calc(50%+3.58px)] top-[calc(50%+3.51px)] w-[370.846px]" data-name="upper glow">
        <div className="absolute inset-[-4.1%_-2.63%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 390.347 257.472">
            <g filter="url(#filter0_f_1_280812)" id="upper glow" opacity="0.5">
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
      <Base />
      <Icon />
    </div>
  );
}

function Stylebox() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Stylebox">
      <StyleboxMargin />
      <MicroUiSmallAccountingGbAgnostic />
    </div>
  );
}

function StyleboxPadding1() {
  return (
    <div className="bg-[#f2f5f6] relative rounded-[40px] shrink-0 w-full" data-name="Stylebox padding">
      <div className="content-stretch flex flex-col items-start p-[40px] relative w-full">
        <Stylebox />
      </div>
    </div>
  );
}

function ProductSignpostingCentered() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="product signposting centered">
      <StyleboxPadding1 />
    </div>
  );
}

function FlexItem() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Flex item 1">
      <ProductSignpostingCentered />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <div className="font-['Sage_Text:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[0px] text-[18px] text-[rgba(0,0,0,0.9)] w-full whitespace-pre-wrap">
        <p className="leading-[1.6] mb-[16px]">Get paid 7 days faster and save 5 hours weekly with Sage Copilot.</p>
        <p>
          <span className="font-['Sage_Text:Bold',sans-serif] leading-[1.6] not-italic">Get 90% off for 6 months</span>
          <span className="leading-[1.6]">
            {` then starting at £18 per month (excluding VAT).`}
            <br aria-hidden="true" />
            <br aria-hidden="true" />
          </span>
        </p>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Paragraph1 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <p className="font-['Sage_Text:Medium',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.65)] w-full whitespace-pre-wrap">1-19 Employees</p>
      <p className="font-['Sage_Headline:Black',sans-serif] leading-[0] not-italic relative shrink-0 text-[32px] text-[rgba(0,0,0,0.9)] w-full whitespace-pre-wrap">
        <span className="leading-[1.4]">
          Sage Accounting
          <br aria-hidden="true" />
        </span>
        <span className="bg-clip-text leading-[1.4]" style={{ backgroundImage: "linear-gradient(60.9117deg, rgb(19, 160, 56) 1.6956%, rgb(0, 146, 219) 6.4822%, rgb(47, 122, 230) 18.56%, rgb(143, 73, 254) 28.678%)", WebkitTextFillColor: "transparent" }}>
          with Ai
        </span>
      </p>
      <Frame15 />
    </div>
  );
}

function Buttons1() {
  return (
    <div className="bg-black content-stretch flex items-center justify-center px-[16px] py-[13px] relative rounded-[24px] shrink-0" data-name="Buttons">
      <div className="flex flex-col font-['Sage_Text:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.9)] text-center whitespace-nowrap">
        <p className="leading-[1.4]">Discover Sage Accounting</p>
      </div>
    </div>
  );
}

function ButtonGroup1() {
  return (
    <div className="content-start flex flex-wrap gap-[16px] items-start relative shrink-0 w-full" data-name="Button group">
      <Buttons1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Frame18 />
      <ButtonGroup1 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame2 />
    </div>
  );
}

function Highlight1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0 w-full" data-name="Highlight">
      <Frame10 />
    </div>
  );
}

function HighlightPseudoWrapper1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="highlight pseudo wrapper">
      <Highlight1 />
    </div>
  );
}

function StyleboxMargin1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[40px] relative shrink-0 w-full" data-name="Stylebox margin">
      <HighlightPseudoWrapper1 />
    </div>
  );
}

function Base1() {
  return (
    <div className="absolute contents inset-[7.5%_13.22%_14.81%_5.57%]" data-name="base">
      <div className="absolute inset-[7.5%_13.22%_14.81%_5.57%]" data-name="Vector">
        <div className="absolute inset-[-0.18%_-0.12%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 328.886 208.205">
            <path d={svgPaths.p2aa4d8f0} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, #E2E2E2)" strokeWidth="0.760539" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Sage_UI:Bold',sans-serif] inset-[12.42%_64.32%_80.2%_9.75%] leading-[normal] not-italic text-[16.171px] text-black whitespace-pre-wrap">Sales Invoice</p>
      <div className="absolute inset-[27.2%_17.07%_21.1%_9.64%]" data-name="Vector">
        <div className="absolute inset-[-0.27%_-0.13%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 296.861 138.794">
            <path d={svgPaths.p3409ee80} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, #E2E2E2)" strokeWidth="0.756557" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Sage_UI:Bold',sans-serif] inset-[65.69%_68.46%_27.32%_16.39%] leading-[normal] not-italic text-[15.211px] text-[rgba(0,0,0,0.9)] whitespace-pre-wrap">£168.00</p>
      <p className="absolute font-['Sage_UI:Regular',sans-serif] inset-[65.69%_23.56%_27.32%_66.17%] leading-[normal] not-italic text-[15.211px] text-[rgba(0,0,0,0.9)] whitespace-pre-wrap">£0.00</p>
      <p className="absolute font-['Sage_UI:Regular',sans-serif] inset-[59.91%_24.65%_35.81%_53.78%] leading-[normal] not-italic text-[9.126px] text-[rgba(0,0,0,0.9)] whitespace-pre-wrap">Amount Outstanding</p>
      <p className="absolute font-['Sage_UI:Medium',sans-serif] inset-[59.84%_69.74%_35.89%_16.39%] leading-[normal] not-italic text-[9.126px] text-[rgba(0,0,0,0.9)] whitespace-pre-wrap">Amount Paid</p>
      <div className="absolute inset-[27.04%_17.02%_45.34%_9.5%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 296.889 73.749">
          <path d={svgPaths.p3ad68000} fill="var(--fill-0, #F2F5F6)" id="Vector" />
        </svg>
      </div>
      <p className="absolute font-['Sage_UI:Medium',sans-serif] inset-[43.31%_73.53%_51.64%_16.2%] leading-[normal] not-italic text-[10.648px] text-[rgba(0,0,0,0.9)] whitespace-pre-wrap">Created</p>
      <p className="absolute font-['Sage_UI:Medium',sans-serif] inset-[43.31%_58.8%_51.64%_35.29%] leading-[normal] not-italic text-[10.648px] text-[rgba(0,0,0,0.9)] whitespace-pre-wrap">Sent</p>
      <p className="absolute font-['Sage_UI:Medium',sans-serif] inset-[43.42%_40.03%_51.53%_50.98%] leading-[normal] not-italic text-[10.648px] text-[rgba(0,0,0,0.9)] whitespace-pre-wrap">Viewed</p>
      <p className="absolute font-['Sage_UI:Medium',sans-serif] inset-[43.42%_24.71%_51.53%_69.65%] leading-[normal] not-italic text-[10.648px] text-[rgba(0,0,0,0.9)] whitespace-pre-wrap">Paid</p>
      <div className="absolute inset-[36.46%_24.4%_62.54%_17.89%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 233.158 2.64624">
          <path d={svgPaths.p220b8400} fill="var(--fill-0, #CCD6DB)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[32.25%_75.7%_58.83%_17.89%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.9065 23.8161">
          <path d={svgPaths.p19fc91c0} fill="var(--fill-0, #F2F5F6)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[34.28%_76.61%_60.49%_18.76%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.7102 13.9754">
          <path clipRule="evenodd" d={svgPaths.p1ce72a80} fill="var(--fill-0, #00A159)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[32.25%_58.6%_58.83%_34.99%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.9065 23.8161">
          <path d={svgPaths.p19fc91c0} fill="var(--fill-0, #F2F5F6)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[34.28%_59.51%_60.49%_35.86%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.7101 13.9754">
          <path clipRule="evenodd" d={svgPaths.p2ab2b700} fill="var(--fill-0, #00A159)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[32.25%_41.5%_58.83%_52.09%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.9065 23.8161">
          <path d={svgPaths.p19fc91c0} fill="var(--fill-0, #F2F5F6)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[34.28%_42.41%_60.49%_52.96%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.7101 13.9754">
          <path clipRule="evenodd" d={svgPaths.pef3d440} fill="var(--fill-0, #00A159)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[32.25%_24.4%_58.83%_69.19%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.9065 23.8161">
          <path d={svgPaths.p19fc91c0} fill="var(--fill-0, #F2F5F6)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[34.28%_25.31%_60.49%_70.06%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.71 13.9754">
          <path clipRule="evenodd" d={svgPaths.p390e51b0} fill="var(--fill-0, #00A159)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[79.93%_8.27%_9.25%_41.45%]" data-name="Group">
      <div className="absolute inset-[-21.16%_-6.02%_-63.48%_-6.02%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 227.572 53.3314">
          <g filter="url(#filter0_d_1_142512)" id="Group">
            <path d={svgPaths.p119cb280} fill="var(--fill-0, white)" id="Vector" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="53.3314" id="filter0_d_1_142512" width="227.572" x="3.77693e-07" y="-6.60966e-08">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="6.11165" />
              <feGaussianBlur stdDeviation="6.11165" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_142512" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_142512" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="absolute inset-[60.39%_4.58%_7.85%_37.76%]" data-name="Mask group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 232.942 84.791">
        <g id="Mask group">
          <mask height="85" id="mask0_1_180657" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="233" x="0" y="0">
            <g id="Group">
              <path d={svgPaths.p2b90a80} fill="var(--fill-0, white)" id="Vector" />
            </g>
          </mask>
          <g mask="url(#mask0_1_180657)">
            <path d={svgPaths.p355ebf80} fill="url(#paint0_linear_1_180657)" id="Vector_2" />
          </g>
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_180657" x1="-1.2358e-05" x2="-1.2358e-05" y1="84.791" y2="-2.35316e-06">
            <stop stopColor="#8F49FE" />
            <stop offset="0.512152" stopColor="#0092DB" />
            <stop offset="1" stopColor="#13A038" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[64.58%_52.82%_28.14%_42.37%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[19.45px_19.45px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.446 19.4507">
        <g id="Group">
          <path d={svgPaths.paaba00} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p323d9b80} fill="url(#paint0_radial_1_233125)" id="Vector_2" />
          <path d={svgPaths.p16886140} fill="url(#paint1_linear_1_233125)" id="Vector_3" />
        </g>
        <defs>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(3.61808 4.14603 -3.98018 3.47336 12.2857 6.25751)" gradientUnits="userSpaceOnUse" id="paint0_radial_1_233125" r="1">
            <stop offset="0.34" stopColor="#9D60FF" />
            <stop offset="0.52" stopColor="#5A99F1" />
            <stop offset="0.59" stopColor="#32B3E8" />
            <stop offset="0.68" stopColor="#0DCCE0" />
            <stop offset="0.72" stopColor="#00D6DE" />
            <stop offset="0.74" stopColor="#00D6D7" />
            <stop offset="0.77" stopColor="#00D6C6" />
            <stop offset="0.81" stopColor="#00D6AA" />
            <stop offset="0.84" stopColor="#00D682" />
            <stop offset="0.88" stopColor="#00D650" />
            <stop offset="0.9" stopColor="#00D639" />
          </radialGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_233125" x1="9.52316" x2="4.28755" y1="2.02232" y2="17.0033">
            <stop offset="0.27" stopColor="#9D60FF" />
            <stop offset="0.33" stopColor="#7C78F8" />
            <stop offset="0.48" stopColor="#29B7E6" />
            <stop offset="0.54" stopColor="#00D6DE" />
            <stop offset="0.57" stopColor="#00D6DA" />
            <stop offset="0.59" stopColor="#00D6D0" />
            <stop offset="0.6" stopColor="#00D6C0" />
            <stop offset="0.62" stopColor="#00D6A8" />
            <stop offset="0.63" stopColor="#00D68A" />
            <stop offset="0.65" stopColor="#00D665" />
            <stop offset="0.66" stopColor="#00D639" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div className="absolute contents inset-[64.58%_52.82%_28.14%_42.37%]" data-name="Clip path group">
      <Group1 />
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute contents inset-[60.39%_4.58%_7.85%_37.76%]">
      <div className="absolute inset-[60.39%_4.58%_9.02%_37.76%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 232.942 81.691">
          <path d={svgPaths.p2f5d080} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <Group />
      <div className="absolute inset-[60.39%_4.58%_7.9%_37.76%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 232.942 84.6745">
          <path d={svgPaths.p1bcff180} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[60.56%_4.7%_8.03%_37.87%]" data-name="Vector">
        <div className="absolute inset-[-0.54%_-0.19%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 232.909 84.7576">
            <path d={svgPaths.p1bdeadc0} id="Vector" stroke="var(--stroke-0, #E2E2E2)" strokeWidth="0.898412" />
          </svg>
        </div>
      </div>
      <MaskGroup />
      <ClipPathGroup />
      <p className="absolute font-['Sage_UI:Medium',sans-serif] inset-[65.65%_42.65%_29.3%_48.11%] leading-[normal] not-italic text-[10.781px] text-[rgba(0,0,0,0.9)] whitespace-pre-wrap">Copilot</p>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents font-['Sage_UI:Bold',sans-serif] inset-[74.04%_13.2%_12.92%_42.37%] leading-[normal] not-italic text-[12.578px] text-[rgba(0,0,0,0.9)] whitespace-pre-wrap" data-name="Group">
      <p className="absolute inset-[74.04%_46.85%_20.13%_42.37%]">{`£7,795 `}</p>
      <p className="absolute inset-[81.26%_48.13%_12.92%_42.37%]">{`Cakes `}</p>
      <p className="absolute inset-[74.04%_13.2%_20.13%_76.27%]">{` Canny`}</p>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents font-['Sage_UI:Regular',sans-serif] inset-[74.04%_14.06%_12.92%_52.31%] leading-[normal] not-italic text-[12.578px] text-[rgba(0,0,0,0.9)] whitespace-pre-wrap" data-name="Group">
      <p className="absolute inset-[74.04%_24%_20.13%_53.67%]">{`of totalsales for `}</p>
      <p className="absolute inset-[81.26%_14.06%_12.92%_52.31%]">over the last 12 months</p>
    </div>
  );
}

function Copilot() {
  return (
    <div className="absolute contents inset-[60.39%_4.58%_7.85%_37.76%]" data-name="copilot">
      <Group10 />
      <Group2 />
      <Group3 />
    </div>
  );
}

function MicroUiSmallAccountingGbAgnostic1({ className }: { className?: string }) {
  return (
    <div className={className || "h-[267px] overflow-clip relative shrink-0 w-[404px]"} data-name="micro-ui-SMALL-accounting-GB-agnostic">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[163px] items-center justify-center left-[calc(50%-10px)] top-[calc(50%-3px)] w-[286px]">
        <div className="flex-none rotate-180">
          <div className="blur-[0px] h-[163px] w-[286px]" data-name="glow" style={{ backgroundImage: "linear-gradient(105.476deg, rgb(0, 214, 57) 6.8147%, rgb(17, 175, 255) 82.57%, rgb(143, 73, 254) 177.27%)" }} />
        </div>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[230px] left-[calc(50%+1.5px)] top-[calc(50%-0.5px)] w-[367px]" data-name="Union">
        <div className="absolute inset-[-4.35%_-2.72%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 387 250">
            <g filter="url(#filter0_f_1_295119)" id="Union" opacity="0.5">
              <path d={svgPaths.p2971b100} fill="url(#paint0_linear_1_295119)" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="250" id="filter0_f_1_295119" width="387" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_1_295119" stdDeviation="5" />
              </filter>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_295119" x1="377" x2="32.128" y1="195.716" y2="-168.547">
                <stop stopColor="#00D639" />
                <stop offset="0.4" stopColor="#11AFFF" />
                <stop offset="0.9" stopColor="#8F49FE" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <Base1 />
      <Copilot />
    </div>
  );
}

function Stylebox1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Stylebox">
      <StyleboxMargin1 />
      <MicroUiSmallAccountingGbAgnostic1 />
    </div>
  );
}

function StyleboxPadding2() {
  return (
    <div className="bg-[#f2f5f6] relative rounded-[40px] shrink-0 w-full" data-name="Stylebox padding">
      <div className="content-stretch flex flex-col items-start p-[40px] relative w-full">
        <Stylebox1 />
      </div>
    </div>
  );
}

function ProductSignpostingCentered1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="product signposting centered">
      <StyleboxPadding2 />
    </div>
  );
}

function FlexItem1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Flex item 4">
      <ProductSignpostingCentered1 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <div className="font-['Sage_Text:Regular',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[0px] text-[18px] text-[rgba(0,0,0,0.9)] w-full whitespace-pre-wrap">
        <p className="mb-[16px]">The leader in cloud accounting and financial management software. Scalable, highly customisable, with real-time reporting to help you make data-driven business decisions.</p>
        <p className="font-['Sage_Text:Bold',sans-serif]">Contact us to discuss pricing.</p>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Paragraph2 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <p className="font-['Sage_Text:Medium',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.65)] w-full whitespace-pre-wrap">20+ Employees</p>
      <p className="font-['Sage_Headline:Black',sans-serif] leading-[0] not-italic relative shrink-0 text-[32px] text-[rgba(0,0,0,0.9)] w-full whitespace-pre-wrap">
        <span className="leading-[1.4]">
          Sage Intacct
          <br aria-hidden="true" />
        </span>
        <span className="bg-clip-text leading-[1.4]" style={{ backgroundImage: "linear-gradient(60.9117deg, rgb(19, 160, 56) 1.6956%, rgb(0, 146, 219) 6.4822%, rgb(47, 122, 230) 18.56%, rgb(143, 73, 254) 28.678%)", WebkitTextFillColor: "transparent" }}>
          with Ai
        </span>
      </p>
      <Frame16 />
    </div>
  );
}

function Buttons2() {
  return (
    <div className="bg-black content-stretch flex items-center justify-center px-[16px] py-[13px] relative rounded-[24px] shrink-0" data-name="Buttons">
      <div className="flex flex-col font-['Sage_Text:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.9)] text-center whitespace-nowrap">
        <p className="leading-[1.4]">Discover Sage Intacct</p>
      </div>
    </div>
  );
}

function ButtonGroup2() {
  return (
    <div className="content-start flex flex-wrap gap-[16px] items-start relative shrink-0 w-full" data-name="Button group">
      <Buttons2 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Frame19 />
      <ButtonGroup2 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame3 />
    </div>
  );
}

function Highlight2() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0 w-full" data-name="Highlight">
      <Frame11 />
    </div>
  );
}

function HighlightPseudoWrapper2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="highlight pseudo wrapper">
      <Highlight2 />
    </div>
  );
}

function Slot2() {
  return <div className="h-px shrink-0 w-full" data-name="Slot" />;
}

function StyleboxMargin2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[40px] relative shrink-0 w-full" data-name="Stylebox margin">
      <HighlightPseudoWrapper2 />
      <Slot2 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute h-[7.461px] left-[1.53px] top-[1.12px] w-[5.594px]">
      <div className="absolute inset-[-8.06%_-13.33%_0_-13.34%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.08634 8.06219">
          <g id="Group 1504">
            <line id="Line 257" stroke="var(--stroke-0, #00D639)" strokeLinecap="round" strokeWidth="1.49016" x1="3.52537" x2="3.52537" y1="2.32802" y2="7.31711" />
            <path d={svgPaths.p10801dc0} id="Vector 21" stroke="var(--stroke-0, #00D639)" strokeLinecap="round" strokeWidth="1.49189" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[3.716px] items-center justify-center relative shrink-0">
      <p className="font-['Sage_UI:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[11.149px] text-black">£14,441K</p>
      <div className="bg-white h-[9.155px] overflow-clip relative shrink-0 w-[8.646px]" data-name="Arrows S">
        <Group4 />
      </div>
    </div>
  );
}

function KpiCardTablet() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[3.716px] items-start left-[calc(50%-128.07px)] top-[calc(50%-48.89px)]" data-name="KPI Card Tablet">
      <p className="font-['Sage_UI:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9.291px] text-black">Assets</p>
      <Frame5 />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute h-[7.461px] left-[1.53px] top-[1.12px] w-[5.594px]">
      <div className="absolute inset-[-8.06%_-13.33%_0_-13.34%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.08634 8.06219">
          <g id="Group 1504">
            <line id="Line 257" stroke="var(--stroke-0, #00D639)" strokeLinecap="round" strokeWidth="1.49016" x1="3.52537" x2="3.52537" y1="2.32802" y2="7.31711" />
            <path d={svgPaths.p10801dc0} id="Vector 21" stroke="var(--stroke-0, #00D639)" strokeLinecap="round" strokeWidth="1.49189" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[3.716px] items-center justify-center relative shrink-0">
      <p className="font-['Sage_UI:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[11.149px] text-black">£74,472K</p>
      <div className="bg-white h-[9.155px] overflow-clip relative shrink-0 w-[8.646px]" data-name="Arrows S">
        <Group5 />
      </div>
    </div>
  );
}

function KpiCardTablet1() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[3.716px] items-start left-[calc(50%-44.45px)] top-[calc(50%-48.89px)]" data-name="KPI Card Tablet">
      <p className="font-['Sage_UI:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9.291px] text-black">Revenue</p>
      <Frame6 />
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute h-[7.461px] left-[1.53px] top-[1.12px] w-[5.594px]">
      <div className="absolute inset-[-8.06%_-13.33%_0_-13.34%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.08634 8.06219">
          <g id="Group 1504">
            <line id="Line 257" stroke="var(--stroke-0, #00D639)" strokeLinecap="round" strokeWidth="1.49016" x1="3.52537" x2="3.52537" y1="2.32802" y2="7.31711" />
            <path d={svgPaths.p10801dc0} id="Vector 21" stroke="var(--stroke-0, #00D639)" strokeLinecap="round" strokeWidth="1.49189" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[3.716px] items-center justify-center relative shrink-0">
      <p className="font-['Sage_UI:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[11.149px] text-black">$277,475K</p>
      <div className="bg-white h-[9.155px] overflow-clip relative shrink-0 w-[8.646px]" data-name="Arrows S">
        <Group6 />
      </div>
    </div>
  );
}

function KpiCardTablet2() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[3.716px] items-start left-[calc(50%+40.09px)] top-[calc(50%-48.89px)]" data-name="KPI Card Tablet">
      <p className="font-['Sage_UI:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9.291px] text-black">Net Income</p>
      <Frame7 />
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute h-[7.461px] left-[1.53px] top-[1.12px] w-[5.594px]">
      <div className="absolute inset-[-8.06%_-13.33%_0_-13.34%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.08634 8.06219">
          <g id="Group 1504">
            <line id="Line 257" stroke="var(--stroke-0, #00D639)" strokeLinecap="round" strokeWidth="1.49016" x1="3.52537" x2="3.52537" y1="2.32802" y2="7.31711" />
            <path d={svgPaths.p10801dc0} id="Vector 21" stroke="var(--stroke-0, #00D639)" strokeLinecap="round" strokeWidth="1.49189" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[3.716px] items-center justify-center relative shrink-0">
      <p className="font-['Sage_UI:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[11.149px] text-black">$14,441K</p>
      <div className="bg-white h-[9.155px] overflow-clip relative shrink-0 w-[8.646px]" data-name="Arrows S">
        <Group7 />
      </div>
    </div>
  );
}

function KpiCardTablet3() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[3.716px] items-start left-[calc(50%+125.57px)] top-[calc(50%-48.89px)]" data-name="KPI Card Tablet">
      <p className="font-['Sage_UI:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9.291px] text-black">Assets</p>
      <Frame8 />
    </div>
  );
}

function Overlay() {
  return (
    <div className="absolute contents inset-[18.33%_5.46%_60.83%_2.63%]" data-name="Overlay">
      <div className="absolute bg-white border-[#e2e2e2] border-[0.929px] border-solid bottom-[60.83%] left-[2.63%] right-1/2 rounded-[3.716px] top-[18.33%]" />
      <KpiCardTablet />
      <KpiCardTablet1 />
      <KpiCardTablet2 />
      <KpiCardTablet3 />
      <div className="absolute flex inset-[18.33%_74.21%_60.83%_25.79%] items-center justify-center">
        <div className="flex-none h-px rotate-90 w-[46.455px]">
          <div className="relative size-full">
            <div className="absolute inset-[-0.46px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46.4546 0.464546">
                <line id="Line 309" stroke="var(--stroke-0, #E6EBED)" strokeWidth="0.464546" x2="46.4546" y1="0.232273" y2="0.232273" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute contents left-[182.1px] top-[96.63px]">
      <div className="absolute bg-white border-[#e2e2e2] border-[0.929px] border-solid h-[117.066px] left-[182.1px] rounded-[3.716px] top-[96.63px] w-[161.662px]" />
      <div className="absolute flex h-[24.156px] items-center justify-center left-[189.53px] top-[120.78px] w-[146.797px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="bg-[#f6f6f6] h-[146.797px] w-[24.156px]" />
        </div>
      </div>
      <p className="absolute font-['Sage_UI:Bold',sans-serif] h-[9.215px] leading-[normal] left-[189.67px] not-italic text-[7.433px] text-black top-[104px] w-[94.539px] whitespace-pre-wrap">Cash Flow Detail by Entity</p>
      <div className="absolute h-0 left-[189.67px] top-[116.9px] w-[146.797px]">
        <div className="absolute inset-[-0.46px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 146.797 0.464546">
            <line id="Line 293" stroke="var(--stroke-0, #CCD6DB)" strokeWidth="0.464546" x2="146.797" y1="0.232273" y2="0.232273" />
          </svg>
        </div>
      </div>
      <p className="-translate-x-full absolute font-['Sage_UI:Regular',sans-serif] leading-[normal] left-[333px] not-italic text-[7.433px] text-black text-right top-[122.43px]">Houston</p>
      <p className="-translate-x-full absolute font-['Sage_UI:Regular',sans-serif] h-[6.451px] leading-[normal] left-[333.36px] not-italic text-[5.575px] text-black text-right top-[133.63px] w-[32.143px] whitespace-pre-wrap">03/05</p>
      <p className="-translate-x-full absolute font-['Sage_UI:Regular',sans-serif] h-[9.215px] leading-[normal] left-[291.77px] not-italic text-[7.433px] text-black text-right top-[122.43px] w-[39.706px] whitespace-pre-wrap">Los Angeles</p>
      <p className="-translate-x-full absolute font-['Sage_UI:Regular',sans-serif] h-[6.451px] leading-[normal] left-[291.77px] not-italic text-[5.575px] text-black text-right top-[133.63px] w-[32.143px] whitespace-pre-wrap">03/05</p>
      <p className="absolute font-['Sage_UI:Bold',sans-serif] h-[9.215px] leading-[normal] left-[190.61px] not-italic text-[7.433px] text-[rgba(0,0,0,0.9)] top-[148.25px] w-[40.652px] whitespace-pre-wrap">Operations</p>
      <p className="absolute font-['Sage_UI:Regular',sans-serif] h-[6.451px] leading-[normal] left-[190.61px] not-italic text-[5.575px] text-[rgba(0,0,0,0.65)] top-[163.91px] w-[29.307px] whitespace-pre-wrap">Net income</p>
      <p className="-translate-x-full absolute font-['Sage_UI:Regular',sans-serif] h-[9.215px] leading-[normal] left-[291.77px] not-italic text-[7.433px] text-[rgba(0,0,0,0.65)] text-right top-[161.15px] w-[40.652px] whitespace-pre-wrap">331,687.23</p>
      <p className="-translate-x-full absolute font-['Sage_UI:Regular',sans-serif] h-[9.215px] leading-[normal] left-[333.36px] not-italic text-[7.433px] text-[rgba(0,0,0,0.65)] text-right top-[161.15px] w-[35.925px] whitespace-pre-wrap">98,476.89</p>
      <p className="absolute font-['Sage_UI:Regular',sans-serif] h-[12.902px] leading-[normal] left-[190.61px] not-italic text-[5.575px] text-[rgba(0,0,0,0.65)] top-[177.46px] w-[49.16px] whitespace-pre-wrap">Items not requiring cash</p>
      <p className="absolute font-['Sage_UI:Medium',sans-serif] h-[12.902px] leading-[normal] left-[190.61px] not-italic text-[5.575px] text-[rgba(0,0,0,0.9)] top-[195.26px] w-[49.16px] whitespace-pre-wrap">Total Operations for Cash Flow</p>
      <p className="-translate-x-full absolute font-['Sage_UI:Regular',sans-serif] h-[9.215px] leading-[normal] left-[291.77px] not-italic text-[7.433px] text-[rgba(0,0,0,0.65)] text-right top-[179.31px] w-[16.072px] whitespace-pre-wrap">0.00</p>
      <p className="-translate-x-full absolute font-['Sage_UI:Regular',sans-serif] h-[9.215px] leading-[normal] left-[333.36px] not-italic text-[7.433px] text-[rgba(0,0,0,0.65)] text-right top-[179.31px] w-[16.072px] whitespace-pre-wrap">0.00</p>
      <p className="-translate-x-full absolute font-['Sage_UI:Medium',sans-serif] h-[9.215px] leading-[normal] left-[291.77px] not-italic text-[7.433px] text-[rgba(0,0,0,0.9)] text-right top-[197.1px] w-[40.652px] whitespace-pre-wrap">331,687.23</p>
      <p className="-translate-x-full absolute font-['Sage_UI:Medium',sans-serif] h-[9.215px] leading-[normal] left-[333.36px] not-italic text-[7.433px] text-[rgba(0,0,0,0.9)] text-right top-[197.1px] w-[35.925px] whitespace-pre-wrap">98,476.89</p>
      <div className="absolute h-0 left-[190.61px] top-[193.42px] w-[146.536px]">
        <div className="absolute inset-[-0.43px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 146.536 0.429756">
            <line id="Line 307" stroke="var(--stroke-0, #E2E2E2)" strokeWidth="0.429756" x2="146.536" y1="0.214878" y2="0.214878" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-[190.61px] top-[174.05px] w-[146.536px]">
        <div className="absolute inset-[-0.46px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 146.536 0.464546">
            <line id="Line 308" stroke="var(--stroke-0, #E2E2E2)" strokeWidth="0.464546" x2="146.536" y1="0.232273" y2="0.232273" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute contents left-[9.29px] top-[96.63px]">
      <div className="absolute h-[117.066px] left-[9.29px] top-[96.63px] w-[167.237px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 167.237 117.066">
          <path d={svgPaths.p1c045380} fill="var(--fill-0, white)" id="Rectangle 4438" stroke="var(--stroke-0, #E2E2E2)" strokeWidth="0.929093" />
        </svg>
      </div>
      <p className="absolute font-['Sage_UI:Bold',sans-serif] h-[9.446px] leading-[9.291px] left-[17.65px] not-italic text-[7.433px] text-black top-[104.18px] w-[130.073px] whitespace-pre-wrap">Revenue per Retail Hour by Location</p>
      <div className="absolute h-0 left-[17.65px] top-[117.41px] w-[152.371px]">
        <div className="absolute inset-[-0.46px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 152.371 0.464546">
            <line id="Line 292" stroke="var(--stroke-0, #CCD6DB)" strokeWidth="0.464546" x2="152.371" y1="0.232273" y2="0.232273" />
          </svg>
        </div>
      </div>
      <div className="absolute bg-[#f6f6f6] h-[75.566px] left-[77.11px] top-[122.13px] w-[26.015px]" />
      <div className="absolute bg-[#f6f6f6] h-[75.566px] left-[131px] top-[122.13px] w-[26.015px]" />
      <div className="absolute flex h-[15.113px] items-center justify-center left-[48.31px] top-[122.13px] w-[100.342px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="bg-[#cbd95d] h-[100.342px] w-[15.113px]" data-name="Rectangle" />
        </div>
      </div>
      <div className="absolute flex h-[15.113px] items-center justify-center left-[48.31px] top-[141.02px] w-[117.066px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="bg-[#5db2b1] h-[117.066px] w-[15.113px]" data-name="Rectangle" />
        </div>
      </div>
      <div className="absolute flex h-[15.113px] items-center justify-center left-[48.31px] top-[159.91px] w-[90.122px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="bg-[#ffb500] h-[90.122px] w-[15.113px]" data-name="Rectangle" />
        </div>
      </div>
      <div className="absolute flex h-[15.113px] items-center justify-center left-[48.31px] top-[178.8px] w-[79.902px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="bg-[#ed7d43] h-[79.902px] w-[15.113px]" data-name="Rectangle" />
        </div>
      </div>
      <p className="-translate-x-full absolute font-['Sage_UI:Regular',sans-serif] h-[6.612px] leading-[normal] left-[46.45px] not-italic text-[5.575px] text-black text-right top-[125.91px] w-[29.731px] whitespace-pre-wrap">London</p>
      <p className="-translate-x-full absolute font-['Sage_UI:Regular',sans-serif] leading-[normal] left-[46.65px] not-italic text-[5.575px] text-black text-right top-[144.8px]">Manchester</p>
      <p className="-translate-x-full absolute font-['Sage_UI:Regular',sans-serif] leading-[normal] left-[46.59px] not-italic text-[5.575px] text-black text-right top-[163.69px]">Leeds</p>
      <div className="absolute flex h-[75.566px] items-center justify-center left-[48.31px] top-[122.13px] w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "153.5" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[75.566px]">
            <div className="absolute inset-[-0.43px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 75.5662 0.430468">
                <line id="Line 239" stroke="var(--stroke-0, #E6EBED)" strokeWidth="0.430468" x2="75.5662" y1="0.215234" y2="0.215234" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-0 left-[48.31px] top-[197.7px] w-[118.924px]">
        <div className="absolute inset-[-0.43px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 118.924 0.430468">
            <line id="Line 240" stroke="var(--stroke-0, #E6EBED)" strokeWidth="0.430468" x2="118.924" y1="0.215234" y2="0.215234" />
          </svg>
        </div>
      </div>
      <p className="-translate-x-full absolute font-['Sage_UI:Regular',sans-serif] h-[6.612px] leading-[normal] left-[46.45px] not-italic text-[5.575px] text-black text-right top-[182.58px] w-[22.298px] whitespace-pre-wrap">Brighton</p>
      <p className="absolute font-['Sage_UI:Regular',sans-serif] h-[9.446px] leading-[1.6] left-[47.2px] not-italic text-[5.575px] text-[rgba(0,0,0,0.65)] top-[200.48px] w-[6.504px] whitespace-pre-wrap">£0</p>
      <p className="absolute font-['Sage_UI:Regular',sans-serif] h-[9.446px] leading-[1.6] left-[66.89px] not-italic text-[5.575px] text-[rgba(0,0,0,0.65)] top-[200.48px] w-[13.936px] whitespace-pre-wrap">£300</p>
      <p className="absolute font-['Sage_UI:Regular',sans-serif] h-[9.446px] leading-[1.6] left-[93.84px] not-italic text-[5.575px] text-[rgba(0,0,0,0.65)] top-[200.48px] w-[13.936px] whitespace-pre-wrap">£600</p>
      <p className="absolute font-['Sage_UI:Regular',sans-serif] h-[9.446px] leading-[1.6] left-[120.78px] not-italic text-[5.575px] text-[rgba(0,0,0,0.65)] top-[200.48px] w-[13.936px] whitespace-pre-wrap">£900</p>
      <p className="absolute font-['Sage_UI:Regular',sans-serif] h-[9.446px] leading-[1.6] left-[147.73px] not-italic text-[5.575px] text-[rgba(0,0,0,0.65)] top-[200.48px] w-[18.582px] whitespace-pre-wrap">£1,200</p>
    </div>
  );
}

function MicroUiIntacctConstructionUs() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[222.982px] left-[calc(50%-1.24px)] top-[calc(50%-5.45px)] w-[353.055px]" data-name="micro-ui-intacct-construction-US">
      <div className="absolute inset-[0_6.32%_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 330.757 222.982">
          <path d={svgPaths.pfb23e00} fill="var(--fill-0, white)" id="Rectangle 9754" stroke="var(--stroke-0, #E2E2E2)" strokeWidth="0.929093" />
        </svg>
      </div>
      <p className="absolute font-['Sage_UI:Bold',sans-serif] inset-[5.83%_60.14%_85.2%_4.74%] leading-[normal] not-italic text-[16.724px] text-black">CFO Dashboard</p>
      <Overlay />
      <Group9 />
      <Group8 />
    </div>
  );
}

function Base2() {
  return (
    <div className="absolute left-0 size-[189.535px] top-0" data-name="base">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 189.535 189.535">
        <g id="base">
          <path d={svgPaths.p23439100} fill="var(--fill-0, white)" id="Rectangle 4431" stroke="var(--stroke-0, #E2E2E2)" strokeWidth="0.750421" />
        </g>
      </svg>
    </div>
  );
}

function Logo() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex gap-[2.812px] items-center left-[12.01px] rounded-tl-[11.246px] rounded-tr-[11.246px] top-[calc(50%-75.19px)]" data-name="Logo">
      <div className="relative shrink-0 size-[11.246px]" data-name="Copilot Logo">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCopilotLogo} />
      </div>
      <p className="font-['Sage_UI:Bold',sans-serif] leading-[7.151px] not-italic relative shrink-0 text-[11.246px] text-[rgba(0,0,0,0.9)] text-justify w-[94.888px] whitespace-pre-wrap">Copilot</p>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-white content-stretch flex h-[16.869px] items-center left-[23.25px] pl-[5.623px] pr-[7.029px] rounded-[3.514px] top-[101.27px] w-[148.307px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.929px] border-black border-solid inset-[-0.929px] pointer-events-none rounded-[4.443px]" />
      <p className="font-['Sage_UI:Medium',sans-serif] leading-[7.732px] not-italic opacity-70 relative shrink-0 text-[8.435px] text-black text-justify">Show budget variance analysis YTD</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-white content-stretch flex h-[16.869px] items-center left-[23.25px] pl-[5.623px] pr-[7.029px] rounded-[3.514px] top-[124.47px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.929px] border-black border-solid inset-[-0.929px] pointer-events-none rounded-[4.443px]" />
      <p className="font-['Sage_UI:Medium',sans-serif] leading-[7.732px] not-italic opacity-70 relative shrink-0 text-[8.435px] text-black text-justify">Run close assistant</p>
    </div>
  );
}

function AiBorder() {
  return (
    <div className="absolute h-[195.109px] right-[-0.93px] rounded-[12.007px] top-[-5.57px] w-[193.251px]" data-name="AI Border">
      <Logo />
      <p className="absolute font-['Sage_UI:Medium',sans-serif] h-[7.732px] leading-[1.5] left-[23.25px] not-italic opacity-90 text-[10.543px] text-[rgba(0,0,0,0.9)] text-justify top-[51.54px] w-[153.227px] whitespace-pre-wrap">Welcome back !</p>
      <p className="absolute font-['Sage_UI:Regular',sans-serif] h-[23.898px] leading-[1.5] left-[23.25px] not-italic opacity-90 text-[8.435px] text-[rgba(0,0,0,0.9)] text-justify top-[70.51px] w-[134.952px] whitespace-pre-wrap">View insights or start a chat by using one of the following suggestions</p>
      <div className="absolute h-[27.015px] left-[1.5px] top-[38.27px] w-[202.614px]" />
      <Button />
      <Button1 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute contents inset-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.4345 8.4345">
        <g clipPath="url(#clip0_1_80521)" id="Isolation_Mode">
          <path d={svgPaths.p2870f480} fill="var(--fill-0, black)" fillOpacity="0.9" id="Vector" />
          <path d={svgPaths.p107f0d80} fill="var(--fill-0, #00D639)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_80521">
            <rect fill="white" height="8.4345" width="8.4345" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function PoweredByAiIcon() {
  return (
    <div className="absolute left-[5.97px] size-[8.435px] top-[3.16px]" data-name="Powered by AI icon">
      <Icon1 />
    </div>
  );
}

function MajorButton() {
  return (
    <div className="absolute border-[#00d639] border-[1.054px] border-solid h-[16.869px] left-[108.55px] rounded-[22.492px] top-[7.55px] w-[69.585px]" data-name="Major button">
      <PoweredByAiIcon />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Sage_UI:Bold',sans-serif] justify-center leading-[0] left-[calc(26.26%-0.5px)] not-italic right-[calc(26.31%-0.5px)] text-[8.435px] text-[rgba(0,0,0,0.9)] top-[calc(50%+0.17px)] whitespace-nowrap">
        <p className="leading-[1.5]">Insights</p>
      </div>
      <div className="absolute left-[53.07px] overflow-clip size-[8.435px] top-[3.16px]" data-name="2">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.4345 8.4345">
          <path d={svgPaths.p25c480f0} fill="var(--fill-0, #D64309)" id="Vector" />
        </svg>
        <div className="absolute inset-[32.95%_38.6%_31.63%_35.44%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.18972 2.98791">
            <path d={svgPaths.p198e0740} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Composition2Level1Shadow() {
  return (
    <div className="absolute h-[197.897px] left-[193.33px] top-[63.01px] w-[190.464px]" data-name="Composition2:Level 1 Shadow">
      <Base2 />
      <AiBorder />
      <MajorButton />
      <div className="absolute bg-[rgba(217,217,217,0)] border-[#dedede] border-[0.703px] border-solid h-[111.491px] left-[10.22px] rounded-[8.435px] top-[35.31px] w-[170.024px]" />
      <div className="absolute content-stretch flex h-[18.381px] items-center justify-center left-[10.15px] px-[12.254px] py-[4.595px] rounded-[16px] top-[157.02px] w-[56.675px]" data-name="Buttons">
        <div aria-hidden="true" className="absolute border-[0.766px] border-[rgba(0,0,0,0.65)] border-solid inset-0 pointer-events-none rounded-[16px]" />
        <div className="flex flex-col font-['Sage_Text:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[9.29px] text-[rgba(0,0,0,0.7)] text-center whitespace-nowrap">
          <p className="leading-[1.4]">New chat</p>
        </div>
      </div>
    </div>
  );
}

function MicroUiSmallAccountingGbAgnostic2({ className }: { className?: string }) {
  return (
    <div className={className || "h-[267px] overflow-clip relative shrink-0 w-[404px]"} data-name="micro-ui-SMALL-accounting-GB-agnostic">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[166px] items-center justify-center left-[calc(50%-1.5px)] top-[calc(50%+3.5px)] w-[305px]">
        <div className="flex-none rotate-180">
          <div className="blur-[0px] h-[166px] w-[305px]" data-name="base glow" style={{ backgroundImage: "linear-gradient(-66.3312deg, rgb(0, 214, 57) 11.31%, rgb(17, 175, 255) 60.829%, rgb(143, 73, 254) 122.73%)" }} />
        </div>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[237.216px] left-[calc(50%+1px)] top-[calc(50%+1.48px)] w-[360px]" data-name="Union">
        <div className="absolute inset-[-4.25%_-2.8%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 380.153 257.369">
            <g filter="url(#filter0_f_1_209281)" id="Union">
              <path d={svgPaths.p2230ff80} fill="url(#paint0_linear_1_209281)" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="257.369" id="filter0_f_1_209281" width="380.153" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_1_209281" stdDeviation="5.03818" />
              </filter>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_209281" x1="21.2832" x2="630.712" y1="25.4394" y2="303.001">
                <stop stopColor="#00D639" />
                <stop offset="0.4" stopColor="#11AFFF" />
                <stop offset="0.9" stopColor="#8F49FE" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <MicroUiIntacctConstructionUs />
      <Composition2Level1Shadow />
    </div>
  );
}

function Stylebox2() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Stylebox">
      <StyleboxMargin2 />
      <MicroUiSmallAccountingGbAgnostic2 />
    </div>
  );
}

function StyleboxPadding3() {
  return (
    <div className="bg-[#f2f5f6] relative rounded-[40px] shrink-0 w-full" data-name="Stylebox padding">
      <div className="content-stretch flex flex-col items-start p-[40px] relative w-full">
        <Stylebox2 />
      </div>
    </div>
  );
}

function ProductSignpostingCentered2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="product signposting centered">
      <StyleboxPadding3 />
    </div>
  );
}

function FlexItem2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Flex item 5">
      <ProductSignpostingCentered2 />
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex gap-[24px] items-start justify-center relative shrink-0 w-full" data-name="row">
      <FlexItem />
      <FlexItem1 />
      <FlexItem2 />
    </div>
  );
}

function Flexbox() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full" data-name="Flexbox">
      <Row />
    </div>
  );
}

function PageLayout2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Page layout">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[240px] relative w-full">
          <FlowLine />
          <Frame30 />
          <Flexbox />
        </div>
      </div>
    </div>
  );
}

export default function Stripe() {
  return (
    <div className="bg-black content-stretch flex flex-col items-center justify-center pt-[80px] relative size-full" data-name="Stripe">
      <PageLayout />
      <Modal />
      <PageLayout2 />
    </div>
  );
}