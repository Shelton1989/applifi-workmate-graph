import { Tenant } from "../models/Tenant";
export declare class Location {
    id: string;
    description?: string | null;
    longitude?: number | null;
    latitude?: number | null;
    googleMapsUrl?: string | null;
    googlePlacesId?: string | null;
    type?: "PHYSICAL" | "POSTAL" | null;
    line1?: string | null;
    line2?: string | null;
    city?: string | null;
    district?: string | null;
    country?: string | null;
    code?: string | null;
    isDefault: boolean;
    Tenant?: Tenant | null;
    tenantId?: string | null;
    createdAt: Date;
    updatedAt: Date;
}
