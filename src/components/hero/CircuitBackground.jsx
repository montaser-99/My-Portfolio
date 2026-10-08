/**
 * Signature hero visual: a low-opacity blend of PCB/circuit traces and
 * neural-network nodes. Pure SVG + CSS animation — no stock imagery.
 * Kept subtle so it never competes with the headline or reduces readability.
 */
function CircuitBackground() {
  return (
    <div
      className="circuit-background pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Faint technical grid */}
      <div className="tech-grid absolute inset-0 opacity-70" />

      {/* Drifting restrained glows */}
      <div className="animate-drift-1 absolute -top-40 -left-24 h-[460px] w-[460px] rounded-full bg-[#22d3ee]/12 blur-3xl" />
      <div className="animate-drift-2 absolute -bottom-40 -right-24 h-[500px] w-[500px] rounded-full bg-[#38bdf8]/10 blur-3xl" />

      {/* Circuit + neural traces */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1200 700"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g stroke="#22d3ee" strokeOpacity="0.22" strokeWidth="1.25">
          <path className="animate-trace" d="M60 560 L60 430 L210 430 L210 300 L360 300" />
          <path
            className="animate-trace"
            style={{ animationDelay: "-3s" }}
            d="M1140 140 L1140 260 L980 260 L980 400 L820 400"
          />
          <path
            className="animate-trace"
            style={{ animationDelay: "-6s" }}
            d="M120 120 L300 120 L300 220 L470 220"
          />
          <path d="M600 40 L600 180 L760 180" strokeOpacity="0.14" />
          <path d="M40 340 L180 340 L180 620 L340 620" strokeOpacity="0.12" />
          <path d="M1018 430 L1018 476 L1080 476 M1002 445 L1034 445 M1002 458 L1034 458 M1002 471 L1034 471" strokeOpacity="0.18" />
        </g>

        <g className="circuit-network" stroke="#a9dbe5" strokeOpacity="0.18" strokeWidth="1" fill="none">
          <rect x="1034" y="430" width="56" height="56" rx="5" />
          <path d="M1046 420v10 M1058 420v10 M1070 420v10 M1082 420v10 M1046 486v10 M1058 486v10 M1070 486v10 M1082 486v10 M1024 442h10 M1024 456h10 M1024 470h10 M1090 442h10 M1090 456h10 M1090 470h10" />
        </g>

        {/* Right-angle PCB pads */}
        <g fill="#38bdf8" fillOpacity="0.18">
          <rect x="356" y="296" width="8" height="8" rx="1.5" />
          <rect x="816" y="396" width="8" height="8" rx="1.5" />
          <rect x="466" y="216" width="8" height="8" rx="1.5" />
          <rect x="756" y="176" width="8" height="8" rx="1.5" />
        </g>

        {/* Neural connection web */}
        <g className="circuit-network" stroke="#a78bfa" strokeOpacity="0.16" strokeWidth="1">
          <path d="M880 120 L980 200 L900 300 L1010 360" />
          <path d="M980 200 L1080 170" />
          <path d="M900 300 L820 250" />
        </g>

        {/* Pulsing nodes */}
        <g fill="#22d3ee">
          <circle className="animate-node" cx="360" cy="300" r="3" />
          <circle className="animate-node" style={{ animationDelay: "-1s" }} cx="820" cy="400" r="3" />
          <circle className="animate-node" style={{ animationDelay: "-2s" }} cx="980" cy="200" r="3" fill="#a78bfa" />
          <circle className="animate-node" style={{ animationDelay: "-1.5s" }} cx="900" cy="300" r="3" fill="#a78bfa" />
          <circle className="animate-node" style={{ animationDelay: "-0.5s" }} cx="470" cy="220" r="3" />
        </g>
      </svg>
    </div>
  );
}

export default CircuitBackground;
