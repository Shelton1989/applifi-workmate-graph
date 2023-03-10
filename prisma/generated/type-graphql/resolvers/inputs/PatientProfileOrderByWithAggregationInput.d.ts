import { PatientProfileCountOrderByAggregateInput } from "../inputs/PatientProfileCountOrderByAggregateInput";
import { PatientProfileMaxOrderByAggregateInput } from "../inputs/PatientProfileMaxOrderByAggregateInput";
import { PatientProfileMinOrderByAggregateInput } from "../inputs/PatientProfileMinOrderByAggregateInput";
export declare class PatientProfileOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    identityNumber?: "asc" | "desc" | undefined;
    identityType?: "asc" | "desc" | undefined;
    bedNumber?: "asc" | "desc" | undefined;
    wardNumber?: "asc" | "desc" | undefined;
    dietaryRestrictions?: "asc" | "desc" | undefined;
    allowedMealTypes?: "asc" | "desc" | undefined;
    allowedMealKinds?: "asc" | "desc" | undefined;
    doctorSpecificDiets?: "asc" | "desc" | undefined;
    specialDiets?: "asc" | "desc" | undefined;
    userId?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    _count?: PatientProfileCountOrderByAggregateInput | undefined;
    _max?: PatientProfileMaxOrderByAggregateInput | undefined;
    _min?: PatientProfileMinOrderByAggregateInput | undefined;
}
