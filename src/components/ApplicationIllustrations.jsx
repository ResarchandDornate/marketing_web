/**
 * Custom SVG illustrations for BESS Applications section.
 * Each illustration represents the application context, not the product itself.
 */

export function BatteryAssemblyIllustration({ className = '' }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Factory floor */}
      <rect x="10" y="120" width="180" height="8" rx="2" fill="#e8ecf0" />

      {/* Conveyor belt */}
      <rect x="20" y="110" width="160" height="10" rx="3" fill="#d1d5db" />
      <circle cx="30" cy="120" r="5" fill="#9ca3af" />
      <circle cx="170" cy="120" r="5" fill="#9ca3af" />
      <line x1="30" y1="115" x2="170" y2="115" stroke="#9ca3af" strokeWidth="1" />

      {/* Battery cells on conveyor */}
      <rect x="40" y="92" width="14" height="18" rx="2" fill="#006297" opacity="0.8" />
      <rect x="42" y="94" width="10" height="3" rx="1" fill="#60a5fa" />
      <rect x="60" y="92" width="14" height="18" rx="2" fill="#006297" opacity="0.9" />
      <rect x="62" y="94" width="10" height="3" rx="1" fill="#60a5fa" />
      <rect x="80" y="92" width="14" height="18" rx="2" fill="#006297" />
      <rect x="82" y="94" width="10" height="3" rx="1" fill="#60a5fa" />

      {/* Assembled pack */}
      <rect x="110" y="82" width="40" height="28" rx="4" fill="#093c71" />
      <rect x="114" y="86" width="8" height="20" rx="1.5" fill="#006297" />
      <rect x="124" y="86" width="8" height="20" rx="1.5" fill="#006297" />
      <rect x="134" y="86" width="8" height="20" rx="1.5" fill="#006297" />
      <circle cx="130" cy="84" r="2" fill="#00d2ff" />

      {/* Robot arm */}
      <rect x="95" y="30" width="6" height="50" rx="2" fill="#6b7280" />
      <rect x="85" y="28" width="26" height="8" rx="3" fill="#4b5563" />
      <rect x="80" y="60" width="16" height="6" rx="2" fill="#6b7280" transform="rotate(-30 80 60)" />
      <circle cx="98" cy="32" r="4" fill="#9ca3af" />

      {/* Sparks / activity indicators */}
      <circle cx="78" cy="88" r="2" fill="#00d2ff" opacity="0.6">
        <animate attributeName="opacity" values="0.3;1;0.3" dur="1.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="105" cy="78" r="1.5" fill="#ff6b35" opacity="0.7">
        <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" />
      </circle>

      {/* Overhead structure */}
      <rect x="15" y="20" width="4" height="100" rx="1" fill="#d1d5db" />
      <rect x="181" y="20" width="4" height="100" rx="1" fill="#d1d5db" />
      <rect x="15" y="18" width="170" height="5" rx="1.5" fill="#9ca3af" />

      {/* Status display */}
      <rect x="155" y="40" width="28" height="18" rx="3" fill="#1f2937" />
      <rect x="158" y="43" width="22" height="5" rx="1" fill="#00d2ff" opacity="0.8" />
      <rect x="158" y="50" width="15" height="3" rx="1" fill="#10b981" opacity="0.7" />
    </svg>
  );
}

