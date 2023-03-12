import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
export declare class PatientProfileOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    identityNumber?: "asc" | "desc" | undefined;
    identityType?: "asc" | "desc" | undefined;
    bedNumber?: "asc" | "desc" | undefined;
    wardNumber?: "asc" | "desc" | undefined;
    allServicesOpen?: "asc" | "desc" | undefined;
    dietaryRestrictions?: "asc" | "desc" | undefined;
    allowedMealTypes?: "asc" | "desc" | undefined;
    allowedMealKinds?: "asc" | "desc" | undefined;
    doctorSpecificDiets?: "asc" | "desc" | undefined;
    specialDiets?: "asc" | "desc" | undefined;
    User?: UserOrderByWithRelationInput | undefined;
    userId?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
}
