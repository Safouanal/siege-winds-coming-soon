(() => {
  "use strict";

  const pageUrl = new URL(window.location.href);
  const source = pageUrl.searchParams.get("utm_source");
  if (source !== "ig" && source !== "instagram") return;

  const campaign = new URLSearchParams({
    utm_source: "ig",
    utm_medium: "social",
    utm_campaign: "ig_202610_bio",
    utm_content: "link_in_bio"
  });
  const appleStore = "https://apps.apple.com/app/siege-winds/id6785037486";
  const googlePlay = "https://play.google.com/store/apps/details?id=com.siegewinds.game";

  document.querySelectorAll("a[href]").forEach((link) => {
    const destination = new URL(link.getAttribute("href"), pageUrl);

    if (destination.href.startsWith(appleStore)) {
      destination.searchParams.set("pt", "128923786");
      destination.searchParams.set("ct", "ig_202610_bio");
      destination.searchParams.set("mt", "8");
    } else if (destination.href.startsWith(googlePlay)) {
      destination.searchParams.set("referrer", campaign.toString());
    } else if (link.matches(".language-nav a, .brand-lockup")) {
      campaign.forEach((value, key) => destination.searchParams.set(key, value));
    } else {
      return;
    }

    link.href = destination.href;
  });
})();
