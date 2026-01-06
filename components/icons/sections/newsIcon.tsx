export default function NewsIcon({size=40}: {size?: number}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 600 600'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clip-path="url(#clip0_98_767)">
        <rect width="100" height="100" fill="black" />
        <rect x="300" width="100" height="100" fill="black" />
        <rect x="100" y="100" width="100" height="100" fill="black" />
        <rect x="400" y="100" width="100" height="100" fill="black" />
        <path d="M300 400H200V200H300V400Z" fill="black" />
        <path d="M600 400H500V200H600V400Z" fill="black" />
        <rect x="100" y="400" width="100" height="100" fill="black" />
        <rect x="400" y="400" width="100" height="100" fill="black" />
        <rect y="500" width="100" height="100" fill="black" />
        <rect x="300" y="500" width="100" height="100" fill="black" />
      </g>
      <defs>
        <clipPath id="clip0_98_767">
          <rect width="600" height="600" fill="white" />
        </clipPath>
      </defs>
    </svg>


  );
}