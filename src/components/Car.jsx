import React from 'react';

export default function Car({ finish }) {
  return (
    <svg
      className="car"
      viewBox="0 0 1100 430"
      role="img"
      aria-label={`AERA GT concept car in ${finish.name}`}
    >
      <defs>
        <linearGradient id="body" x1="0" y1="0" x2="0.15" y2="1">
          <stop stopColor={finish.light} />
          <stop offset=".42" stopColor={finish.color} />
          <stop offset=".72" stopColor={finish.dark} />
          <stop offset="1" stopColor="#17221f" />
        </linearGradient>
        <linearGradient id="glass" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#718883" />
          <stop offset=".5" stopColor="#23322f" />
          <stop offset="1" stopColor="#101916" />
        </linearGradient>
        <radialGradient id="rim">
          <stop stopColor="#b2bab2" />
          <stop offset=".28" stopColor="#26312c" />
          <stop offset=".76" stopColor="#69756b" />
          <stop offset=".81" stopColor="#171d19" />
          <stop offset="1" stopColor="#090d0b" />
        </radialGradient>
        <filter id="blur">
          <feGaussianBlur stdDeviation="12" />
        </filter>
      </defs>
      <ellipse
        cx="563"
        cy="351"
        rx="451"
        ry="23"
        fill="#000"
        opacity=".65"
        filter="url(#blur)"
      />
      <path
        d="M112 291 123 252 187 224 309 208 Q401 117 506 111 L644 116 Q718 129 800 195 L937 217 Q989 230 1007 268 L1003 315 944 332 183 332 108 315Z"
        fill="url(#body)"
        stroke="#c7d0bf"
        strokeWidth="1.3"
      />
      <path
        d="m330 205 83-64q48-22 101-22l120 5q63 14 135 71Z"
        fill="url(#glass)"
        stroke="#b6c2b6"
        strokeWidth="2"
      />
      <path d="m535 123-9 78m107-73 63 70" stroke="#17251e" strokeWidth="9" />
      <path
        d="m143 251 178-31 459-12 171 26"
        fill="none"
        stroke="#e1eadb"
        opacity=".7"
        strokeWidth="2"
      />
      <path
        d="M302 225 300 303M529 215 526 311M771 216 782 307"
        fill="none"
        stroke="#20362e"
        opacity=".7"
      />
      <path d="m158 301 777 5-31 20H195Z" fill="#17221c" />
      <path
        d="m133 257 107-17-16 13-90 18m747-31 81 16 7 12-89-13"
        fill="#efffcf"
      />
      <path d="m956 277 42 3-3 26-51 4Z" fill="#17231e" />
      <path
        d="M219 327a78 78 0 0 1 156 0M759 327a78 78 0 0 1 156 0"
        fill="#101813"
      />
      {[297, 837].map((x) => (
        <g
          key={x}
          className="wheel"
          style={{ transformOrigin: `${x}px 318px` }}
        >
          <circle cx={x} cy="318" r="65" fill="#0d110e" />
          <circle
            cx={x}
            cy="318"
            r="49"
            fill="url(#rim)"
            stroke="#8a9589"
            strokeWidth="2"
          />
          {Array.from({ length: 10 }, (_, i) => (
            <path
              key={i}
              d={`M${x - 5} 307l-9-33 13-2 8 35Z`}
              fill="#a5afa3"
              transform={`rotate(${i * 36} ${x} 318)`}
            />
          ))}
          <circle cx={x} cy="318" r="12" fill="#26332a" stroke="#a4b09f" />
        </g>
      ))}
      <path
        d="m549 228 31-1m131-2 28-1"
        stroke="#d1d9cd"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path d="m728 199-13-19 27-2 16 18" fill={finish.dark} stroke="#b9c6b6" />
    </svg>
  );
}
