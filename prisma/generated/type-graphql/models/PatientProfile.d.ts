import { User } from "../models/User";
export declare class PatientProfile {
    id: string;
    identityNumber?: string | null;
    identityType?: string | null;
    bedNumber?: string | null;
    wardNumber?: string | null;
    allServicesOpen?: boolean | null;
    dietaryRestrictions: Array<"NONE" | "VEGETARIAN" | "VEGAN" | "GLUTEN_FREE" | "DAIRY_FREE" | "NUT_FREE" | "EGG_FREE" | "PORK_FREE" | "HALAL" | "KOSHER" | "PALEO" | "OTHER">;
    allowedMealTypes: Array<"BREAKFAST" | "LUNCH" | "DINNER" | "SNACK">;
    allowedMealKinds: Array<"FLUID" | "LIGHT" | "FULL">;
    doctorSpecificDiets: Array<"NONE" | "VEGETARIAN" | "VEGAN" | "GLUTEN_FREE" | "DAIRY_FREE" | "NUT_FREE" | "EGG_FREE" | "PORK_FREE" | "HALAL" | "KOSHER" | "PALEO" | "OTHER">;
    specialDiets: Array<"NONE" | "MIXED_FLUID" | "CLEAR_FLUID" | "PUREED">;
    User?: User | null;
    userId?: string | null;
    createdAt: Date;
    updatedAt: Date;
}
