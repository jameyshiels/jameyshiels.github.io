/* ============================================================
   Exploring Digital — shared site script
   Injects the header + footer on every page (single source of
   truth) and wires up interactions: mobile nav, case-study
   filter, and form handling.
   ============================================================ */
(function () {
  "use strict";

  var CONTACT_EMAIL = "jamey@exploringdigital.com";

  /* ---- small SVG icons ---- */
  var icons = {
    arrow: '<svg class="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
    close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.3c0-1.26-.02-2.9-1.77-2.9-1.77 0-2.04 1.38-2.04 2.8V21H9z"/></svg>',
    x: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.5 3h3l-7.1 8.1L22 21h-6.6l-4.3-5.6L6 21H3l7.6-8.7L2.5 3H9.2l3.9 5.1zM16.3 19h1.7L7.8 4.9H6z"/></svg>',
    chevron: '<svg class="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>',
    globe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18"/></svg>'
  };

  var NAV = [
    { label: "Home", href: "index.html", key: "home" },
    { label: "Services", href: "services.html", key: "services" },
    { label: "Who I help", children: [
      { label: "Small business", href: "small-business.html", key: "small-business" },
      { label: "Health tech", href: "health-tech.html", key: "health-tech" }
    ] },
    { label: "About", href: "about.html", key: "about" }
  ];

  function headerHTML(active) {
    function link(n) {
      return '<a href="' + n.href + '"' + (n.key === active ? ' class="active" aria-current="page"' : "") + '>' + n.label + "</a>";
    }
    var links = NAV.map(function (n) {
      if (!n.children) return link(n);
      var inGroup = n.children.some(function (c) { return c.key === active; });
      return (
        '<div class="nav-group">' +
          '<button type="button" class="nav-group-toggle' + (inGroup ? " active" : "") + '" aria-expanded="false" aria-haspopup="true">' +
            n.label + ' ' + icons.chevron +
          "</button>" +
          '<div class="nav-sub">' + n.children.map(link).join("") + "</div>" +
        "</div>"
      );
    }).join("");
    return (
      '<div class="container nav">' +
        '<a class="brand" href="index.html">Exploring Digital</a>' +
        '<nav class="nav-links" aria-label="Primary">' + links + "</nav>" +
        '<div class="nav-cta"><a class="btn btn-primary" href="contact.html">Book a growth call ' + icons.arrow + "</a></div>" +
        '<button class="nav-toggle" aria-label="Toggle menu" aria-expanded="false">' + icons.menu + "</button>" +
      "</div>"
    );
  }

  function footerHTML() {
    return (
      '<div class="container">' +
        '<div class="footer-top">' +
          '<div class="footer-brand">' +
            '<a class="brand" href="index.html">Exploring Digital</a>' +
            "<p>Fractional CMO and AI marketing engine for small businesses, nonprofits and health tech.</p>" +
            '<div class="socials">' +
              '<a href="#" aria-label="LinkedIn">' + icons.linkedin + "</a>" +
              '<a href="#" aria-label="X">' + icons.x + "</a>" +
              '<a href="#" aria-label="Website">' + icons.globe + "</a>" +
            "</div>" +
          "</div>" +
          '<div class="footer-col"><h4>Pages</h4><ul>' +
            '<li><a href="index.html">Home</a></li>' +
            '<li><a href="services.html">Services</a></li>' +
            '<li><a href="about.html">About</a></li>' +
            '<li><a href="contact.html">Book a call</a></li>' +
          "</ul></div>" +
          '<div class="footer-col"><h4>Who I help</h4><ul>' +
            '<li><a href="small-business.html">Small business</a></li>' +
            '<li><a href="health-tech.html">Health tech</a></li>' +
          "</ul></div>" +
          '<div class="footer-col"><h4>Ways to work together</h4><ul>' +
            '<li><a href="services.html#assess">Growth Assessment</a></li>' +
            '<li><a href="services.html#build">Growth Engine Build</a></li>' +
            '<li><a href="services.html#lead">Fractional CMO</a></li>' +
            '<li><a href="services.html#workshop">AI adoption workshop</a></li>' +
          "</ul></div>" +
          '<div class="footer-col"><h4>Office</h4>' +
            '<address>Exploring Digital LLC<br>Based in Milwaukee, Wisconsin<br>Working with clients across the US</address>' +
            '<p style="margin-top:14px"><a class="accent-link" href="mailto:' + CONTACT_EMAIL + '">' + CONTACT_EMAIL + "</a></p>" +
          "</div>" +
        "</div>" +
        '<div class="footer-bottom">' +
          "<span>© " + new Date().getFullYear() + " Exploring Digital. All rights reserved. Strategy and the engine to run it.</span>" +
          "<span>This site uses Google Analytics to understand how visitors use it.</span>" +
          '<span><a href="#">Privacy Policy</a> · <a href="#">Terms of Engagement</a></span>' +
        "</div>" +
      "</div>"
    );
  }

  function closeGroups(header) {
    header.querySelectorAll(".nav-group.open").forEach(function (g) {
      g.classList.remove("open");
      var b = g.querySelector(".nav-group-toggle");
      if (b) b.setAttribute("aria-expanded", "false");
    });
  }

  function mountChrome() {
    var header = document.querySelector("[data-site-header]");
    var footer = document.querySelector("[data-site-footer]");
    var active = document.body.getAttribute("data-page") || "";
    if (header) { header.className = "site-header"; header.innerHTML = headerHTML(active); }
    if (footer) { footer.className = "site-footer"; footer.innerHTML = footerHTML(); }

    // Mobile nav toggle
    var toggle = header && header.querySelector(".nav-toggle");
    if (toggle) {
      toggle.addEventListener("click", function () {
        var open = header.classList.toggle("open");
        toggle.setAttribute("aria-expanded", open ? "true" : "false");
        toggle.innerHTML = open ? icons.close : icons.menu;
      });
      header.querySelectorAll(".nav-group-toggle").forEach(function (btn) {
        btn.addEventListener("click", function (e) {
          e.stopPropagation();
          var group = btn.parentNode;
          var open = group.classList.toggle("open");
          btn.setAttribute("aria-expanded", open ? "true" : "false");
        });
      });
      document.addEventListener("click", function () { closeGroups(header); });
      document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeGroups(header); });
      header.querySelectorAll(".nav-links a").forEach(function (a) {
        a.addEventListener("click", function () {
          header.classList.remove("open");
          toggle.setAttribute("aria-expanded", "false");
          toggle.innerHTML = icons.menu;
        });
      });
    }
  }

  /* ---- Case-study category filter ---- */
  function initFilter() {
    var chips = document.querySelectorAll("[data-filter]");
    if (!chips.length) return;
    var items = document.querySelectorAll("[data-category]");
    chips.forEach(function (chip) {
      chip.addEventListener("click", function () {
        chips.forEach(function (c) { c.classList.remove("active"); });
        chip.classList.add("active");
        var f = chip.getAttribute("data-filter");
        items.forEach(function (it) {
          var show = f === "all" || it.getAttribute("data-category") === f;
          it.style.display = show ? "" : "none";
        });
      });
    });
  }

  /* ---- Forms: open a prefilled email (no backend needed) ---- */
  function initForms() {
    var contact = document.querySelector("[data-contact-form]");
    if (contact) {
      contact.addEventListener("submit", function (e) {
        e.preventDefault();
        var d = new FormData(contact);
        var body =
          "Name: " + (d.get("name") || "") + "\n" +
          "Email: " + (d.get("email") || "") + "\n" +
          "Company: " + (d.get("company") || "") + "\n" +
          "Company size: " + (d.get("size") || "") + "\n\n" +
          "Growth goal I can't hit yet:\n" + (d.get("message") || "");
        window.location.href =
          "mailto:" + CONTACT_EMAIL +
          "?subject=" + encodeURIComponent("Growth call request") +
          "&body=" + encodeURIComponent(body);
      });
    }
    var news = document.querySelector("[data-newsletter-form]");
    if (news) {
      news.addEventListener("submit", function (e) {
        e.preventDefault();
        var email = new FormData(news).get("email") || "";
        window.location.href =
          "mailto:" + CONTACT_EMAIL +
          "?subject=" + encodeURIComponent("Newsletter signup") +
          "&body=" + encodeURIComponent("Please subscribe me: " + email);
      });
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    mountChrome();
    initFilter();
    initForms();
  });
})();