export function IndustrialOutdoorIllustration({ className = '' }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Sky gradient */}
      <rect x="0" y="0" width="200" height="100" fill="#f0f9ff" />

      {/* Sun */}
      <circle cx="160" cy="30" r="14" fill="#fbbf24" opacity="0.3" />
      <circle cx="160" cy="30" r="8" fill="#fbbf24" opacity="0.6" />

      {/* Mountains/terrain */}
      <polygon points="0,100 40,60 80,85 120,55 160,75 200,65 200,100" fill="#e2e8f0" />

      {/* Ground */}
      <rect x="0" y="100" width="200" height="60" fill="#d6d3d1" />
      <rect x="0" y="100" width="200" height="4" fill="#a8a29e" />

      {/* Industrial cabinet - main body */}
      <rect x="55" y="50" width="90" height="55" rx="4" fill="#374151" />
      <rect x="58" y="53" width="84" height="49" rx="2" fill="#4b5563" />

      {/* Cabinet doors */}
      <rect x="60" y="55" width="38" height="45" rx="1" fill="#6b7280" stroke="#9ca3af" strokeWidth="0.5" />
      <rect x="102" y="55" width="38" height="45" rx="1" fill="#6b7280" stroke="#9ca3af" strokeWidth="0.5" />

      {/* Door handles */}
      <rect x="92" y="70" width="2" height="15" rx="1" fill="#d1d5db" />
      <rect x="106" y="70" width="2" height="15" rx="1" fill="#d1d5db" />

      {/* Ventilation grills */}
      <line x1="65" y1="60" x2="93" y2="60" stroke="#9ca3af" strokeWidth="0.5" />
      <line x1="65" y1="63" x2="93" y2="63" stroke="#9ca3af" strokeWidth="0.5" />
      <line x1="65" y1="66" x2="93" y2="66" stroke="#9ca3af" strokeWidth="0.5" />
      <line x1="107" y1="60" x2="135" y2="60" stroke="#9ca3af" strokeWidth="0.5" />
      <line x1="107" y1="63" x2="135" y2="63" stroke="#9ca3af" strokeWidth="0.5" />
      <line x1="107" y1="66" x2="135" y2="66" stroke="#9ca3af" strokeWidth="0.5" />

      {/* Status LED */}
      <circle cx="100" cy="52" r="2" fill="#10b981">
        <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
      </circle>

      {/* Foundation/base */}
      <rect x="50" y="105" width="100" height="8" rx="2" fill="#57534e" />

      {/* Weather elements - rain lines */}
      <line x1="25" y1="25" x2="22" y2="40" stroke="#93c5fd" strokeWidth="1" opacity="0.4" />
      <line x1="35" y1="15" x2="32" y2="30" stroke="#93c5fd" strokeWidth="1" opacity="0.3" />
      <line x1="170" y1="40" x2="167" y2="55" stroke="#93c5fd" strokeWidth="1" opacity="0.3" />

      {/* Wind indicator */}
      <path d="M10 45 Q20 42 30 45 Q40 48 50 45" stroke="#93c5fd" strokeWidth="1" fill="none" opacity="0.4" />

      {/* Temperature gauge on cabinet */}
      <rect x="62" y="85" width="14" height="10" rx="2" fill="#1f2937" />
      <text x="65" y="93" fill="#10b981" fontSize="7" fontWeight="bold">32°</text>

      {/* Cable conduit */}
      <path d="M145 80 L160 80 L160 105" stroke="#4b5563" strokeWidth="3" fill="none" />

      {/* Warning sign */}
      <polygon points="100,42 96,48 104,48" fill="#fbbf24" />
      <text x="98.5" y="47.5" fill="#1f2937" fontSize="5" fontWeight="bold">!</text>
    </svg>
  );
}

