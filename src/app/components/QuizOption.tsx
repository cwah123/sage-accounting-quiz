import svgPaths from "../../imports/svg-ygakoriasz";
import { motion } from "motion/react";
import { useState } from "react";

interface QuizOptionProps {
  icon: "person" | "bag" | "home";
  label: string;
  onClick: () => void;
  isSelected?: boolean;
}

function PersonIcon({ isSelected }: { isSelected?: boolean }) {
  return (
    <div className="overflow-visible relative shrink-0 size-[60px]">
      <svg className="block size-full" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
        <path d={svgPaths.p3e2fd800} fill="currentColor" className={isSelected ? "text-accent" : "text-primary-foreground"} />
      </svg>
    </div>
  );
}

function BagIcon({ isSelected }: { isSelected?: boolean }) {
  return (
    <div className="overflow-visible relative shrink-0 size-[60px]">
      <svg className="block size-full" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
        <path d={svgPaths.p351fd780} fill="currentColor" className={isSelected ? "text-accent" : "text-primary-foreground"} />
      </svg>
    </div>
  );
}

function HomeIcon({ isSelected }: { isSelected?: boolean }) {
  return (
    <div className="overflow-visible relative shrink-0 size-[60px]">
      <svg className="block size-full" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
        <path d={svgPaths.p4497e00} fill="currentColor" className={isSelected ? "text-accent" : "text-primary-foreground"} />
      </svg>
    </div>
  );
}

const iconMap = {
  person: PersonIcon,
  bag: BagIcon,
  home: HomeIcon,
};

export function QuizOption({ icon, label, onClick, isSelected }: QuizOptionProps) {
  const IconComponent = iconMap[icon];
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
        isSelected ? "bg-[var(--primary-hover)]" : "bg-primary hover:bg-[var(--primary-hover)]"
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