import svgPaths from "./svg-mdkf4zalja";

function PQRPerson() {
  return (
    <div className="overflow-clip relative shrink-0 size-[57px]" data-name="P Q R/person">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 57 57">
        <g id="surface1">
          <path d={svgPaths.p3a778000} fill="var(--fill-0, #00D639)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

export default function CtaStates() {
  return (
    <div className="bg-[#1b1b1b] content-stretch flex flex-col gap-[22.8px] items-center justify-center pb-[22.8px] pt-[38px] px-[22.8px] relative rounded-[7.6px] size-full" data-name="CTA states">
      <div aria-hidden="true" className="absolute border-[#00d639] border-[1.9px] border-solid inset-0 pointer-events-none rounded-[7.6px]" />
      <PQRPerson />
      <p className="font-['Sage_Text:Regular',sans-serif] leading-[1.6] min-w-full not-italic relative shrink-0 text-[#00d639] text-[17.1px] text-center w-[min-content] whitespace-pre-wrap">
        Sole Trader
        <br aria-hidden="true" />
        <br aria-hidden="true" />
      </p>
    </div>
  );
}