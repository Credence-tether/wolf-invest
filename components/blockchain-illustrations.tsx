import type React from "react"

interface IllustrationProps {
  className?: string
}

export const BlockchainNode: React.FC<IllustrationProps> = ({ className = "" }) => (
  <svg
    width="120"
    height="120"
    viewBox="0 0 120 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="60" cy="60" r="58" stroke="currentColor" strokeWidth="2" strokeOpacity="0.2" />
    <circle cx="60" cy="60" r="40" stroke="currentColor" strokeWidth="2" strokeOpacity="0.3" />
    <circle cx="60" cy="60" r="20" fill="currentColor" fillOpacity="0.1" />
    <circle cx="60" cy="60" r="10" fill="currentColor" fillOpacity="0.2" />
    <path d="M60 10V110M10 60H110" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" strokeDasharray="4 4" />
    <path
      d="M26 26L94 94M94 26L26 94"
      stroke="currentColor"
      strokeWidth="1"
      strokeOpacity="0.2"
      strokeDasharray="4 4"
    />
  </svg>
)

export const BlockchainCube: React.FC<IllustrationProps> = ({ className = "" }) => (
  <svg
    width="120"
    height="120"
    viewBox="0 0 120 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M60 20L100 40V80L60 100L20 80V40L60 20Z" stroke="currentColor" strokeWidth="2" strokeOpacity="0.3" />
    <path d="M60 20V100" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" strokeDasharray="4 4" />
    <path d="M20 40L100 80" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" strokeDasharray="4 4" />
    <path d="M100 40L20 80" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" strokeDasharray="4 4" />
    <circle cx="60" cy="20" r="5" fill="currentColor" fillOpacity="0.3" />
    <circle cx="20" cy="40" r="5" fill="currentColor" fillOpacity="0.3" />
    <circle cx="20" cy="80" r="5" fill="currentColor" fillOpacity="0.3" />
    <circle cx="60" cy="100" r="5" fill="currentColor" fillOpacity="0.3" />
    <circle cx="100" cy="80" r="5" fill="currentColor" fillOpacity="0.3" />
    <circle cx="100" cy="40" r="5" fill="currentColor" fillOpacity="0.3" />
  </svg>
)

export const BlockchainConnection: React.FC<IllustrationProps> = ({ className = "" }) => (
  <svg
    width="200"
    height="100"
    viewBox="0 0 200 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="30" cy="50" r="20" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeOpacity="0.3" />
    <circle cx="170" cy="50" r="20" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeOpacity="0.3" />
    <circle cx="100" cy="50" r="15" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeOpacity="0.4" />
    <path d="M50 50H80M120 50H150" stroke="currentColor" strokeWidth="2" strokeOpacity="0.3" strokeDasharray="5 5" />
    <circle cx="30" cy="50" r="8" fill="currentColor" fillOpacity="0.3" />
    <circle cx="170" cy="50" r="8" fill="currentColor" fillOpacity="0.3" />
    <circle cx="100" cy="50" r="6" fill="currentColor" fillOpacity="0.4" />
  </svg>
)

export const BlockchainHexagon: React.FC<IllustrationProps> = ({ className = "" }) => (
  <svg
    width="120"
    height="120"
    viewBox="0 0 120 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M60 10L105 40V80L60 110L15 80V40L60 10Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeOpacity="0.3"
      fill="currentColor"
      fillOpacity="0.05"
    />
    <path
      d="M60 30L90 45V75L60 90L30 75V45L60 30Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeOpacity="0.4"
      fill="currentColor"
      fillOpacity="0.1"
    />
    <path
      d="M60 45L75 55V70L60 80L45 70V55L60 45Z"
      stroke="currentColor"
      strokeOpacity="0.5"
      fill="currentColor"
      fillOpacity="0.15"
    />
    <circle cx="60" cy="60" r="5" fill="currentColor" fillOpacity="0.3" />
  </svg>
)

export const BlockchainNetwork: React.FC<IllustrationProps> = ({ className = "" }) => (
  <svg
    width="200"
    height="200"
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="100" cy="100" r="15" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeOpacity="0.4" />
    <circle cx="50" cy="50" r="10" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeOpacity="0.3" />
    <circle cx="150" cy="50" r="10" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeOpacity="0.3" />
    <circle cx="50" cy="150" r="10" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeOpacity="0.3" />
    <circle cx="150" cy="150" r="10" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeOpacity="0.3" />
    <path
      d="M100 85V65M85 100H65M100 115V135M115 100H135M60 60L85 85M140 60L115 85M60 140L85 115M140 140L115 115"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeOpacity="0.3"
      strokeDasharray="3 3"
    />
    <circle cx="100" cy="100" r="5" fill="currentColor" fillOpacity="0.4" />
    <circle cx="50" cy="50" r="4" fill="currentColor" fillOpacity="0.3" />
    <circle cx="150" cy="50" r="4" fill="currentColor" fillOpacity="0.3" />
    <circle cx="50" cy="150" r="4" fill="currentColor" fillOpacity="0.3" />
    <circle cx="150" cy="150" r="4" fill="currentColor" fillOpacity="0.3" />
  </svg>
)

export const BlockchainWaves: React.FC<IllustrationProps> = ({ className = "" }) => (
  <svg
    width="200"
    height="100"
    viewBox="0 0 200 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M0 50C33.3333 16.6667 66.6667 16.6667 100 50C133.333 83.3333 166.667 83.3333 200 50"
      stroke="currentColor"
      strokeWidth="2"
      strokeOpacity="0.2"
    />
    <path
      d="M0 30C33.3333 -3.33333 66.6667 -3.33333 100 30C133.333 63.3333 166.667 63.3333 200 30"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeOpacity="0.15"
    />
    <path
      d="M0 70C33.3333 36.6667 66.6667 36.6667 100 70C133.333 103.333 166.667 103.333 200 70"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeOpacity="0.15"
    />
    <circle cx="50" cy="50" r="4" fill="currentColor" fillOpacity="0.3" />
    <circle cx="100" cy="50" r="4" fill="currentColor" fillOpacity="0.3" />
    <circle cx="150" cy="50" r="4" fill="currentColor" fillOpacity="0.3" />
  </svg>
)

export const BlockchainCircuit: React.FC<IllustrationProps> = ({ className = "" }) => (
  <svg
    width="150"
    height="150"
    viewBox="0 0 150 150"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M30 30H120V120H30V30Z" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.2" strokeDasharray="4 4" />
    <path d="M30 30L75 75L120 30M30 120L75 75L120 120" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.2" />
    <circle cx="30" cy="30" r="5" fill="currentColor" fillOpacity="0.3" />
    <circle cx="120" cy="30" r="5" fill="currentColor" fillOpacity="0.3" />
    <circle cx="30" cy="120" r="5" fill="currentColor" fillOpacity="0.3" />
    <circle cx="120" cy="120" r="5" fill="currentColor" fillOpacity="0.3" />
    <circle cx="75" cy="75" r="8" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeOpacity="0.3" />
    <path
      d="M75 30V60M30 75H60M75 90V120M90 75H120"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeOpacity="0.2"
      strokeDasharray="3 3"
    />
    <circle cx="75" cy="30" r="3" fill="currentColor" fillOpacity="0.3" />
    <circle cx="30" cy="75" r="3" fill="currentColor" fillOpacity="0.3" />
    <circle cx="75" cy="120" r="3" fill="currentColor" fillOpacity="0.3" />
    <circle cx="120" cy="75" r="3" fill="currentColor" fillOpacity="0.3" />
  </svg>
)
