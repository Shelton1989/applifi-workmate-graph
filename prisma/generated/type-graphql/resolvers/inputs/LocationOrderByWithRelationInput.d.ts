import { ExperienceOrderByWithRelationInput } from "../inputs/ExperienceOrderByWithRelationInput";
import { TenantOrderByWithRelationInput } from "../inputs/TenantOrderByWithRelationInput";
export declare class LocationOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    longitude?: "asc" | "desc" | undefined;
    latitude?: "asc" | "desc" | undefined;
    googleMapsUrl?: "asc" | "desc" | undefined;
    googlePlacesId?: "asc" | "desc" | undefined;
    type?: "asc" | "desc" | undefined;
    line1?: "asc" | "desc" | undefined;
    line2?: "asc" | "desc" | undefined;
    city?: "asc" | "desc" | undefined;
    district?: "asc" | "desc" | undefined;
    country?: "asc" | "desc" | undefined;
    code?: "asc" | "desc" | undefined;
    isDefault?: "asc" | "desc" | undefined;
    Experience?: ExperienceOrderByWithRelationInput | undefined;
    experienceId?: "asc" | "desc" | undefined;
    Tenant?: TenantOrderByWithRelationInput | undefined;
    tenantId?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
}
