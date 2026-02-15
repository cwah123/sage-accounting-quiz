export default function PageLayout({ className }: { className?: string }) {
  return (
    <div className={className || "content-stretch flex flex-col items-start px-[240px] relative w-[1920px]"} data-name="Page layout">
      <div className="relative shrink-0 w-full" data-name="Stylebox padding">
        <div className="content-stretch flex flex-col items-start px-[80px] relative w-full">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Stylebox margin">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Hero  pseudo wrapper">
              <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full" data-name="Hero">
                <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
                  <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
                    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
                      <p className="font-['Sage_Headline:Black',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[50px] text-[rgba(255,255,255,0.9)] text-center w-full whitespace-pre-wrap">Easy-to-use online accounting software</p>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Paragraph">
                        <p className="font-['Sage_Text:Regular',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[22px] text-[rgba(255,255,255,0.9)] text-center w-full whitespace-pre-wrap">Whether you are a sole trader, small business or a medium-sized business, we have your accounting needs covered. Our cloud accounting software is easy to use, secure, and customisable to your needs.</p>
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