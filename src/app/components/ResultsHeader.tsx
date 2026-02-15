import svgPaths from "../../imports/svg-74b3q7xgoz";

interface ResultsHeaderProps {
  onTakeQuizAgain: () => void;
}

export function ResultsHeader({ onTakeQuizAgain }: ResultsHeaderProps) {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex flex-col items-start overflow-clip relative rounded-[37.375px] w-full px-[240px] pt-[24px] pb-[0px]">
      <div className="relative rounded-[40px] shrink-0 w-full">
        <div className="content-stretch flex flex-col items-start pb-[33px] px-[40px] relative w-full">
          <div className="content-stretch flex items-end justify-end mb-[-9px] shrink-0 w-full" />
          <div className="mb-[-9px] relative rounded-[40px] shrink-0 w-full">
            <div className="content-stretch flex flex-col items-start px-[40px] relative w-full">
              <div className="relative shrink-0 w-full">
                <div className="flex flex-row items-center justify-center size-full">
                  <div className="content-stretch flex items-center justify-center px-[240px] relative w-full">
                    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center relative shrink-0">
                      <div className="content-stretch flex flex-col gap-[8px] items-center justify-center relative shrink-0 w-full">
                        <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full">
                          <button
                            onClick={onTakeQuizAgain}
                            className="content-stretch flex flex-col gap-[4px] items-center justify-center pt-[4px] relative shrink-0 hover:opacity-80 transition-opacity cursor-pointer"
                          >
                            <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0">
                              <div className="relative shrink-0 size-[24px]">
                                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                                  <g>
                                    <path d={svgPaths.p36c80c00} fill="white" fillOpacity="0.9" />
                                  </g>
                                </svg>
                              </div>
                              <div className="font-text flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-primary-foreground text-center whitespace-nowrap" style={{ fontSize: 'var(--text-xs)', fontWeight: 'var(--font-weight-medium)' }}>
                                <p className="leading-[1.4]">Take the quizz again</p>
                              </div>
                            </div>
                            <div className="h-0 relative shrink-0 w-full">
                              <div className="absolute inset-[-2px_0_0_0]">
                                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 162 2">
                                  <line stroke="white" strokeOpacity="0.9" strokeWidth="2" x2="162" y1="1" y2="1" />
                                </svg>
                              </div>
                            </div>
                          </button>
                        </div>
                        <h3 className="font-headline min-w-full relative shrink-0 text-primary-foreground text-center w-[min-content] whitespace-pre-wrap" style={{ fontWeight: 'var(--font-weight-black)' }}>
                          Based on your answers, this is your recommended accounting software
                        </h3>
                        <div className="content-stretch flex flex-col h-[16px] items-start shrink-0 w-[766px]" />
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
  );
}