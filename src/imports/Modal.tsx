import svgPaths from "./svg-levndduz9k";

function Frame4() {
  return <div className="content-stretch flex items-end justify-end mb-[-9px] shrink-0 w-full" />;
}

function ButtonUiIcons() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Button UI icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Button UI icons">
          <path d={svgPaths.p11b50e60} fill="var(--fill-0, white)" fillOpacity="0.9" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame10() {
  return (
    <div className="absolute content-stretch flex items-center left-0 p-[4px] rounded-[8px] top-0">
      <div aria-hidden="true" className="absolute border border-[#474747] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <ButtonUiIcons />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0 w-full">
      <p className="font-['Sage_Text:Medium',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[18px] text-[rgba(255,255,255,0.85)] text-center">Find the right Sage accounting software for your business</p>
      <Frame10 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame7 />
      <p className="font-['Sage_Headline:Black',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[32px] text-[rgba(255,255,255,0.95)] text-center w-full whitespace-pre-wrap">Do you pay VAT?</p>
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

function Frame8() {
  return <div className="bg-[#00d639] h-full rounded-[60px] shrink-0 w-[510px]" />;
}

function Frame5() {
  return (
    <div className="bg-[#303030] content-stretch flex flex-[1_0_0] gap-[10px] items-center min-h-px min-w-px relative rounded-[60px] w-full">
      <Frame8 />
      <div className="absolute left-[502px] size-[12px] top-[-3.5px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
          <circle cx="6" cy="6" fill="var(--fill-0, #00D639)" id="Ellipse 446" r="6" />
        </svg>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="h-[5px] relative shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[14px] relative size-full">
          <Frame5 />
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

function CCheck() {
  return (
    <div className="overflow-clip relative shrink-0 size-[60px]" data-name="C/check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
        <g id="surface1">
          <path d={svgPaths.p29eeea00} fill="var(--fill-0, white)" fillOpacity="0.9" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function CtaStates() {
  return (
    <div className="bg-black content-stretch flex flex-col gap-[24px] items-center justify-center pb-[24px] pt-[40px] px-[24px] relative rounded-[8px] shrink-0 size-[200px]" data-name="CTA states">
      <div aria-hidden="true" className="absolute border-2 border-[#e2e2e2] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <CCheck />
      <p className="font-['Sage_Text:Regular',sans-serif] leading-[1.6] min-w-full not-italic relative shrink-0 text-[18px] text-center text-white w-[min-content] whitespace-pre-wrap">Yes, I’m VAT registered</p>
    </div>
  );
}

function CClose() {
  return (
    <div className="overflow-clip relative shrink-0 size-[60px]" data-name="C/close">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
        <g id="surface1">
          <path d={svgPaths.p27d4ff00} fill="var(--fill-0, white)" fillOpacity="0.9" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function CtaStates1() {
  return (
    <div className="bg-black content-stretch flex flex-col gap-[24px] items-center justify-center pb-[24px] pt-[40px] px-[24px] relative rounded-[8px] shrink-0 size-[200px]" data-name="CTA states">
      <div aria-hidden="true" className="absolute border-2 border-[#e2e2e2] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <CClose />
      <p className="font-['Sage_Text:Regular',sans-serif] leading-[1.6] min-w-full not-italic relative shrink-0 text-[18px] text-center text-white w-[min-content] whitespace-pre-wrap">No, I’m not VAT registered</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[40px] items-center justify-center relative shrink-0 w-full">
      <CtaStates />
      <CtaStates1 />
    </div>
  );
}

function StyleboxPadding() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Stylebox padding">
      <Frame9 />
      <StyleboxSpacer />
      <Frame6 />
      <StyleboxSpacer1 />
      <Frame3 />
    </div>
  );
}

function PageLayout() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center relative shrink-0" data-name="Page layout">
      <StyleboxPadding />
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[240px] relative w-full">
          <PageLayout />
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="mb-[-9px] relative rounded-[40px] shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[40px] relative w-full">
        <Frame2 />
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="relative rounded-[40px] shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start pb-[49px] pt-[40px] px-[40px] relative w-full">
        <Frame4 />
        <Frame1 />
      </div>
    </div>
  );
}

export default function Modal() {
  return (
    <div className="bg-black content-stretch flex flex-col items-start overflow-clip px-[240px] py-[16px] relative rounded-[37.375px] size-full" data-name="Modal">
      <Frame />
    </div>
  );
}