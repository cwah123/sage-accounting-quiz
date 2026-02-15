import svgPaths from "./svg-74b3q7xgoz";

function Frame4() {
  return <div className="content-stretch flex items-end justify-end mb-[-9px] shrink-0 w-full" />;
}

function Replay() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="replay">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="replay">
          <path d={svgPaths.p36c80c00} fill="var(--fill-0, white)" fillOpacity="0.9" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0">
      <Replay />
      <div className="flex flex-col font-['Sage_Text:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.9)] text-center whitespace-nowrap">
        <p className="leading-[1.4]">Take the quizz again</p>
      </div>
    </div>
  );
}

function Buttons() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center pt-[4px] relative shrink-0" data-name="Buttons">
      <Frame />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-2px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 162 2">
            <line id="Line 1" stroke="var(--stroke-0, white)" strokeOpacity="0.9" strokeWidth="2" x2="162" y1="1" y2="1" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full">
      <Buttons />
    </div>
  );
}

function StyleboxSpacer() {
  return <div className="content-stretch flex flex-col h-[16px] items-start shrink-0 w-[766px]" data-name="Stylebox spacer" />;
}

function StyleboxPadding() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="Stylebox padding">
      <Frame5 />
      <p className="font-['Sage_Headline:Black',sans-serif] leading-[1.4] min-w-full not-italic relative shrink-0 text-[32px] text-[rgba(255,255,255,0.9)] text-center w-[min-content] whitespace-pre-wrap">Based on your answers, this is your recommended accounting software</p>
      <StyleboxSpacer />
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

function Frame3() {
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

function Frame2() {
  return (
    <div className="mb-[-9px] relative rounded-[40px] shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[40px] relative w-full">
        <Frame3 />
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative rounded-[40px] shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start pb-[33px] px-[40px] relative w-full">
        <Frame4 />
        <Frame2 />
      </div>
    </div>
  );
}

export default function Modal() {
  return (
    <div className="bg-black content-stretch flex flex-col items-start overflow-clip pt-[48px] px-[240px] relative rounded-[37.375px] size-full" data-name="Modal">
      <Frame1 />
    </div>
  );
}