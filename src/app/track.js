(function () {
  if (!sessionStorage.getItem("sessionStart")) {
    sessionStorage.setItem("sessionStart", new Date().toISOString());
  }

  function sendAnalytics(eventType) {
    const sessionStart = new Date(sessionStorage.getItem("sessionStart"));
    const sessionDuration = Math.floor((new Date() - sessionStart) / 1000);

    const analyticsData = {
      url: window.location.href,
      referrer: document.referrer || "Direct",
      userAgent: navigator.userAgent,
      screenResolution: `${window.screen.width}x${window.screen.height}`,
      sessionStart: sessionStart.toISOString(),
      sessionDuration,
      timestamp: new Date().toISOString(),
      eventType,
    };

    fetch("http://localhost:3000/track", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(analyticsData),
    })
      .then(() => console.log("WebPulse Tracking Data Sent:", analyticsData))
      .catch((err) => console.error("WebPulse Tracking Error:", err));
  }

  sendAnalytics("pageLoad");

  window.addEventListener("beforeunload", () => sendAnalytics("sessionEnd"));
})();
