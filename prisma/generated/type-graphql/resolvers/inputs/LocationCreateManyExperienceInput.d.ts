export declare class LocationCreateManyExperienceInput {
    id?: string | undefined;
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
    tenantId?: string | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
