/* WalkThru Tours — motion layer. Lenis smooth scroll + GSAP reveals. */

gsap.registerPlugin(ScrollTrigger);

/* Smooth scroll (skip when reduced motion is on) */
const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
if (!reduced && window.Lenis) {
  const lenis = new Lenis({ lerp: 0.1 });
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((t) => lenis.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);
}

/* Nav state + progress hairline */
const nav = document.getElementById("nav");
const bar = document.querySelector(".progress");
addEventListener("scroll", () => {
  nav.classList.toggle("scrolled", scrollY > 40);
  const h = document.documentElement;
  bar.style.width = (scrollY / (h.scrollHeight - innerHeight)) * 100 + "%";
}, { passive: true });

/* Hero headline rises once fonts settle */
window.addEventListener("load", () => {
  gsap.to(".display .line span", {
    y: 0, duration: 1.1, ease: "power4.out", stagger: 0.12, delay: 0.15,
  });
});

/* Generic reveals */
document.querySelectorAll(".reveal").forEach((el) => {
  gsap.to(el, {
    opacity: 1, y: 0, duration: 0.9, ease: "power3.out",
    scrollTrigger: { trigger: el, start: "top 86%" },
  });
});

/* Slow push-in on the hero film */
gsap.to(".hero-film", {
  scale: 1, duration: 8, ease: "power1.out",
});

/* Chapter and pricing films: play only while on screen (saves battery, feels alive) */
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    const v = e.target;
    if (e.isIntersecting) { v.play().catch(() => {}); }
    else { v.pause(); }
  });
}, { threshold: 0.25 });
document.querySelectorAll("video[data-autoplay]").forEach((v) => io.observe(v));

/* Pause shelf sample videos when another starts */
const samples = document.querySelectorAll(".film video");
samples.forEach((v) => {
  v.addEventListener("play", () => {
    samples.forEach((o) => { if (o !== v) o.pause(); });
  });
});

/* Pricing CTAs: Stripe Payment Links go here (see PAYMENTS-SETUP.md).
   Until a link is pasted, the button falls back to a pre-filled email. */
const PAYMENT_LINKS = {
  "1-2 bedrooms": "",
  "3-4 bedrooms": "",
  "5+ bedrooms": "",
  "venue or estate": "",
};
document.querySelectorAll(".tier-cta").forEach((a) => {
  const tier = a.dataset.tier;
  const link = PAYMENT_LINKS[tier];
  if (link) {
    a.href = link;
  } else {
    a.href = "mailto:willhainley@walkthrutours.com?subject=" +
      encodeURIComponent("tour for my " + tier + " property") +
      "&body=" + encodeURIComponent(
        "Hi Will, I would like to reserve a walkthrough tour. Here is a link to my listing: ");
  }
});
