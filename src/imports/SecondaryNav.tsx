import svgPaths from "./svg-6b73lqhi8n";

function Frame1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <p className="font-['Sage_Text:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[18px] text-[rgba(255,255,255,0.9)]">Accounting software</p>
    </div>
  );
}

function IconNavMore() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="icon-nav-more">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="icon-nav-more">
          <g id="x">
            <path d={svgPaths.p393f86f0} fill="var(--fill-0, white)" />
            <path d={svgPaths.p1017ab00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p3fcc100} fill="var(--fill-0, white)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[40px] h-[60px] items-center justify-end relative shrink-0">
      <p className="font-['Sage_Text:Bold',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.9)] text-center">Overview</p>
      <p className="font-['Sage_Text:Medium',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.9)] text-center">Accounts receivable</p>
      <p className="font-['Sage_Text:Medium',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.9)] text-center">Accounts payable</p>
      <p className="font-['Sage_Text:Medium',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.9)] text-center">Invoicing</p>
      <p className="font-['Sage_Text:Medium',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.9)] text-center">Inventory management</p>
      <IconNavMore />
    </div>
  );
}

export default function SecondaryNav() {
  return (
    <div className="bg-[#1b1b1b] content-stretch flex items-center justify-between px-[240px] relative size-full" data-name="Secondary nav">
      <Frame1 />
      <Frame />
    </div>
  );
}