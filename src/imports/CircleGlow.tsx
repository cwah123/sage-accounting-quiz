function Frame() {
  return (
    <div className="absolute blur-[90.065px] content-stretch flex h-[743.037px] items-center left-0 px-[60.674px] py-[39.57px] rounded-[399.889px] top-0 w-[749.342px] animate-slow-rotate" style={{ backgroundImage: "linear-gradient(163.329deg, rgba(0, 214, 57, 0.8) 6.9144%, rgba(17, 175, 255, 0.8) 43.708%, rgba(143, 73, 254, 0.8) 89.7%)" }}>
      <div className="flex h-[614.914px] items-center justify-center relative shrink-0 w-[609.741px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="blur-[39.034px] h-[609.741px] opacity-80 rounded-[328.151px] w-[614.914px]" style={{ backgroundImage: "linear-gradient(249.923deg, rgba(0, 214, 57, 0.8) 5.6125%, rgba(17, 175, 255, 0.8) 44.178%, rgba(143, 73, 254, 0.8) 92.384%)" }} />
        </div>
      </div>
    </div>
  );
}

export default function CircleGlow() {
  return (
    <div className="relative size-full" data-name="circle glow">
      <Frame />
    </div>
  );
}