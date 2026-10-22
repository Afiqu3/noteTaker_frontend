"use client";

import QueryProvider from "./query.provider";

export default function Providers({ children }) {
  return <QueryProvider>{children}</QueryProvider>;
}
