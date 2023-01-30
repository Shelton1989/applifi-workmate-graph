import { ExperienceCreateNestedOneWithoutLocationsInput } from "../inputs/ExperienceCreateNestedOneWithoutLocationsInput";
import { TenantCreateNestedOneWithoutLocationsInput } from "../inputs/TenantCreateNestedOneWithoutLocationsInput";
export declare class LocationCreateInput {
    id?: string | undefined;
    description: string;
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
    isDefault?: boolean | undefined;
    Experience?: ExperienceCreateNestedOneWithoutLocationsInput | undefined;
    Tenant?: TenantCreateNestedOneWithoutLocationsInput | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
