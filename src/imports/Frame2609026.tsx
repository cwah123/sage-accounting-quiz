import svgPaths from "./svg-caasvcnzwk";

function MNOMoneyBill() {
  return (
    <div className="overflow-clip relative shrink-0 size-[60px]" data-name="M N O/money-bill">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
        <g id="surface1">
          <path d={svgPaths.p3fb0f5b0} fill="var(--fill-0, white)" fillOpacity="0.9" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function CtaStates() {
  return (
    <div className="bg-black content-stretch flex flex-col gap-[24px] items-center justify-center pb-[24px] pt-[40px] px-[24px] relative rounded-[8px] shrink-0 size-[200px]" data-name="CTA states">
      <div aria-hidden="true" className="absolute border-2 border-[#e2e2e2] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <MNOMoneyBill />
      <p className="font-['Sage_Text:Regular',sans-serif] leading-[1.6] min-w-full not-italic relative shrink-0 text-[18px] text-center text-white w-[min-content] whitespace-pre-wrap">Under £2 millions</p>
    </div>
  );
}

function MNOMoneyStacked() {
  return (
    <div className="overflow-clip relative shrink-0 size-[60px]" data-name="M N O/money-stacked">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
        <g id="surface1">
          <path d={svgPaths.p21e96640} fill="var(--fill-0, white)" fillOpacity="0.9" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function CtaStates1() {
  return (
    <div className="bg-black content-stretch flex flex-col gap-[24px] items-center justify-center pb-[24px] pt-[40px] px-[24px] relative rounded-[8px] shrink-0 size-[200px]" data-name="CTA states">
      <div aria-hidden="true" className="absolute border-2 border-[#e2e2e2] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <MNOMoneyStacked />
      <p className="font-['Sage_Text:Regular',sans-serif] leading-[1.6] min-w-full not-italic relative shrink-0 text-[18px] text-center text-white w-[min-content] whitespace-pre-wrap">Over £2 millions</p>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex gap-[40px] items-center justify-center relative size-full">
      <CtaStates />
      <CtaStates1 />
    </div>
  );
}