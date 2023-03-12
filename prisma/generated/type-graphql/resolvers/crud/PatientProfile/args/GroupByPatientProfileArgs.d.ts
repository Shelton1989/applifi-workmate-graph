import { PatientProfileOrderByWithAggregationInput } from "../../../inputs/PatientProfileOrderByWithAggregationInput";
import { PatientProfileScalarWhereWithAggregatesInput } from "../../../inputs/PatientProfileScalarWhereWithAggregatesInput";
import { PatientProfileWhereInput } from "../../../inputs/PatientProfileWhereInput";
export declare class GroupByPatientProfileArgs {
    where?: PatientProfileWhereInput | undefined;
    orderBy?: PatientProfileOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "identityNumber" | "identityType" | "bedNumber" | "wardNumber" | "allServicesOpen" | "dietaryRestrictions" | "allowedMealTypes" | "allowedMealKinds" | "doctorSpecificDiets" | "specialDiets" | "userId" | "createdAt" | "updatedAt">;
    having?: PatientProfileScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