export function CommercialGridIllustration({ className = '' }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Sky */}
      <rect x="0" y="0" width="200" height="110" fill="#f8fafc" />

      {/* Commercial building */}
      <rect x="20" y="30" width="70" height="80" rx="2" fill="#e2e8f0" />
      <rect x="20" y="30" width="70" height="6" fill="#cbd5e1" />

      {/* Windows grid */}
      {[0, 1, 2, 3].map(row => [0, 1, 2, 3].map(col => (
        <rect key={`${row}-${col}`} x={28 + col * 16} y={42 + row * 16} width="10" height="10" rx="1" fill="#bfdbfe" stroke="#93c5fd" strokeWidth="0.5" />
      )))}

      {/* Building entrance */}
      <rect x="45" y="95" width="20" height="15" rx="1" fill="#93c5fd" />

      {/* Power grid tower */}
      <line x1="160" y1="20" x2="160" y2="110" stroke="#6b7280" strokeWidth="3" />
      <line x1="145" y1="35" x2="175" y2="35" stroke="#6b7280" strokeWidth="2" />
      <line x1="148" y1="55" x2="172" y2="55" stroke="#6b7280" strokeWidth="2" />
      <line x1="151" y1="75" x2="169" y2="75" stroke="#6b7280" strokeWidth="2" />

      {/* Power lines */}
      <path d="M90 45 Q120 40 145 35" stroke="#f59e0b" strokeWidth="1.5" fill="none" strokeDasharray="4 2" />
      <path d="M90 55 Q120 52 148 55" stroke="#f59e0b" strokeWidth="1.5" fill="none" strokeDasharray="4 2" />

      {/* Energy flow particles on power lines */}
      <circle r="2" fill="#f59e0b">
        <animateMotion dur="3s" repeatCount="indefinite" path="M90,45 Q120,40 145,35" />
      </circle>
      <circle r="2" fill="#f59e0b">
        <animateMotion dur="3s" repeatCount="indefinite" path="M148,55 Q120,52 90,55" begin="1.5s" />
      </circle>

      {/* BESS unit next to building */}
      <rect x="95" y="85" width="35" height="25" rx="3" fill="#093c71" />
      <rect x="98" y="88" width="7" height="19" rx="1" fill="#006297" />
      <rect x="107" y="88" width="7" height="19" rx="1" fill="#006297" />
      <rect x="116" y="88" width="7" height="19" rx="1" fill="#006297" />

      {/* BESS status light */}
      <circle cx="112" cy="86" r="1.5" fill="#10b981">
        <animate attributeName="opacity" values="0.5;1;0.5" dur="1.8s" repeatCount="indefinite" />
      </circle>

      {/* Connection from BESS to building */}
      <path d="M95 95 L90 95" stroke="#10b981" strokeWidth="2" />
      {/* Connection from BESS to grid */}
      <path d="M130 95 L160 95 L160 75" stroke="#006297" strokeWidth="2" />

      {/* Ground */}
      <rect x="0" y="110" width="200" height="50" fill="#f1f5f9" />

      {/* Meter/dashboard */}
      <rect x="100" y="115" width="24" height="14" rx="2" fill="#1f2937" />
      <rect x="103" y="117" width="12" height="4" rx="1" fill="#10b981" opacity="0.8" />
      <rect x="103" y="123" width="8" height="3" rx="1" fill="#60a5fa" opacity="0.6" />

      {/* Dollar sign - cost savings */}
      <circle cx="30" cy="125" r="8" fill="#dcfce7" stroke="#86efac" strokeWidth="1" />
      <text x="27" y="129" fill="#16a34a" fontSize="10" fontWeight="bold">$</text>
    </svg>
  );
}

