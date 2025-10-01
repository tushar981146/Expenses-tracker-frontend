const FinanceIllustration = () => (
    <svg viewBox="0 0 500 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
        {/* Abstract Wave Background (Soft Blue/Purple) */}
        <path d="M0 300C120 280 250 150 500 180V300H0Z" fill="#E0E7FF" opacity="0.6"/>
        <circle cx="450" cy="280" r="150" fill="#C7D2FE" opacity="0.3"/>
        
        {/* Piggy Bank (Pink) */}
        <g transform="translate(250, 180)">
            <circle cx="0" cy="0" r="60" fill="#F9A8D4"/>
            <rect x="-30" y="-70" width="10" height="20" rx="3" fill="#DB2777"/> {/* Slot */}
            <circle cx="-15" cy="5" r="5" fill="#DB2777"/> {/* Eye 1 */}
            <circle cx="15" cy="5" r="5" fill="#DB2777"/> {/* Eye 2 */}
            <circle cx="0" cy="20" r="15" fill="#DB2777" opacity="0.2"/> {/* Snout shadow */}
            <circle cx="0" cy="20" r="10" fill="#EC4899"/> {/* Snout */}
            <path d="M-5 40 L-15 55 L-5 55 Z" fill="#DB2777"/> {/* Leg 1 */}
            <path d="M15 40 L5 55 L15 55 Z" fill="#DB2777"/> {/* Leg 2 */}
        </g>
        
        {/* Stack of Coins (Gold) */}
        <g transform="translate(150, 240)">
            <circle cx="0" cy="0" r="20" fill="#FBBF24"/>
            <circle cx="0" cy="0" r="15" fill="#F59E0B"/>
            <circle cx="-10" cy="-15" r="20" fill="#FBBF24" stroke="#F59E0B" strokeWidth="2"/>
            <circle cx="-10" cy="-15" r="15" fill="#F59E0B"/>
            <circle cx="20" cy="-10" r="25" fill="#FBBF24" stroke="#F59E0B" strokeWidth="3"/>
        </g>
        
        {/* Mobile Phone Mockup (Dark/Blue) */}
        <g transform="translate(100, 50)">
            <rect x="0" y="0" width="150" height="220" rx="15" fill="#1F2937" stroke="#374151" strokeWidth="4"/>
            <rect x="10" y="10" width="130" height="200" rx="10" fill="#FFFFFF"/>
            
            {/* Screen Content (Checklist/Graph) */}
            <rect x="25" y="25" width="100" height="15" rx="4" fill="#6366F1"/> {/* Graph bar 1 (Tallest) */}
            <rect x="25" y="50" width="90" height="15" rx="4" fill="#A5B4FC" opacity="0.8"/> {/* Graph bar 2 */}
            
            {/* Checklist Items */}
            <path d="M35 90 L30 95 L40 85 Z" stroke="#10B981" strokeWidth="2" fill="none"/>
            <rect x="50" y="85" width="60" height="10" rx="2" fill="#E5E7EB"/>
            
            <path d="M35 115 L30 120 L40 110 Z" stroke="#10B981" strokeWidth="2" fill="none"/>
            <rect x="50" y="110" width="75" height="10" rx="2" fill="#E5E7EB"/>

            <path d="M35 140 L30 145 L40 135 Z" stroke="#10B981" strokeWidth="2" fill="none"/>
            <rect x="50" y="135" width="50" height="10" rx="2" fill="#E5E7EB"/>
        </g>
    </svg>
);

export default FinanceIllustration;