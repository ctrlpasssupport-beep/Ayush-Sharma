import { t as site } from "./site--jYoShYP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/whatsapp-BPz_t6n4.js
var subtotal = (lines) => lines.reduce((s, l) => s + l.price * l.qty, 0);
var mapsPinLink = (lat, lng) =>
  `https://maps.google.com/?q=${lat.toFixed(6)},${lng.toFixed(6)}`;
function buildOrderMessage(lines, location, address) {
  const rows = lines.map(
    (l) =>
      `• ${l.qty} x ${l.name}${l.size ? ` (${l.size})` : ""} — ₹${l.price * l.qty}`,
  );
  const total = subtotal(lines);
  const delivery =
    total >= site.delivery.minOrder
      ? "Eligible for free home delivery."
      : `Add ₹${site.delivery.minOrder - total} more for free delivery.`;
  const addr = address?.trim();
  return [
    `Hi ${site.name}! I'd like to order:`,
    ...rows,
    `Subtotal: ₹${total}`,
    delivery,
    ...(addr ? [`🏠 Delivery address: ${addr}`] : []),
    ...(location ? [`📍 Delivery location: ${location}`] : []),
  ].join("\n");
}
var waLink = (text) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
//#endregion
export { waLink as i, mapsPinLink as n, subtotal as r, buildOrderMessage as t };
