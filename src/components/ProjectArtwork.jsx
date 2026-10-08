import { useId } from "react";
import {
  Boxes,
  BusFront,
  CircleHelp,
  Code2,
  Package,
  Ticket,
} from "lucide-react";
import "./project-artwork.css";

function TransitArtwork({ gradientId }) {
  return (
    <svg className="project-art-scene" viewBox="0 0 520 260" fill="none">
      <defs>
        <linearGradient
          id={gradientId}
          x1="82"
          y1="190"
          x2="438"
          y2="66"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4D7797" />
          <stop offset="0.6" stopColor="#ACD9FF" />
          <stop offset="1" stopColor="#D9EDFF" />
        </linearGradient>
      </defs>
      <path
        d="M58 178 268 56 464 168 254 232Z"
        fill="#1C2935"
        fillOpacity=".5"
        stroke="#324351"
        strokeWidth=".8"
      />
      <path
        d="M99 160 289 50M146 187 336 77M196 216 386 106M150 103 352 219M204 71 414 194"
        stroke="#344C5D"
        strokeOpacity=".32"
        strokeWidth=".8"
      />
      <path
        d="M97 181 169 139 221 167 300 121 350 151 428 105"
        stroke="#9BCCEF"
        strokeOpacity=".08"
        strokeWidth="14"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M97 181 169 139 221 167 300 121 350 151 428 105"
        stroke={`url(#${gradientId})`}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M97 181 121 196 169 168"
        stroke="#6C8EA6"
        strokeWidth="1.5"
        strokeDasharray="3 5"
        strokeLinecap="round"
      />
      {[
        [97, 181],
        [169, 139],
        [221, 167],
        [300, 121],
        [350, 151],
        [428, 105],
      ].map(([x, y], index) => (
        <g key={`${x}-${y}`}>
          <ellipse
            cx={x}
            cy={y + 3}
            rx="9"
            ry="5"
            fill="#0D161E"
            fillOpacity=".6"
          />
          <circle
            cx={x}
            cy={y}
            r={index === 5 ? 7 : 5}
            fill="#1A2834"
            stroke="#B8DEFA"
            strokeWidth="2"
          />
          {index === 5 && <circle cx={x} cy={y} r="2.5" fill="#B8DEFA" />}
        </g>
      ))}
      <path
        d="M300 108V87"
        stroke="#9BC8E9"
        strokeWidth="1.5"
        strokeDasharray="2 3"
      />
      <rect
        x="272"
        y="34"
        width="56"
        height="54"
        rx="17"
        fill="#243A4C"
        stroke="#7FADD0"
        strokeOpacity=".55"
      />
      <rect
        x="276"
        y="38"
        width="48"
        height="46"
        rx="14"
        fill="#AECFEB"
        fillOpacity=".05"
      />
      <BusFront
        x="286"
        y="46"
        width="28"
        height="28"
        stroke="#C9E6FF"
        strokeWidth="1.6"
      />
      <g stroke="#698397" strokeWidth="1" strokeOpacity=".65">
        <path d="M65 67H80M72.5 59.5V74.5M448 200H459M453.5 194.5V205.5" />
        <path d="M100 71H162M100 78H136" strokeOpacity=".45" />
      </g>
    </svg>
  );
}

function EventArtwork({ gradientId }) {
  const ticketPath =
    "M16 0H234Q250 0 250 16V59C233 59 233 89 250 89V132Q250 148 234 148H16Q0 148 0 132V89C17 89 17 59 0 59V16Q0 0 16 0Z";

  return (
    <svg className="project-art-scene" viewBox="0 0 520 260" fill="none">
      <defs>
        <linearGradient
          id={gradientId}
          x1="10"
          y1="0"
          x2="232"
          y2="148"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#C7E5FD" />
          <stop offset=".6" stopColor="#A5CDEB" />
          <stop offset="1" stopColor="#628FB1" />
        </linearGradient>
      </defs>
      <ellipse
        cx="261"
        cy="218"
        rx="133"
        ry="13"
        fill="#07111A"
        fillOpacity=".4"
      />
      <g transform="translate(119 61) rotate(6 125 74)">
        <path
          d={ticketPath}
          fill="#223444"
          stroke="#577189"
          strokeOpacity=".4"
        />
      </g>
      <g transform="translate(138 46) rotate(-9 125 74)">
        <path
          d={ticketPath}
          transform="translate(0 6)"
          fill="#2C465B"
          stroke="#6C93B3"
          strokeOpacity=".3"
        />
        <path d={ticketPath} fill="#A9D0F0" />
        <path
          d={ticketPath}
          fill={`url(#${gradientId})`}
          stroke="#D3E9FA"
          strokeOpacity=".7"
        />
        <path
          d="M189 9V139"
          stroke="#416787"
          strokeOpacity=".55"
          strokeWidth="1"
          strokeDasharray="3 5"
        />
        <Ticket
          x="24"
          y="24"
          width="26"
          height="26"
          stroke="#2D506D"
          strokeWidth="1.4"
        />
        <path
          d="M26 70H144M26 82H107"
          stroke="#294F70"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <path
          d="M26 103H82"
          stroke="#416C8F"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="147" cy="112" r="12" stroke="#527F9F" strokeWidth=".8" />
        <path
          d="m141 112 4 4 8-9"
          stroke="#315D7B"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {[0, 5, 10, 13, 18, 24, 29, 34, 38, 43, 48, 51, 56, 61, 66, 71].map(
          (offset, index) => (
            <path
              key={offset}
              d={`M207 ${37 + offset}H229`}
              stroke="#2E5472"
              strokeWidth={index % 3 === 0 ? 2.5 : 1}
            />
          ),
        )}
      </g>
      <path
        d="m93 87 5-10 5 10-5 10ZM408 167l4-8 4 8-4 8Z"
        fill="#97BEDA"
        fillOpacity=".6"
      />
      <circle cx="422" cy="78" r="4" stroke="#7398B4" strokeOpacity=".6" />
      <path
        d="M102 205H115M108.5 198.5V211.5"
        stroke="#7190A8"
        strokeOpacity=".6"
      />
    </svg>
  );
}

