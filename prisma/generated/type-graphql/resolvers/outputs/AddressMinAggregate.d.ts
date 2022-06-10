export declare class AddressMinAggregate {
    id: string | null;
    type: "BILLING" | "DELIVERY" | "PHYSICAL" | "POSTAL" | null;
    line1: string | null;
    line2: string | null;
    city: string | null;
    district: string | null;
    country: string | null;
    code: string | null;
    isDefault: boolean | null;
    userId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
}
