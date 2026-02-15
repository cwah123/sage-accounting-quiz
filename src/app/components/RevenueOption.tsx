import { motion } from "motion/react";
import svgPaths from "../../imports/svg-caasvcnzwk";
import { useState } from "react";

interface RevenueOptionProps {
  type: "under" | "over";
  label: string;
  onClick: () => void;
  isSelected?: boolean;
}

function MoneyBillIcon({ isSelected }: { isSelected?: boolean }) {
  return (
    <div className="overflow-clip relative shrink-0 size-[60px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
        <g>
          <path d={svgPaths.p3fb0f5b0} fill="currentColor" className={isSelected ? "text-accent" : "text-primary-foreground"} fillOpacity="0.9" />
        </g>
      </svg>
    </div>
  );
}

function MoneyStackedIcon({ isSelected }: { isSelected?: boolean }) {
  return (
    <div className="overflow-clip relative shrink-0 size-[60px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
        <g>
          <path d={svgPaths.p21e96640} fill="currentColor" className={isSelected ? "text-accent" : "text-primary-foreground"} fillOpacity="0.9" />
        </g>
      </svg>
    </div>
  );
}

export function RevenueOption({ type, label, onClick, isSelected }: RevenueOptionProps) {
  const IconComponent = type === "under" ? MoneyBillIcon : MoneyStackedIcon;
  const [nudgeKey, setNudgeKey] = useState(0);

  const handleClick = () => {
    setNudgeKey(prev => prev + 1);
    // No delay here - let parent handle all timing
    onClick();
  };

  return (
    <motion.button
      key={`nudge-${nudgeKey}`}
      whileHover={{ scale: 1.05 }}
      animate={{ scale: [1, 0.92, 1] }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      onClick={handleClick}
      className={`group content-stretch flex flex-col gap-[24px] items-center justify-center pb-[24px] pt-[40px] px-[24px] relative rounded-lg shrink-0 size-[200px] transition-all duration-300 ${
        isSelected ? "bg-[#1B1B1B]" : "bg-primary hover:bg-[#1B1B1B]"
      }`}
    >
      <div
        aria-hidden="true"
        className={`absolute border-2 border-solid inset-0 pointer-events-none rounded-lg transition-all duration-300 ${
          isSelected ? "border-accent" : "border-border group-hover:border-accent group-hover:border-[3px]"
        }`}
      />
      <IconComponent isSelected={isSelected} />
      <p className={`text-lg text-center w-[min-content] min-w-full whitespace-pre-wrap transition-colors duration-300 ${
        isSelected ? "text-accent" : "text-primary-foreground"
      }`}>
        {label}
      </p>
    </motion.button>
  );
}