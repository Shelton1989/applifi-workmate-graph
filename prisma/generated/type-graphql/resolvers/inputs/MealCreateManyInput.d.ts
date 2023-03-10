import { MealCreateallowedMealKindsInput } from "../inputs/MealCreateallowedMealKindsInput";
import { MealCreateallowedMealTypesInput } from "../inputs/MealCreateallowedMealTypesInput";
import { MealCreatedietaryRestrictionsInput } from "../inputs/MealCreatedietaryRestrictionsInput";
import { MealCreatedoctorSpecificDietsInput } from "../inputs/MealCreatedoctorSpecificDietsInput";
import { MealCreategalleryInput } from "../inputs/MealCreategalleryInput";
import { MealCreateitemIdsInput } from "../inputs/MealCreateitemIdsInput";
import { MealCreatelikedByIdsInput } from "../inputs/MealCreatelikedByIdsInput";
import { MealCreatespecialDietsInput } from "../inputs/MealCreatespecialDietsInput";
export declare class MealCreateManyInput {
    id?: string | undefined;
    tenantId: string;
    productLink?: string | undefined;
    title?: string | undefined;
    description?: string | undefined;
    dietaryRestrictions?: MealCreatedietaryRestrictionsInput | undefined;
    allowedMealTypes?: MealCreateallowedMealTypesInput | undefined;
    allowedMealKinds?: MealCreateallowedMealKindsInput | undefined;
    doctorSpecificDiets?: MealCreatedoctorSpecificDietsInput | undefined;
    specialDiets?: MealCreatespecialDietsInput | undefined;
    itemIds?: MealCreateitemIdsInput | undefined;
    photo?: string | undefined;
    gallery?: MealCreategalleryInput | undefined;
    publishStatus?: "DRAFT" | "PUBLISHED" | "UNPUBLISHED" | "UNDER_REVIEW" | "PENDING_APPROVAL" | "IN_REVIEW" | "APPROVED" | "NO_ACTION_TAKEN" | "REJECTED_WITH_REASON" | "DECLINED" | "BANNED" | "SOFT_BANNED" | undefined;
    likedByIds?: MealCreatelikedByIdsInput | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
