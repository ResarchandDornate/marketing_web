export function CommercialFlow() {
  return (
    <svg viewBox="0 0 420 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <defs>
        <filter id="glow1"><feGaussianBlur stdDeviation="3" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        <linearGradient id="gridBg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#006BA6" stopOpacity="0.08"/>
          <stop offset="100%" stopColor="#006BA6" stopOpacity="0.02"/>
        </linearGradient>
      </defs>

      {/* Grid / Power Source */}
      <rect x="15" y="40" width="100" height="80" rx="12" fill="url(#gridBg)" stroke="#006BA6" strokeWidth="1.5"/>
      {/* Grid icon - lightning bolt */}
      <path d="M60 55 L55 72 L62 72 L57 90" stroke="#006BA6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <circle cx="58" cy="72" r="18" fill="#006BA6" fillOpacity="0.06"/>
      <text x="65" y="108" textAnchor="middle" fill="#006BA6" fontSize="10" fontWeight="700">GRID</text>

      {/* Flow line: Grid → BESS */}
      <line x1="115" y1="80" x2="155" y2="80" stroke="#006BA6" strokeWidth="2" strokeDasharray="6,4" strokeOpacity="0.3"/>
      <polygon points="152,75 160,80 152,85" fill="#006BA6" fillOpacity="0.5"/>
      <circle r="4" fill="#006BA6" filter="url(#glow1)">
        <animate attributeName="cx" values="115;155" dur="1.5s" repeatCount="indefinite"/>
        <animateTransform attributeName="transform" type="translate" values="0,80;0,80" dur="1.5s" repeatCount="indefinite"/>
      </circle>
      <circle cx="115" cy="80" r="4" fill="#006BA6" filter="url(#glow1)">
        <animate attributeName="cx" values="115;155" dur="1.5s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite"/>
      </circle>

      {/* BESS - Center */}
      <rect x="160" y="25" width="100" height="110" rx="14" fill="#006BA6" fillOpacity="0.06" stroke="#006BA6" strokeWidth="2"/>
      {/* Battery cells */}
      <rect x="178" y="42" width="64" height="16" rx="4" fill="#006BA6" fillOpacity="0.1" stroke="#006BA6" strokeWidth="0.8"/>
      <rect x="181" y="45" width="40" height="10" rx="3" fill="#006BA6" fillOpacity="0.35">
        <animate attributeName="width" values="25;55;25" dur="3s" repeatCount="indefinite"/>
      </rect>
      <rect x="178" y="64" width="64" height="16" rx="4" fill="#006BA6" fillOpacity="0.1" stroke="#006BA6" strokeWidth="0.8"/>
      <rect x="181" y="67" width="35" height="10" rx="3" fill="#006BA6" fillOpacity="0.3">
        <animate attributeName="width" values="20;50;20" dur="3.5s" repeatCount="indefinite"/>
      </rect>
      <rect x="178" y="86" width="64" height="16" rx="4" fill="#006BA6" fillOpacity="0.1" stroke="#006BA6" strokeWidth="0.8"/>
      <rect x="181" y="89" width="50" height="10" rx="3" fill="#006BA6" fillOpacity="0.4">
        <animate attributeName="width" values="30;58;30" dur="2.5s" repeatCount="indefinite"/>
      </rect>
      <text x="210" y="120" textAnchor="middle" fill="#006BA6" fontSize="11" fontWeight="800">BESS</text>

      {/* Flow line: BESS → Factory */}
      <line x1="260" y1="80" x2="300" y2="80" stroke="#006BA6" strokeWidth="2" strokeDasharray="6,4" strokeOpacity="0.3"/>
      <polygon points="297,75 305,80 297,85" fill="#006BA6" fillOpacity="0.5"/>
      <circle cx="260" cy="80" r="4" fill="#006BA6" filter="url(#glow1)">
        <animate attributeName="cx" values="260;300" dur="1.5s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite"/>
      </circle>

      {/* Factory */}
      <rect x="305" y="40" width="100" height="80" rx="12" fill="#f0f4f8" stroke="#374151" strokeWidth="1.5"/>
      {/* Factory icon - building shape */}
      <rect x="330" y="58" width="18" height="22" rx="2" fill="#374151" fillOpacity="0.15" stroke="#374151" strokeWidth="0.8"/>
      <rect x="352" y="65" width="14" height="15" rx="2" fill="#374151" fillOpacity="0.1" stroke="#374151" strokeWidth="0.8"/>
      <rect x="335" y="63" width="4" height="5" rx="1" fill="#374151" fillOpacity="0.25"/>
      <rect x="341" y="63" width="4" height="5" rx="1" fill="#374151" fillOpacity="0.25"/>
      <text x="355" y="100" textAnchor="middle" fill="#374151" fontSize="10" fontWeight="700">FACTORY</text>

      {/* EMS Connection */}
      <line x1="210" y1="135" x2="210" y2="165" stroke="#006BA6" strokeWidth="1.5" strokeDasharray="4,4" strokeOpacity="0.25"/>
      <circle cx="210" cy="135" r="3" fill="#006BA6" fillOpacity="0.5">
        <animate attributeName="cy" values="135;165" dur="2s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.8;0.2;0.8" dur="2s" repeatCount="indefinite"/>
      </circle>

      {/* Energy Management System */}
      <rect x="130" y="165" width="160" height="45" rx="10" fill="#f8f9fa" stroke="#e2e5ea" strokeWidth="1.5"/>
      <text x="210" y="186" textAnchor="middle" fill="#374151" fontSize="9" fontWeight="700">Energy Management System</text>
      <text x="210" y="200" textAnchor="middle" fill="#9ca3af" fontSize="7">Real-time monitoring & control</text>
    </svg>
  );
}

