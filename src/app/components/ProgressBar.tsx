import { motion } from "motion/react";

interface ProgressBarProps {
  progress: number; // 0 to 100
}

export function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <div className="h-[5px] relative shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[14px] relative size-full">
          <div className="bg-muted content-stretch flex flex-[1_0_0] gap-[10px] items-center min-h-px min-w-px relative rounded-[60px] w-full">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="bg-accent h-full rounded-[60px] shrink-0"
            />
            <motion.div
              initial={{ left: "-3.5px" }}
              animate={{ left: `calc(${progress}% - 9.5px)` }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute size-[12px] top-[-3.5px]"
            >
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                <circle cx="6" cy="6" className="fill-accent" r="6" />
              </svg>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}