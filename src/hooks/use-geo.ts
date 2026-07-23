import { useEffect, useState } from "react";

export type GeoState = {
  city: string | null;
  region: string | null;
  isLocal: boolean;
  loaded: boolean;
};

// Geo-targeting removed. Kept as a stable no-op so any lingering imports
// continue to compile while returning the nationwide default.
export function useGeo(): GeoState {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const _unused = useState(null);
  useEffect(() => {}, []);
  return { city: null, region: null, isLocal: false, loaded: true };
}