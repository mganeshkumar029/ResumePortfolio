export function scrollToSection(href: string) {
  const target = document.querySelector<HTMLElement>(href);
  if (!target) return;
  const top = target.getBoundingClientRect().top + window.scrollY;
  window.scrollTo({ top, behavior: "smooth" });
}
