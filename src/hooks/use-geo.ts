import { useEffect, useState } from "react";

export type GeoState = {
  city: string | null;
  region: string | null;
  isLocal: boolean;
  loaded: boolean;
};

const LOCAL_CITIES = new Set(
  [
    "chicago",
    "elgin",
    "bartlett",
    "schaumburg",
    "naperville",
    "aurora",
    "evanston",
    "oak park",
    "wheaton",
    "des plaines",
    "arlington heights",
    "hoffman estates",
    "palatine",
    "cicero",
    "berwyn",
    "downers grove",
    "orland park",
    "tinley park",
    "skokie",
    "joliet",
    "waukegan",
  ].map((c) => c.toLowerCase()),
);

export function useGeo(): GeoState {
  const [state, setState] = useState<GeoState>({
    city: null,
    region: null,
    isLocal: false,
    loaded: false,
  });

  useEffect(() => {
    let cancelled = false;
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 2500);

    fetch("https://ipapi.co/json/", { signal: controller.signal })
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (cancelled || !data) {
          setState((s) => ({ ...s, loaded: true }));
          return;
        }
        const city: string | null = data.city ?? null;
        const region: string | null = data.region ?? null;
        const isLocal =
          (region?.toLowerCase() === "illinois" ||
            (city ? LOCAL_CITIES.has(city.toLowerCase()) : false)) ?? false;
        setState({ city, region, isLocal, loaded: true });
      })
      .catch(() => {
        if (!cancelled) setState((s) => ({ ...s, loaded: true }));
      })
      .finally(() => clearTimeout(timeout));

    return () => {
      cancelled = true;
      controller.abort();
      clearTimeout(timeout);
    };
  }, []);

  return state;
}