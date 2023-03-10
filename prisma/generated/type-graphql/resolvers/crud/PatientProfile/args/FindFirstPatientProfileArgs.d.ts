import { PatientProfileOrderByWithRelationInput } from "../../../inputs/PatientProfileOrderByWithRelationInput";
import { PatientProfileWhereInput } from "../../../inputs/PatientProfileWhereInput";
import { PatientProfileWhereUniqueInput } from "../../../inputs/PatientProfileWhereUniqueInput";
export declare class FindFirstPatientProfileArgs {
    where?: PatientProfileWhereInput | undefined;
    orderBy?: PatientProfileOrderByWithRelationInput[] | undefined;
    cursor?: PatientProfileWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "identityNumber" | "identityType" | "bedNumber" | "wardNumber" | "dietaryRestrictions" | "allowedMealTypes" | "allowedMealKinds" | "doctorSpecificDiets" | "specialDiets" | "userId" | "createdAt" | "updatedAt"> | undefined;
}
