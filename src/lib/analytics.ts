/** First-party event names only. Never pass contact details or message text to GA4. */
export const GA_MEASUREMENT_ID = "G-M7DDB9HRY0";
export const ANALYTICS_OPT_OUT_KEY = "corelink_analytics_opt_out";
export const ANALYTICS_TEST_KEY = "corelink_test";

type EventName = "generate_lead" | "demo_request_click" | "phone_click" | "sms_click" | "email_click" | "demo_open";
type EventParameters = { form_id?: string; lead_source?: string; method?: string; page_path?: string; destination_path?: string };
type AnalyticsWindow = Window & {
  gtag?: (command: "event", name: EventName, params: EventParameters) => void;
  "ga-disable-G-M7DDB9HRY0"?: boolean;
};

export function analyticsDisabled(): boolean {
  if (typeof window === "undefined") return true;
  if ((window as AnalyticsWindow)["ga-disable-G-M7DDB9HRY0"]) return true;
  try {
    return localStorage.getItem(ANALYTICS_OPT_OUT_KEY) === "1" || localStorage.getItem(ANALYTICS_TEST_KEY) === "1";
  } catch { return false; }
}

export function trackEvent(name: EventName, params: EventParameters = {}): void {
  if (analyticsDisabled()) return;
  try {
    (window as AnalyticsWindow).gtag?.("event", name, { page_path: window.location.pathname, ...params });
  } catch { /* Analytics must never prevent contact or a successful form submission. */ }
}

export function installClickTracking(): () => void {
  const onClick = (event: MouseEvent) => {
    const element = event.target;
    if (!(element instanceof Element)) return;
    const anchor = element.closest<HTMLAnchorElement>("a[href]");
    if (!anchor) return;
    const href = anchor.getAttribute("href") || "";
    if (href.startsWith("tel:")) return trackEvent("phone_click", { method: "telephone_link" });
    if (href.startsWith("sms:")) return trackEvent("sms_click", { method: "sms_link" });
    if (href.startsWith("mailto:")) return trackEvent("email_click", { method: "email_link" });
    try {
      const url = new URL(href, window.location.origin);
      if (url.origin !== window.location.origin) return;
      if (url.pathname === "/contact") trackEvent("demo_request_click", { destination_path: "/contact" });
      if (url.pathname.startsWith("/demo/")) trackEvent("demo_open", { destination_path: url.pathname });
    } catch { /* Ignore malformed or non-web links. */ }
  };
  document.addEventListener("click", onClick);
  return () => document.removeEventListener("click", onClick);
}

// Runs before gtag loads, including on hard refreshes. Test mode persists only in this browser.
// ?corelink_test=1 excludes owner/QA activity; ?corelink_test=0 ends test mode.
// No second page_view implementation: preserve GA4's existing page/history measurement.
export const ANALYTICS_BOOTSTRAP = `(function(){
  var id='G-M7DDB9HRY0', disabled=false;
  var params=new URLSearchParams(window.location.search);
  try {
    if(params.get('corelink_test')==='1') localStorage.setItem('corelink_test','1');
    if(params.get('corelink_test')==='0') localStorage.removeItem('corelink_test');
    disabled=localStorage.getItem('corelink_test')==='1'||localStorage.getItem('corelink_analytics_opt_out')==='1';
  } catch(e) { disabled=params.get('corelink_test')==='1'; }
  disabled=disabled||!['corelinkdev.com','www.corelinkdev.com'].includes(window.location.hostname)||navigator.webdriver===true;
  window['ga-disable-'+id]=disabled;
  if(disabled) return;
  window.dataLayer=window.dataLayer||[];
  window.gtag=function(){window.dataLayer.push(arguments);};
  window.gtag('js',new Date());
  window.gtag('config',id);
  var script=document.createElement('script');script.async=true;
  script.src='https://www.googletagmanager.com/gtag/js?id='+id;
  document.head.appendChild(script);
})();`;
