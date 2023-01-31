import { ExperienceCreateNestedOneWithoutLocationsInput } from "../inputs/ExperienceCreateNestedOneWithoutLocationsInput";
import { TenantCreateNestedOneWithoutLocationsInput } from "../inputs/TenantCreateNestedOneWithoutLocationsInput";
export declare class LocationCreateInput {
    id?: string | undefined;
    description?: string | undefined;
    longitude?: number | undefined;
    latitude?: number | undefined;
    googleMapsUrl?: string | undefined;
    googlePlacesId?: string | undefined;
    type?: "PHYSICAL" | "POSTAL" | undefined;
    line1?: string | undefined;
    line2?: string | undefined;
    city?: string | undefined;
    district?: string | undefined;
    country?: string | undefined;
    code?: string | undefined;
    isDefault?: boolean | undefined;
    Experience?: ExperienceCreateNestedOneWithoutLocationsInput | undefined;
    Tenant?: TenantCreateNestedOneWithoutLocationsInput | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
