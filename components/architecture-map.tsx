import { infraNodes } from "@/data/portfolio";

export function ArchitectureMap() {
  return (
    <div className="relative min-h-[360px] overflow-hidden rounded-lg border border-line bg-[#0c1118]">
      <svg className="absolute inset-0 h-full w-full" aria-hidden="true">
        <defs>
          <linearGradient id="line" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#61d9cc" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#f0b65a" stopOpacity="0.18" />
          </linearGradient>
        </defs>
        <path d="M60 160 C170 70 260 180 380 130 S590 90 710 180 S850 260 990 180" fill="none" stroke="url(#line)" strokeWidth="2" />
        <path d="M90 280 C240 210 330 320 470 260 S700 240 860 320" fill="none" stroke="url(#line)" strokeWidth="2" />
        <path d="M270 90 L390 175 L580 100 L730 215 L870 95" fill="none" stroke="rgba(255,255,255,0.12)" strokeDasharray="6 8" strokeWidth="1.5" />
      </svg>
      {infraNodes.map((node) => (
        <div
          key={node.label}
          className="absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-md border border-line bg-ink/86 px-3 py-2 shadow-glow backdrop-blur"
          style={{ left: node.x, top: node.y }}
        >
          <node.icon className="size-4 text-aqua" aria-hidden="true" />
          <span className="whitespace-nowrap font-mono text-xs text-cloud">{node.label}</span>
        </div>
      ))}
      <div className="absolute bottom-4 left-4 right-4 rounded-md border border-line bg-white/[0.04] p-3 font-mono text-xs text-mist">
        deploy --strategy rolling --observe metrics --rollback-on-error
      </div>
    </div>
  );
}
