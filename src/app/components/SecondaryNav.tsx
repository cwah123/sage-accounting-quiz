import { useState } from "react";
import svgPaths from "../../imports/svg-6b73lqhi8n";

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

export default function SecondaryNav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="bg-[#1b1b1b] w-full relative" data-name="Secondary nav">
      <div className="flex items-center justify-between h-[60px] px-[20px] md:px-[40px] lg:px-[80px] max-w-full mx-auto">
        {/* Title */}
        <div className="flex gap-[8px] items-center shrink-0">
          <p className="font-text text-[rgba(255,255,255,0.9)]" style={{ fontSize: 'var(--text-lg)' }}>Accounting software</p>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-[40px] items-center">
          <p className="text-[16px] text-[rgba(255,255,255,0.9)] hover:text-white cursor-pointer transition-colors whitespace-nowrap">Overview</p>
          <p className="text-[16px] text-[rgba(255,255,255,0.9)] hover:text-white cursor-pointer transition-colors whitespace-nowrap">Accounts receivable</p>
          <p className="text-[16px] text-[rgba(255,255,255,0.9)] hover:text-white cursor-pointer transition-colors whitespace-nowrap">Accounts payable</p>
          <p className="text-[16px] text-[rgba(255,255,255,0.9)] hover:text-white cursor-pointer transition-colors whitespace-nowrap">Invoicing</p>
          
          <button className="hover:opacity-80 transition-opacity">
            <IconNavMore />
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle secondary menu"
        >
          <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-[60px] left-0 right-0 bg-[#1b1b1b] border-t border-white/10 z-50">
          <nav className="flex flex-col px-[20px] py-[20px]">
            <a href="#" className="text-[16px] text-[rgba(255,255,255,0.9)] hover:text-white py-[12px] border-b border-white/10">Overview</a>
            <a href="#" className="text-[16px] text-[rgba(255,255,255,0.9)] hover:text-white py-[12px] border-b border-white/10">Accounts receivable</a>
            <a href="#" className="text-[16px] text-[rgba(255,255,255,0.9)] hover:text-white py-[12px] border-b border-white/10">Accounts payable</a>
            <a href="#" className="text-[16px] text-[rgba(255,255,255,0.9)] hover:text-white py-[12px] border-b border-white/10">Invoicing</a>
            <a href="#" className="text-[16px] text-[rgba(255,255,255,0.9)] hover:text-white py-[12px]">Inventory management</a>
          </nav>
        </div>
      )}
    </div>
  );
}