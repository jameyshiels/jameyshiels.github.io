/* ============================================================
   Exploring Digital: Google Analytics 4
   To turn analytics on, replace the placeholder below with the
   site's GA4 measurement ID (it starts with "G-"). That is the
   only change needed. While the placeholder is in place, nothing
   loads and no data is sent.
   ============================================================ */
var GA_MEASUREMENT_ID = "G-XXXXXXXXXX";

(function () {
  "use strict";
  var id = GA_MEASUREMENT_ID;
  if (!/^G-[A-Z0-9]+$/.test(id) || id === "G-XXXXXXXXXX") return;

  var s = document.createElement("script");
  s.async = true;
  s.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(id);
  document.head.appendChild(s);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { window.dataLayer.push(arguments); };
  window.gtag("js", new Date());
  window.gtag("config", id);
})();
