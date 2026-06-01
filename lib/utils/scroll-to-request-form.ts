import type { MouseEvent } from "react";

export function scrollToRequestForm(
  e: MouseEvent<HTMLAnchorElement>,
  targetId = "request-a-service"
) {
  const el = document.getElementById(targetId);
  if (!el) return;
  e.preventDefault();
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}
