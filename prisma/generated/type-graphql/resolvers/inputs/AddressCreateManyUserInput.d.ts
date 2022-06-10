export declare class AddressCreateManyUserInput {
    id?: string | undefined;
    type: "BILLING" | "DELIVERY" | "PHYSICAL" | "POSTAL";
    line1: string;
    line2: string;
    city: string;
    district: string;
    country: string;
    code: string;
    isDefault?: boolean | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
