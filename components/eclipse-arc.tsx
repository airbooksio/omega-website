// Inline DOM SVG of the hero eclipse. Rendered inline (not as <img>/background)
// because Safari clips the mask + blur filters when it rasterizes and scales an
// SVG via image/background paths; inline SVG runs the filter pipeline natively.

export function EclipseArc({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1728 700"
      fill="none"
      aria-hidden
      preserveAspectRatio="xMidYMin meet"
      className={className}
    >
        <path
          d="M0.000183266 -0.00012207L1728 2.89963e-05L1728 700L1712.12 700C1549.35 398.579 1230.59 193.787 864 193.787C497.408 193.787 178.649 398.58 15.8839 700L0.00012207 700L0.000183266 -0.00012207Z"
          fill="#D9D9D9"
        />
      <g>
        <g filter="url(#eclipse-arc-f0)">
          <circle
            cx="797.462"
            cy="593.319"
            r="498.626"
            transform="rotate(90.3108 797.462 593.319)"
            fill="url(#eclipse-arc-p0)"
          />
        </g>
        <g filter="url(#eclipse-arc-f1)">
          <path
            d="M1429.44 759.762L674.36 1190.26L679.074 321.095L1429.44 759.762Z"
            fill="url(#eclipse-arc-p1)"
          />
        </g>
      </g>
      <defs>
        <filter
          id="eclipse-arc-f0"
          x="18.4199"
          y="-185.722"
          width="1558.08"
          height="1558.08"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="140.208" result="effect1_foregroundBlur" />
        </filter>
        <filter
          id="eclipse-arc-f1"
          x="464.049"
          y="110.784"
          width="1175.7"
          height="1289.79"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="105.156" result="effect1_foregroundBlur" />
        </filter>
        <linearGradient
          id="eclipse-arc-p0"
          x1="401.917"
          y1="163.414"
          x2="1097.92"
          y2="1091.95"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6100FF" />
          <stop offset="1" stopColor="#00FFFF" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="eclipse-arc-p1"
          x1="1429.44"
          y1="759.762"
          x2="425.809"
          y2="754.319"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0075FF" />
          <stop offset="1" stopColor="#00A3FF" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}