export function SolarIntegrationFlow() {
  return (
    <svg viewBox="0 0 420 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <defs>
        <linearGradient id="sunGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F59E0B"/>
          <stop offset="100%" stopColor="#D97706"/>
        </linearGradient>
        <filter id="glow2"><feGaussianBlur stdDeviation="3" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      </defs>

      {/* Sun */}
      <circle cx="55" cy="55" r="30" fill="#F59E0B" fillOpacity="0.08"/>
      <circle cx="55" cy="55" r="18" fill="#F59E0B" fillOpacity="0.15">
        <animate attributeName="r" values="15;20;15" dur="3s" repeatCount="indefinite"/>
      </circle>
      <circle cx="55" cy="55" r="10" fill="#F59E0B" fillOpacity="0.5"/>
      {/* Sun rays */}
      {[0,45,90,135,180,225,270,315].map((angle, i) => (
        <line key={i} x1={55 + Math.cos(angle * Math.PI / 180) * 22} y1={55 + Math.sin(angle * Math.PI / 180) * 22} x2={55 + Math.cos(angle * Math.PI / 180) * 30} y2={55 + Math.sin(angle * Math.PI / 180) * 30} stroke="#F59E0B" strokeWidth="1.5" strokeOpacity="0.4" strokeLinecap="round"/>
      ))}
      <text x="55" y="98" textAnchor="middle" fill="#D97706" fontSize="9" fontWeight="700">SOLAR</text>

      {/* Flow: Sun → Panel */}
      <line x1="88" y1="55" x2="128" y2="55" stroke="#F59E0B" strokeWidth="2" strokeDasharray="5,4" strokeOpacity="0.4"/>
      <polygon points="125,50 133,55 125,60" fill="#F59E0B" fillOpacity="0.6"/>
      <circle cx="88" cy="55" r="4" fill="#F59E0B" filter="url(#glow2)">
        <animate attributeName="cx" values="88;128" dur="1.2s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="1;0.3;1" dur="1.2s" repeatCount="indefinite"/>
      </circle>

      {/* Solar Panel */}
      <rect x="133" y="28" width="72" height="55" rx="6" fill="#1e3a5f" fillOpacity="0.06" stroke="#006BA6" strokeWidth="1.5"/>
      <line x1="133" y1="46" x2="205" y2="46" stroke="#006BA6" strokeWidth="0.6" strokeOpacity="0.25"/>
      <line x1="133" y1="64" x2="205" y2="64" stroke="#006BA6" strokeWidth="0.6" strokeOpacity="0.25"/>
      <line x1="157" y1="28" x2="157" y2="83" stroke="#006BA6" strokeWidth="0.6" strokeOpacity="0.25"/>
      <line x1="181" y1="28" x2="181" y2="83" stroke="#006BA6" strokeWidth="0.6" strokeOpacity="0.25"/>
      <text x="169" y="98" textAnchor="middle" fill="#006BA6" fontSize="9" fontWeight="700">PV ARRAY</text>

      {/* Flow: Panel → Inverter */}
      <line x1="205" y1="55" x2="240" y2="55" stroke="#006BA6" strokeWidth="2" strokeDasharray="5,4" strokeOpacity="0.3"/>
      <polygon points="237,50 245,55 237,60" fill="#006BA6" fillOpacity="0.5"/>
      <circle cx="205" cy="55" r="3.5" fill="#006BA6" filter="url(#glow2)">
        <animate attributeName="cx" values="205;240" dur="1.3s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="1;0.3;1" dur="1.3s" repeatCount="indefinite"/>
      </circle>

      {/* Inverter */}
      <rect x="245" y="32" width="55" height="46" rx="8" fill="#f0f4f8" stroke="#006BA6" strokeWidth="1.5"/>
      <text x="272" y="54" textAnchor="middle" fill="#006BA6" fontSize="9" fontWeight="800">INV</text>
      <text x="272" y="68" textAnchor="middle" fill="#9ca3af" fontSize="7">DC → AC</text>

      {/* Flow: Inverter → BESS */}
      <line x1="300" y1="55" x2="335" y2="55" stroke="#006BA6" strokeWidth="2" strokeDasharray="5,4" strokeOpacity="0.3"/>
      <polygon points="332,50 340,55 332,60" fill="#006BA6" fillOpacity="0.5"/>
      <circle cx="300" cy="55" r="3.5" fill="#006BA6" filter="url(#glow2)">
        <animate attributeName="cx" values="300;335" dur="1.4s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="1;0.3;1" dur="1.4s" repeatCount="indefinite"/>
      </circle>

      {/* BESS */}
      <rect x="340" y="20" width="70" height="75" rx="12" fill="#006BA6" fillOpacity="0.06" stroke="#006BA6" strokeWidth="2"/>
      <rect x="354" y="34" width="42" height="12" rx="3" fill="#006BA6" fillOpacity="0.12" stroke="#006BA6" strokeWidth="0.6"/>
      <rect x="357" y="37" width="28" height="6" rx="2" fill="#006BA6" fillOpacity="0.35">
        <animate attributeName="width" values="15;36;15" dur="2.5s" repeatCount="indefinite"/>
      </rect>
      <rect x="354" y="50" width="42" height="12" rx="3" fill="#006BA6" fillOpacity="0.12" stroke="#006BA6" strokeWidth="0.6"/>
      <rect x="357" y="53" width="22" height="6" rx="2" fill="#006BA6" fillOpacity="0.3">
        <animate attributeName="width" values="12;36;12" dur="3s" repeatCount="indefinite"/>
      </rect>
      <rect x="354" y="66" width="42" height="12" rx="3" fill="#006BA6" fillOpacity="0.12" stroke="#006BA6" strokeWidth="0.6"/>
      <rect x="357" y="69" width="32" height="6" rx="2" fill="#006BA6" fillOpacity="0.4">
        <animate attributeName="width" values="18;36;18" dur="2s" repeatCount="indefinite"/>
      </rect>
      <text x="375" y="98" textAnchor="middle" fill="#006BA6" fontSize="10" fontWeight="800">BESS</text>

      {/* Flow down to Building */}
      <line x1="272" y1="78" x2="272" y2="105" stroke="#006BA6" strokeWidth="1.5" strokeOpacity="0.25"/>
      <line x1="272" y1="105" x2="210" y2="105" stroke="#006BA6" strokeWidth="1.5" strokeOpacity="0.25"/>
      <line x1="210" y1="105" x2="210" y2="140" stroke="#006BA6" strokeWidth="1.5" strokeDasharray="4,4" strokeOpacity="0.3"/>
      <polygon points="205,137 210,145 215,137" fill="#006BA6" fillOpacity="0.5"/>
      <circle cx="210" cy="105" r="3" fill="#006BA6">
        <animate attributeName="cy" values="105;140" dur="1.8s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.8;0.2;0.8" dur="1.8s" repeatCount="indefinite"/>
      </circle>

      {/* Building Load */}
      <rect x="140" y="145" width="140" height="55" rx="10" fill="#f8f9fa" stroke="#e2e5ea" strokeWidth="1.5"/>
      {/* Building icon */}
      <rect x="195" y="157" width="18" height="20" rx="2" fill="#374151" fillOpacity="0.12" stroke="#374151" strokeWidth="0.8"/>
      <rect x="199" y="161" width="4" height="4" rx="1" fill="#374151" fillOpacity="0.2"/>
      <rect x="205" y="161" width="4" height="4" rx="1" fill="#374151" fillOpacity="0.2"/>
      <text x="210" y="190" textAnchor="middle" fill="#374151" fontSize="9" fontWeight="700">Building Load</text>
    </svg>
  );
}

