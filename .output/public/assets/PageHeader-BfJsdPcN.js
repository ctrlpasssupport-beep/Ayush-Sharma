import { t as e } from "./jsx-runtime-BkSabwWG.js";
var t = e();
function n({ eyebrow: e, title: n, children: r }) {
  return (0, t.jsxs)(`section`, {
    className: `mx-auto max-w-6xl px-4 pb-8 pt-14 fade-up`,
    children: [
      (0, t.jsx)(`p`, {
        className: `text-sm font-bold uppercase tracking-[0.2em] text-primary`,
        children: e,
      }),
      (0, t.jsx)(`h1`, {
        className: `mt-3 max-w-3xl text-4xl font-extrabold leading-[1.05] md:text-6xl`,
        children: n,
      }),
      r &&
        (0, t.jsx)(`div`, {
          className: `mt-4 max-w-2xl text-lg text-muted-foreground`,
          children: r,
        }),
    ],
  });
}
export { n as t };
