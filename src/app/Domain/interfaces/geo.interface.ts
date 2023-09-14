export interface GeoInfo {
  ip: string;
  location: Location;
  as: As;
  isp: string;
  proxy: {
    proxy: boolean;
    vpn: boolean;
    tor: boolean;
  };
}

interface As {
  asn: number;
  name: string;
  route: string;
  domain: string;
  type: string;
}

interface Location {
  country: string;
  region: string;
  city: string;
  lat: number;
  lng: number;
  postalCode: string;
  timezone: string;
  geonameId: number;
}