export function EVChargingFlow() {
  return (
    <svg viewBox="0 0 420 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <defs>
        <linearGradient id="evGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#006BA6"/>
          <stop offset="100%" stopColor="#10B981"/>
        </linearGradient>
        <filter id="glow3"><feGaussianBlur stdDeviation="3" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      </defs>

      {/* Solar Source */}
      <rect x="15" y="20" width="85" height="60" rx="10" fill="#F59E0B" fillOpacity="0.06" stroke="#F59E0B" strokeWidth="1.5"/>
      <circle cx="57" cy="42" r="12" fill="#F59E0B" fillOpacity="0.15">
        <animate attributeName="r" values="10;14;10" dur="3s" repeatCount="indefinite"/>
      </circle>
      <circle cx="57" cy="42" r="6" fill="#F59E0B" fillOpacity="0.4"/>
      <text x="57" y="70" textAnchor="middle" fill="#D97706" fontSize="9" fontWeight="700">SOLAR</text>

      {/* Grid Source */}
      <rect x="15" y="100" width="85" height="60" rx="10" fill="#f0f4f8" stroke="#374151" strokeWidth="1.5"/>
      <path d="M52 115 L48 130 L55 130 L50 145" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <text x="57" y="152" textAnchor="middle" fill="#374151" fontSize="9" fontWeight="700">GRID</text>

      {/* Flow: Solar → BESS */}
      <line x1="100" y1="50" x2="155" y2="75" stroke="#F59E0B" strokeWidth="2" strokeDasharray="5,4" strokeOpacity="0.4"/>
      <polygon points="150,70 158,75 150,80" fill="#F59E0B" fillOpacity="0.5"/>
      <circle cx="100" cy="50" r="4" fill="#F59E0B" filter="url(#glow3)">
        <animate attributeName="cx" values="100;155" dur="1.5s" repeatCount="indefinite"/>
        <animate attributeName="cy" values="50;75" dur="1.5s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite"/>
      </circle>

      {/* Flow: Grid → BESS */}
      <line x1="100" y1="130" x2="155" y2="100" stroke="#374151" strokeWidth="1.5" strokeDasharray="5,4" strokeOpacity="0.3"/>
      <polygon points="150,95 158,100 150,105" fill="#374151" fillOpacity="0.4"/>
      <circle cx="100" cy="130" r="3" fill="#374151">
        <animate attributeName="cx" values="100;155" dur="1.8s" repeatCount="indefinite"/>
        <animate attributeName="cy" values="130;100" dur="1.8s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.7;0.2;0.7" dur="1.8s" repeatCount="indefinite"/>
      </circle>

      {/* BESS - Center */}
      <rect x="160" y="35" width="90" height="110" rx="14" fill="#006BA6" fillOpacity="0.06" stroke="#006BA6" strokeWidth="2"/>
      {[0,1,2,3].map((i) => (
        <g key={i}>
          <rect x="176" y={48 + i * 20} width="58" height="14" rx="4" fill="#006BA6" fillOpacity="0.1" stroke="#006BA6" strokeWidth="0.6"/>
          <rect x="179" y={51 + i * 20} width="35" height="8" rx="3" fill="#006BA6" fillOpacity="0.3">
            <animate attributeName="width" values={`${18 + i * 5};${48 - i * 2};${18 + i * 5}`} dur={`${2.2 + i * 0.4}s`} repeatCount="indefinite"/>
          </rect>
        </g>
      ))}
      <text x="205" y="140" textAnchor="middle" fill="#006BA6" fontSize="11" fontWeight="800">BESS</text>

      {/* Flow: BESS → Chargers */}
      <line x1="250" y1="90" x2="290" y2="90" stroke="url(#evGrad)" strokeWidth="2.5" strokeDasharray="6,4" strokeOpacity="0.4"/>
      <polygon points="287,84 295,90 287,96" fill="#10B981" fillOpacity="0.6"/>
      <circle cx="250" cy="90" r="4" fill="#006BA6" filter="url(#glow3)">
        <animate attributeName="cx" values="250;290" dur="1.2s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="1;0.3;1" dur="1.2s" repeatCount="indefinite"/>
      </circle>

      {/* EV Charging Station */}
      <rect x="295" y="20" width="110" height="145" rx="14" fill="#10B981" fillOpacity="0.04" stroke="#10B981" strokeWidth="1.5"/>
      <text x="350" y="42" textAnchor="middle" fill="#10B981" fontSize="9" fontWeight="800">EV CHARGING</text>

      {/* EV Slots */}
      {[0,1,2].map((i) => (
        <g key={i}>
          <rect x="308" y={52 + i * 35} width="84" height="28" rx="8" fill="#10B981" fillOpacity="0.06" stroke="#10B981" strokeWidth="1"/>
          {/* EV car shape */}
          <rect x="316" y={59 + i * 35} width="22" height="12" rx="4" fill="#10B981" fillOpacity="0.15" stroke="#10B981" strokeWidth="0.6"/>
          <circle cx="321" cy={74 + i * 35} r="2.5" fill="#10B981" fillOpacity="0.2"/>
          <circle cx="333" cy={74 + i * 35} r="2.5" fill="#10B981" fillOpacity="0.2"/>
          {/* Charging text */}
          <text x="365" y={69 + i * 35} textAnchor="middle" fill="#10B981" fontSize="8" fontWeight="600">
            {['EV #1', 'EV #2', 'EV #3'][i]}
          </text>
          {/* Charging pulse */}
          <circle cx="321" cy={65 + i * 35} r="5" fill="#10B981" fillOpacity="0.1">
            <animate attributeName="r" values="5;10;5" dur={`${1.5 + i * 0.3}s`} repeatCount="indefinite"/>
            <animate attributeName="fill-opacity" values="0.1;0;0.1" dur={`${1.5 + i * 0.3}s`} repeatCount="indefinite"/>
          </circle>
        </g>
      ))}

      {/* Smart Controller */}
      <rect x="135" y="170" width="170" height="42" rx="10" fill="#f8f9fa" stroke="#e2e5ea" strokeWidth="1.5"/>
      <text x="220" y="190" textAnchor="middle" fill="#374151" fontSize="9" fontWeight="700">Smart Load Controller</text>
      <text x="220" y="203" textAnchor="middle" fill="#9ca3af" fontSize="7">Peak shaving & demand response</text>
      <line x1="205" y1="145" x2="220" y2="170" stroke="#006BA6" strokeWidth="1" strokeDasharray="4,4" strokeOpacity="0.2"/>
    </svg>
  );
}
