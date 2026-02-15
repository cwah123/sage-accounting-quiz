import svgPaths from "./svg-94tkbpdsxm";

function ButtonUiIcons() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Button UI icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Button UI icons">
          <path d={svgPaths.p11b50e60} fill="var(--fill-0, white)" fillOpacity="0.9" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex items-center p-[4px] relative rounded-[8px] size-full">
      <div aria-hidden="true" className="absolute border border-[#474747] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <ButtonUiIcons />
    </div>
  );
}