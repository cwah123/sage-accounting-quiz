import svgPaths from "../../imports/svg-levndduz9k";
import { motion } from "motion/react";
import { useState } from "react";

interface VATOptionProps {
  type: "yes" | "no";
  label: string;
  onClick: () => void;
  isSelected?: boolean;
}

function CheckIcon({ isSelected }: { isSelected?: boolean }) {
  return (
    <div className="overflow-clip relative shrink-0 size-[60px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
        <g>
          <path d={svgPaths.p29eeea00} fill="currentColor" className={isSelected ? "text-accent" : "text-primary-foreground"} />
        </g>
      </svg>
    </div>
  );
}

function CloseIcon({ isSelected }: { isSelected?: boolean }) {
  return (
    <div className="overflow-clip relative shrink-0 size-[60px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
        <g>
          <path d={svgPaths.p27d4ff00} fill="currentColor" className={isSelected ? "text-accent" : "text-primary-foreground"} />
        </g>
      </svg>
    </div>
  );
}

export function VATOption({ type, label, onClick, isSelected }: VATOptionProps) {
  const IconComponent = type === "yes" ? CheckIcon : CloseIcon;
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