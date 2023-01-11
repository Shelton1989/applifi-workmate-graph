import { Experience } from "../models/Experience";
import { Tenant } from "../models/Tenant";
export declare class Location {
    id: string;
    longitude: number;
    latitude: number;
    googleMapsUrl: string;
    googlePlacesId: string;
    type: "PHYSICAL" | "POSTAL";
    line1: string;
    line2: string;
    city: string;
    district: string;
    country: string;
    code: string;
    isDefault: boolean;
    Experience?: Experience | null;
    experienceId?: string | null;
    Tenant?: Tenant | null;
    tenantId?: string | null;
    createdAt: Date;
    updatedAt: Date;
}
