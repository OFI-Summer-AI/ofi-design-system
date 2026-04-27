import { createIcon } from "./create-icon"

export type { IconProps } from "./create-icon"
export { createIcon } from "./create-icon"

export const Home = createIcon(
  "Home",
  <>
    <path d="M3.5 10.5 12 3l8.5 7.5" />
    <path d="M5 9.5V20a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1V9.5" />
  </>,
)

export const SqlEditor = createIcon(
  "SqlEditor",
  <>
    <ellipse cx="12" cy="5" rx="7" ry="2.5" />
    <path d="M5 5v6c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5V5" />
    <path d="M5 11v6c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-6" />
  </>,
)

export const TableEditor = createIcon(
  "TableEditor",
  <>
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <path d="M3 10h18" />
    <path d="M3 15h18" />
    <path d="M10 4v16" />
  </>,
)

export const Database = createIcon(
  "Database",
  <>
    <ellipse cx="12" cy="5" rx="8" ry="3" />
    <path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
    <path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
  </>,
)

export const Auth = createIcon(
  "Auth",
  <>
    <path d="M12 2a4 4 0 0 0-4 4v3H7a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-1V6a4 4 0 0 0-4-4Z" />
    <path d="M12 14v3" />
  </>,
)

export const EdgeFunctions = createIcon(
  "EdgeFunctions",
  <>
    <path d="M13 2 4 14h7l-1 8 9-12h-7Z" />
  </>,
)

export const Storage = createIcon(
  "Storage",
  <>
    <path d="M3 7.5 12 3l9 4.5-9 4.5-9-4.5Z" />
    <path d="M3 12 12 16.5 21 12" />
    <path d="M3 16.5 12 21 21 16.5" />
  </>,
)

export const Reports = createIcon(
  "Reports",
  <>
    <rect x="4" y="3" width="16" height="18" rx="2" />
    <path d="M8 8h8" />
    <path d="M8 12h5" />
    <path d="M8 16h8" />
  </>,
)

export const BucketAdd = createIcon(
  "BucketAdd",
  <>
    <path d="M6 7c0-2.8 2.2-5 5-5h2c2.8 0 5 2.2 5 5" />
    <path d="M4.5 11h15" />
    <path d="m6 11 .8 9c.1 1.1 1.1 2 2.2 2H12" />
    <path d="M17.5 15v6" />
    <path d="M14.5 18h6" />
  </>,
)

export const InsertCode = createIcon(
  "InsertCode",
  <>
    <path d="m9 8-4 4 4 4" />
    <path d="m15 8 4 4-4 4" />
    <path d="M12 3v18" strokeDasharray="2 2" />
  </>,
)

export const ReplaceCode = createIcon(
  "ReplaceCode",
  <>
    <path d="M4 7h11l-3-3" />
    <path d="M4 7l3 3" />
    <path d="M20 17H9l3 3" />
    <path d="M20 17l-3-3" />
  </>,
)
