import { ExperienceCreateNestedOneWithoutLocationsInput } from "../inputs/ExperienceCreateNestedOneWithoutLocationsInput";
export declare class LocationCreateWithoutTenantInput {
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
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
