import { motion } from "motion/react";
import svgPaths from "../../imports/svg-ygakoriasz";
import { useState } from "react";

interface EmployeeOptionProps {
  type: "0-19" | "20+";
  label: string;
  onClick: () => void;
  isSelected?: boolean;
}

function SmallBusinessIcon({ isSelected }: { isSelected?: boolean }) {
  return (
    <div className="overflow-visible relative shrink-0 size-[60px]">
      <svg className="block size-full" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
        <path d={svgPaths.p15ad6580} fill="currentColor" className={isSelected ? "text-accent" : "text-primary-foreground"} />
      </svg>
    </div>
  );
}

function LargeBusinessIcon({ isSelected }: { isSelected?: boolean }) {
  return (
    <div className="overflow-visible relative shrink-0 size-[60px]">
      <svg className="block size-full" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
        <path d={svgPaths.p15ad6580} fill="currentColor" className={isSelected ? "text-accent" : "text-primary-foreground"} />
      </svg>
    </div>
  );
}

export function EmployeeOption({ type, label, onClick, isSelected }: EmployeeOptionProps) {
  const IconComponent = type === "0-19" ? SmallBusinessIcon : LargeBusinessIcon;
  const [nudgeKey, setNudgeKey] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    setNudgeKey(prev => prev + 1);
    setIsAnimating(true);
    // Reset animating state after animation completes
    setTimeout(() => setIsAnimating(false), 300);
    // No delay here - let parent handle all timing
    onClick();
  };

  return (
    <motion.button
      key={`nudge-${nudgeKey}`}
      whileHover={!isAnimating ? { scale: 1.05 } : undefined}
      animate={{ scale: [1, 0.92, 1] }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      onClick={handleClick}
      className={`group content-stretch flex flex-col gap-[24px] items-center justify-center pb-[24px] pt-[40px] px-[24px] relative rounded-lg shrink-0 size-[200px] transition-all duration-150 delay-0 ${
        isSelected ? "bg-[var(--primary-hover)]" : "bg-primary hover:bg-[var(--primary-hover)]"
      }`}
    >
      <div
        aria-hidden="true"
        className={`absolute border-2 border-solid inset-0 pointer-events-none rounded-lg transition-all duration-150 delay-0 ${
          isSelected ? "border-accent" : "border-border group-hover:border-accent group-hover:border-[3px]"
        }`}
      />
      <IconComponent isSelected={isSelected} />
      <p className={`text-lg text-center w-[min-content] min-w-full whitespace-pre-wrap transition-colors duration-150 delay-0 ${
        isSelected ? "text-accent" : "text-primary-foreground"
      }`}>
        {label}
      </p>
    </motion.button>
  );
}