export function ResidentialHomeIllustration({ className = '' }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Sky */}
      <rect x="0" y="0" width="200" height="110" fill="#fefce8" opacity="0.3" />

      {/* Sun with rays */}
      <circle cx="160" cy="28" r="12" fill="#fbbf24" opacity="0.25" />
      <circle cx="160" cy="28" r="7" fill="#fbbf24" opacity="0.5" />
      <line x1="160" y1="12" x2="160" y2="8" stroke="#fbbf24" strokeWidth="1.5" opacity="0.4" />
      <line x1="172" y1="16" x2="175" y2="13" stroke="#fbbf24" strokeWidth="1.5" opacity="0.4" />
      <line x1="176" y1="28" x2="180" y2="28" stroke="#fbbf24" strokeWidth="1.5" opacity="0.4" />
      <line x1="172" y1="40" x2="175" y2="43" stroke="#fbbf24" strokeWidth="1.5" opacity="0.4" />
      <line x1="148" y1="16" x2="145" y2="13" stroke="#fbbf24" strokeWidth="1.5" opacity="0.4" />

      {/* House body */}
      <rect x="35" y="65" width="80" height="45" rx="2" fill="#e2e8f0" />

      {/* Roof */}
      <polygon points="30,65 75,30 120,65" fill="#94a3b8" />
      <polygon points="33,65 75,33 117,65" fill="#cbd5e1" />

      {/* Door */}
      <rect x="65" y="82" width="18" height="28" rx="1.5" fill="#93c5fd" />
      <circle cx="80" cy="97" r="1.5" fill="#60a5fa" />

      {/* Windows */}
      <rect x="42" y="75" width="16" height="14" rx="1" fill="#bfdbfe" stroke="#93c5fd" strokeWidth="0.5" />
      <line x1="50" y1="75" x2="50" y2="89" stroke="#93c5fd" strokeWidth="0.5" />
      <line x1="42" y1="82" x2="58" y2="82" stroke="#93c5fd" strokeWidth="0.5" />

      <rect x="92" y="75" width="16" height="14" rx="1" fill="#bfdbfe" stroke="#93c5fd" strokeWidth="0.5" />
      <line x1="100" y1="75" x2="100" y2="89" stroke="#93c5fd" strokeWidth="0.5" />
      <line x1="92" y1="82" x2="108" y2="82" stroke="#93c5fd" strokeWidth="0.5" />

      {/* Solar panels on roof */}
      <rect x="45" y="42" width="24" height="16" rx="1" fill="#1e40af" opacity="0.7" transform="rotate(-22 57 50)" />
      <line x1="47" y1="47" x2="67" y2="40" stroke="#3b82f6" strokeWidth="0.5" />
      <line x1="48" y1="52" x2="68" y2="45" stroke="#3b82f6" strokeWidth="0.5" />
      <line x1="55" y1="39" x2="52" y2="55" stroke="#3b82f6" strokeWidth="0.5" />
      <line x1="61" y1="37" x2="58" y2="53" stroke="#3b82f6" strokeWidth="0.5" />

      <rect x="72" y="37" width="24" height="16" rx="1" fill="#1e40af" opacity="0.7" transform="rotate(22 84 45)" />
      <line x1="74" y1="40" x2="94" y2="47" stroke="#3b82f6" strokeWidth="0.5" />
      <line x1="73" y1="45" x2="93" y2="52" stroke="#3b82f6" strokeWidth="0.5" />
      <line x1="80" y1="37" x2="83" y2="53" stroke="#3b82f6" strokeWidth="0.5" />
      <line x1="86" y1="39" x2="89" y2="55" stroke="#3b82f6" strokeWidth="0.5" />

      {/* Home battery unit */}
      <rect x="130" y="80" width="25" height="30" rx="3" fill="#093c71" />
      <rect x="133" y="84" width="19" height="7" rx="1" fill="#006297" />
      <rect x="133" y="93" width="19" height="7" rx="1" fill="#006297" />
      <rect x="133" y="102" width="19" height="5" rx="1" fill="#006297" />

      {/* Battery charge indicator */}
      <rect x="136" y="85" width="13" height="5" rx="1" fill="#10b981" opacity="0.7" />
      <rect x="136" y="94" width="13" height="5" rx="1" fill="#10b981" opacity="0.5" />

      {/* Status LED on battery */}
      <circle cx="142" cy="82" r="1.5" fill="#10b981">
        <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" />
      </circle>

      {/* Energy flow: solar to battery */}
      <path d="M95 52 Q115 50 130 80" stroke="#fbbf24" strokeWidth="1.5" fill="none" strokeDasharray="3 2" />
      <circle r="2" fill="#fbbf24">
        <animateMotion dur="2.5s" repeatCount="indefinite" path="M95,52 Q115,50 130,80" />
      </circle>

      {/* Energy flow: battery to house */}
      <path d="M130 95 L115 95" stroke="#10b981" strokeWidth="2" />

      {/* Ground / lawn */}
      <rect x="0" y="110" width="200" height="50" fill="#dcfce7" opacity="0.5" />

      {/* Tree */}
      <rect x="170" y="85" width="4" height="25" rx="1" fill="#92400e" opacity="0.5" />
      <circle cx="172" cy="78" r="12" fill="#86efac" opacity="0.4" />
      <circle cx="167" cy="82" r="8" fill="#86efac" opacity="0.3" />
      <circle cx="178" cy="80" r="9" fill="#86efac" opacity="0.35" />

      {/* EV car outline (small) */}
      <rect x="10" y="100" width="22" height="10" rx="3" fill="#94a3b8" opacity="0.4" />
      <circle cx="15" cy="110" r="3" fill="#6b7280" opacity="0.3" />
      <circle cx="27" cy="110" r="3" fill="#6b7280" opacity="0.3" />

      {/* Plug icon */}
      <line x1="32" y1="105" x2="42" y2="100" stroke="#10b981" strokeWidth="1" strokeDasharray="2 1" />
    </svg>
  );
}
