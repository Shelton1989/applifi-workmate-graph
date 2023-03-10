import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { PatientProfileUpdateallowedMealKindsInput } from "../inputs/PatientProfileUpdateallowedMealKindsInput";
import { PatientProfileUpdateallowedMealTypesInput } from "../inputs/PatientProfileUpdateallowedMealTypesInput";
import { PatientProfileUpdatedietaryRestrictionsInput } from "../inputs/PatientProfileUpdatedietaryRestrictionsInput";
import { PatientProfileUpdatedoctorSpecificDietsInput } from "../inputs/PatientProfileUpdatedoctorSpecificDietsInput";
import { PatientProfileUpdatespecialDietsInput } from "../inputs/PatientProfileUpdatespecialDietsInput";
import { UserUpdateOneWithoutPatientProfileInput } from "../inputs/UserUpdateOneWithoutPatientProfileInput";
export declare class PatientProfileUpdateInput {
    identityNumber?: NullableStringFieldUpdateOperationsInput | undefined;
    identityType?: NullableStringFieldUpdateOperationsInput | undefined;
    bedNumber?: NullableStringFieldUpdateOperationsInput | undefined;
    wardNumber?: NullableStringFieldUpdateOperationsInput | undefined;
    dietaryRestrictions?: PatientProfileUpdatedietaryRestrictionsInput | undefined;
    allowedMealTypes?: PatientProfileUpdateallowedMealTypesInput | undefined;
    allowedMealKinds?: PatientProfileUpdateallowedMealKindsInput | undefined;
    doctorSpecificDiets?: PatientProfileUpdatedoctorSpecificDietsInput | undefined;
    specialDiets?: PatientProfileUpdatespecialDietsInput | undefined;
    User?: UserUpdateOneWithoutPatientProfileInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
