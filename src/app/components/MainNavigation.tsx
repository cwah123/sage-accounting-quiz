import { useState } from "react";
import svgPaths from "../../imports/svg-zsbf3yzox7";

function Logo() {
  return (
    <div className="h-[32px] w-[57px] shrink-0" data-name="logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 57 32">
        <g id="logo">
          <path d={svgPaths.p6c8ffa0} fill="var(--fill-0, #00D639)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Search() {
  return (
    <div className="size-[24px]" data-name="search">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="search">
          <path d={svgPaths.p35a14c80} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

export default function MainNavigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="bg-black relative size-full" data-name="Main navigation">
      <div className="bg-black h-[60px] w-full px-[20px] md:px-[40px] lg:px-[80px]">
        <div className="flex items-center justify-between h-full max-w-[1440px] mx-auto">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-[40px]">
            <p className="text-[16px] text-[rgba(255,255,255,0.9)] hover:text-white cursor-pointer transition-colors">Product</p>
            <p className="text-[16px] text-[rgba(255,255,255,0.9)] hover:text-white cursor-pointer transition-colors">Solutions</p>
            <p className="text-[16px] text-[rgba(255,255,255,0.9)] hover:text-white cursor-pointer transition-colors">Accountants</p>
            <p className="text-[16px] text-[rgba(255,255,255,0.9)] hover:text-white cursor-pointer transition-colors">Partners</p>
            <p className="text-[16px] text-[rgba(255,255,255,0.9)] hover:text-white cursor-pointer transition-colors">Shop</p>
            <p className="text-[16px] text-[rgba(255,255,255,0.9)] hover:text-white cursor-pointer transition-colors">Blog</p>
            <p className="text-[16px] text-[rgba(255,255,255,0.9)] hover:text-white cursor-pointer transition-colors">Support</p>
          </nav>

          {/* Right side - Desktop */}
          <div className="hidden lg:flex items-center gap-[40px]">
            <button className="size-[24px] hover:opacity-80 transition-opacity">
              <Search />
            </button>
            <button className="border-2 border-[rgba(255,255,255,0.9)] rounded-[16px] px-[16px] py-[6px] hover:bg-white/10 transition-colors">
              <p className="text-[14px] text-[rgba(255,255,255,0.9)] whitespace-nowrap">Login</p>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
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
          <div className="lg:hidden absolute top-[60px] left-0 right-0 bg-black border-t border-white/10 z-50">
            <nav className="flex flex-col px-[20px] py-[20px]">
              <a href="#" className="text-[16px] text-[rgba(255,255,255,0.9)] hover:text-white py-[12px] border-b border-white/10">Product</a>
              <a href="#" className="text-[16px] text-[rgba(255,255,255,0.9)] hover:text-white py-[12px] border-b border-white/10">Solutions</a>
              <a href="#" className="text-[16px] text-[rgba(255,255,255,0.9)] hover:text-white py-[12px] border-b border-white/10">Accountants</a>
              <a href="#" className="text-[16px] text-[rgba(255,255,255,0.9)] hover:text-white py-[12px] border-b border-white/10">Partners</a>
              <a href="#" className="text-[16px] text-[rgba(255,255,255,0.9)] hover:text-white py-[12px] border-b border-white/10">Shop</a>
              <a href="#" className="text-[16px] text-[rgba(255,255,255,0.9)] hover:text-white py-[12px] border-b border-white/10">Blog</a>
              <a href="#" className="text-[16px] text-[rgba(255,255,255,0.9)] hover:text-white py-[12px] border-b border-white/10">Support</a>
              <div className="flex items-center gap-[20px] pt-[20px]">
                <button className="size-[24px] hover:opacity-80 transition-opacity">
                  <Search />
                </button>
                <button className="border-2 border-[rgba(255,255,255,0.9)] rounded-[16px] px-[16px] py-[6px] hover:bg-white/10 transition-colors">
                  <p className="text-[14px] text-[rgba(255,255,255,0.9)] whitespace-nowrap">Login</p>
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
}
