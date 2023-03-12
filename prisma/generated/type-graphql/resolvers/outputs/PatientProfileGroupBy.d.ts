import { PatientProfileCountAggregate } from "../outputs/PatientProfileCountAggregate";
import { PatientProfileMaxAggregate } from "../outputs/PatientProfileMaxAggregate";
import { PatientProfileMinAggregate } from "../outputs/PatientProfileMinAggregate";
export declare class PatientProfileGroupBy {
    id: string;
    identityNumber: string | null;
    identityType: string | null;
    bedNumber: string | null;
    wardNumber: string | null;
    allServicesOpen: boolean | null;
    dietaryRestrictions: Array<"NONE" | "VEGETARIAN" | "VEGAN" | "GLUTEN_FREE" | "DAIRY_FREE" | "NUT_FREE" | "EGG_FREE" | "PORK_FREE" | "HALAL" | "KOSHER" | "PALEO" | "OTHER"> | null;
    allowedMealTypes: Array<"BREAKFAST" | "LUNCH" | "DINNER" | "SNACK"> | null;
    allowedMealKinds: Array<"FLUID" | "LIGHT" | "FULL"> | null;
    doctorSpecificDiets: Array<"NONE" | "VEGETARIAN" | "VEGAN" | "GLUTEN_FREE" | "DAIRY_FREE" | "NUT_FREE" | "EGG_FREE" | "PORK_FREE" | "HALAL" | "KOSHER" | "PALEO" | "OTHER"> | null;
    specialDiets: Array<"MIXED_FLUID" | "CLEAR_FLUID" | "PUREED"> | null;
    userId: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: PatientProfileCountAggregate | null;
    _min: PatientProfileMinAggregate | null;
    _max: PatientProfileMaxAggregate | null;
}
