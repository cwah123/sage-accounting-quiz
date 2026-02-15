import svgPaths from "./svg-mu6pmkralr";

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

export default function CtaStates() {
  return (
    <div className="bg-[#1b1b1b] content-stretch flex flex-col gap-[24px] items-center justify-center pb-[24px] pt-[40px] px-[24px] relative rounded-[8px] size-full" data-name="CTA states">
      <div aria-hidden="true" className="absolute border-3 border-[#00d639] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <PQRPerson />
      <p className="font-['Sage_Text:Regular',sans-serif] leading-[1.6] min-w-full not-italic relative shrink-0 text-[18px] text-center text-white w-[min-content] whitespace-pre-wrap">
        Sole Trader
        <br aria-hidden="true" />
        <br aria-hidden="true" />
      </p>
    </div>
  );
}