function ExpenseArtwork({ gradientId }) {
  const bars = [
    { x: 153, y: 192, height: 42, opacity: 0.48 },
    { x: 214, y: 184, height: 72, opacity: 0.64 },
    { x: 275, y: 175, height: 98, opacity: 0.82 },
    { x: 336, y: 167, height: 124, opacity: 1 },
  ];

  return (
    <svg className="project-art-scene" viewBox="0 0 520 260" fill="none">
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#BBDCF6" />
          <stop offset="1" stopColor="#628EAF" />
        </linearGradient>
      </defs>
      <path
        d="m105 198 251-44 79 38-251 44Z"
        fill="#22313F"
        fillOpacity=".6"
        stroke="#496074"
        strokeOpacity=".5"
      />
      <path
        d="m127 198 240-41M146 208l240-41M168 218l240-41"
        stroke="#526C81"
        strokeOpacity=".2"
      />
      {bars.map(({ x, y, height, opacity }) => (
        <g key={x} opacity={opacity}>
          <path
            d={`M${x} ${y}l33 15 28-16-33-15Z`}
            fill="#07121D"
            fillOpacity=".25"
            transform="translate(7 4)"
          />
          <path
            d={`M${x} ${y}V${y - height}l33 15V${y + 15}Z`}
            fill={`url(#${gradientId})`}
            stroke="#C3E0F6"
            strokeOpacity=".4"
            strokeWidth=".7"
          />
          <path
            d={`M${x + 33} ${y + 15}V${y - height + 15}l24-14V${y + 1}Z`}
            fill="#527C9C"
            stroke="#A0CBEA"
            strokeOpacity=".35"
            strokeWidth=".7"
          />
          <path
            d={`M${x} ${y - height}l24-14 33 15-24 14Z`}
            fill="#C1E2FC"
            stroke="#D3EAFC"
            strokeOpacity=".8"
            strokeWidth=".7"
          />
        </g>
      ))}
      <path
        d="M101 105V61H191"
        stroke="#5F7D94"
        strokeOpacity=".35"
        strokeWidth="1"
      />
      <path
        d="m111 95 19-14 16 4 25-18"
        stroke="#9BC4E4"
        strokeOpacity=".7"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="171" cy="67" r="3" fill="#ADCFEA" />
      <path
        d="M403 104H416M409.5 97.5V110.5"
        stroke="#7190A8"
        strokeOpacity=".6"
      />
    </svg>
  );
}

const identityIcons = {
  assetflow: Boxes,
  coreinventory: Package,
  quiz: CircleHelp,
};

function IdentityArtwork({ project }) {
  const Icon = identityIcons[project.id] || Code2;

  return (
    <div className="project-art-identity project-art-scene">
      <span className="project-art-orbit project-art-orbit-outer" />
      <span className="project-art-orbit project-art-orbit-inner" />
      <span className="project-art-identity-tile">
        <Icon size={42} strokeWidth={1.25} />
      </span>
      <span className="project-art-point project-art-point-one" />
      <span className="project-art-point project-art-point-two" />
      <span className="project-art-point project-art-point-three" />
    </div>
  );
}

export default function ProjectArtwork({ project, compact = false }) {
  const gradientId = `project-art-${useId().replace(/:/g, "")}`;
  const artwork =
    project.id === "smarttransit" ? (
      <TransitArtwork gradientId={gradientId} />
    ) : project.id === "event-flow" ? (
      <EventArtwork gradientId={gradientId} />
    ) : project.id === "expense-tracker" ? (
      <ExpenseArtwork gradientId={gradientId} />
    ) : (
      <IdentityArtwork project={project} />
    );

  return (
    <div
      className={`project-art${compact ? " project-art-compact" : ""}`}
      aria-hidden="true"
    >
      {artwork}
    </div>
  );
}
