type IconProps = React.SVGProps<SVGSVGElement>;

export function NewZealandIcon({ className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      {...props}
    >
      {/* North Island */}
      <path
        d="M16.9 2.2c.7 1.1.8 2.1.3 3.1-.4.8-1.2 1.4-1.4 2.3-.2.8.2 1.6.7 2.2.5.7.8 1.5.4 2.3-.4.7-1.2.9-1.9 1.1-.8.2-1.5.6-1.8 1.4-.3.7 0 1.5.4 2.1"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M16.8 2.3c-1 .4-1.7 1.2-2.3 2-.5.7-1.1 1.3-2 1.5-.8.2-1.7 0-2.2.7-.6.7-.3 1.7.2 2.4.5.8 1.2 1.4 1.5 2.3.3.8.1 1.8-.6 2.3"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* South Island */}
      <path
        d="M12.1 15.3c-.8 1.1-1.6 2.1-2.5 3.1L7 21.1c-.8.8-1.7 1.6-2.2 2.6-.4.8-.5 1.8-.1 2.6.4.7 1.2 1 2 1 .9 0 1.7-.4 2.4-.9l2.4-1.8c1-.7 1.9-1.5 2.6-2.5.6-.8 1-1.8.8-2.8-.2-1.1-1.1-2.1-2-2.8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M5.4 27.2c-.7.5-1.4 1.1-1.7 1.9"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function SimpleApplicationIcon({ className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path
        d="M7 3.5h12l6 6V28.5H7V3.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M19 3.5v6h6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M11 14h10"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      <path
        d="M11 18.5h10"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      <path
        d="M11 23h6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
