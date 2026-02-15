import svgPaths from "./svg-zsbf3yzox7";

function Logo() {
  return (
    <div className="-translate-y-1/2 absolute h-[32px] left-0 top-1/2 w-[57px]" data-name="logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 57 32">
        <g id="logo">
          <path d={svgPaths.p6c8ffa0} fill="var(--fill-0, #00D639)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function NavItems() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex font-['Sage_Text:Medium',sans-serif] gap-[40px] items-center justify-center leading-[1.6] left-[calc(50%-55.5px)] not-italic text-[16px] text-[rgba(255,255,255,0.9)] top-1/2" data-name="nav items">
      <p className="relative shrink-0">Product</p>
      <p className="relative shrink-0">Solutions</p>
      <p className="relative shrink-0">Accountants</p>
      <p className="relative shrink-0">Partners</p>
      <p className="relative shrink-0">Shop</p>
      <p className="relative shrink-0">Blog</p>
      <p className="relative shrink-0">Support</p>
    </div>
  );
}

function Search() {
  return (
    <div className="absolute left-[4px] size-[24px] top-[18px]" data-name="search">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="search">
          <path d={svgPaths.p35a14c80} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SearchButton() {
  return (
    <div className="h-[60px] relative shrink-0 w-[32px]" data-name="search button">
      <Search />
    </div>
  );
}

function Buttons() {
  return (
    <div className="content-stretch flex items-center justify-center px-[16px] py-[6px] relative rounded-[16px] shrink-0 w-[96px]" data-name="Buttons">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(255,255,255,0.9)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-col font-['Sage_Text:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.9)] text-center whitespace-nowrap">
        <p className="leading-[1.4]">Login</p>
      </div>
    </div>
  );
}

function Right() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex gap-[40px] h-[60px] items-center justify-end right-0 top-1/2" data-name="right">
      <SearchButton />
      <Buttons />
    </div>
  );
}

function Frame() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-black h-[60px] left-1/2 overflow-clip top-1/2 w-[1440px]">
      <Logo />
      <NavItems />
      <Right />
    </div>
  );
}

export default function MainNavigation() {
  return (
    <div className="bg-black relative size-full" data-name="Main navigation">
      <Frame />
    </div>
  );
}