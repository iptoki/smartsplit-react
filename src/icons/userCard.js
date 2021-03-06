import { Colors } from '../theme';

export default function UserCard({ color = Colors.tertiary, size = 24 }) {
  const scale = size / 24;

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="1"
        y="5"
        width="22"
        height="14"
        rx="2"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform={`scale(${scale})`}
      />
      <path
        d="M8 12C9.10457 12 10 11.1046 10 10C10 8.89543 9.10457 8 8 8C6.89543 8 6 8.89543 6 10C6 11.1046 6.89543 12 8 12Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform={`scale(${scale})`}
      />
      <path
        d="M12 18V17C12 15.8954 11.1046 15 10 15H7C5.89543 15 5 15.8954 5 17V18"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform={`scale(${scale})`}
      />
      <path
        d="M14 9H19M14 12H17"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform={`scale(${scale})`}
      />
    </svg>
  );
}
