import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumPUBLISH_STATUSFieldUpdateOperationsInput } from "../inputs/EnumPUBLISH_STATUSFieldUpdateOperationsInput";
import { MealUpdatedietaryRestrictionsInput } from "../inputs/MealUpdatedietaryRestrictionsInput";
import { MealUpdatedoctorSpecificDietsInput } from "../inputs/MealUpdatedoctorSpecificDietsInput";
import { MealUpdategalleryInput } from "../inputs/MealUpdategalleryInput";
import { MealUpdateitemIdsInput } from "../inputs/MealUpdateitemIdsInput";
import { MealUpdatelikedByIdsInput } from "../inputs/MealUpdatelikedByIdsInput";
import { MealUpdatemealKindsInput } from "../inputs/MealUpdatemealKindsInput";
import { MealUpdatemealTypesInput } from "../inputs/MealUpdatemealTypesInput";
import { MealUpdatespecialDietsInput } from "../inputs/MealUpdatespecialDietsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
export declare class MealUpdateManyMutationInput {
    productLink?: NullableStringFieldUpdateOperationsInput | undefined;
    title?: NullableStringFieldUpdateOperationsInput | undefined;
    description?: NullableStringFieldUpdateOperationsInput | undefined;
    dietaryRestrictions?: MealUpdatedietaryRestrictionsInput | undefined;
    mealTypes?: MealUpdatemealTypesInput | undefined;
    mealKinds?: MealUpdatemealKindsInput | undefined;
    doctorSpecificDiets?: MealUpdatedoctorSpecificDietsInput | undefined;
    specialDiets?: MealUpdatespecialDietsInput | undefined;
    itemIds?: MealUpdateitemIdsInput | undefined;
    photo?: NullableStringFieldUpdateOperationsInput | undefined;
    gallery?: MealUpdategalleryInput | undefined;
    publishStatus?: EnumPUBLISH_STATUSFieldUpdateOperationsInput | undefined;
    likedByIds?: MealUpdatelikedByIdsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
