import { PatientProfileCreateallowedMealKindsInput } from "../inputs/PatientProfileCreateallowedMealKindsInput";
import { PatientProfileCreateallowedMealTypesInput } from "../inputs/PatientProfileCreateallowedMealTypesInput";
import { PatientProfileCreatedietaryRestrictionsInput } from "../inputs/PatientProfileCreatedietaryRestrictionsInput";
import { PatientProfileCreatedoctorSpecificDietsInput } from "../inputs/PatientProfileCreatedoctorSpecificDietsInput";
import { PatientProfileCreatespecialDietsInput } from "../inputs/PatientProfileCreatespecialDietsInput";
export declare class PatientProfileCreateWithoutUserInput {
    id?: string | undefined;
    identityNumber?: string | undefined;
    identityType?: string | undefined;
    bedNumber?: string | undefined;
    wardNumber?: string | undefined;
    dietaryRestrictions?: PatientProfileCreatedietaryRestrictionsInput | undefined;
    allowedMealTypes?: PatientProfileCreateallowedMealTypesInput | undefined;
    allowedMealKinds?: PatientProfileCreateallowedMealKindsInput | undefined;
    doctorSpecificDiets?: PatientProfileCreatedoctorSpecificDietsInput | undefined;
    specialDiets?: PatientProfileCreatespecialDietsInput | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
