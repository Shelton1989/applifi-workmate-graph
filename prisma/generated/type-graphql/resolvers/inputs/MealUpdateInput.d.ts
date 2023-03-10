import { AggregateRatingUpdateOneWithoutMealInput } from "../inputs/AggregateRatingUpdateOneWithoutMealInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumPUBLISH_STATUSFieldUpdateOperationsInput } from "../inputs/EnumPUBLISH_STATUSFieldUpdateOperationsInput";
import { FeaturesUpdateManyWithoutMealInput } from "../inputs/FeaturesUpdateManyWithoutMealInput";
import { MealAvailabilityUpdateManyWithoutMealInput } from "../inputs/MealAvailabilityUpdateManyWithoutMealInput";
import { MealItemUpdateManyWithoutMealsInput } from "../inputs/MealItemUpdateManyWithoutMealsInput";
import { MealUpdateallowedMealKindsInput } from "../inputs/MealUpdateallowedMealKindsInput";
import { MealUpdateallowedMealTypesInput } from "../inputs/MealUpdateallowedMealTypesInput";
import { MealUpdatedietaryRestrictionsInput } from "../inputs/MealUpdatedietaryRestrictionsInput";
import { MealUpdatedoctorSpecificDietsInput } from "../inputs/MealUpdatedoctorSpecificDietsInput";
import { MealUpdategalleryInput } from "../inputs/MealUpdategalleryInput";
import { MealUpdateitemIdsInput } from "../inputs/MealUpdateitemIdsInput";
import { MealUpdatelikedByIdsInput } from "../inputs/MealUpdatelikedByIdsInput";
import { MealUpdatespecialDietsInput } from "../inputs/MealUpdatespecialDietsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { OrderUpdateManyWithoutMealInput } from "../inputs/OrderUpdateManyWithoutMealInput";
import { PostUpdateManyWithoutMealInput } from "../inputs/PostUpdateManyWithoutMealInput";
import { ReactionUpdateManyWithoutMealInput } from "../inputs/ReactionUpdateManyWithoutMealInput";
import { TenantUpdateOneRequiredWithoutMealsInput } from "../inputs/TenantUpdateOneRequiredWithoutMealsInput";
import { UserUpdateManyWithoutLikedMealsInput } from "../inputs/UserUpdateManyWithoutLikedMealsInput";
export declare class MealUpdateInput {
    Tenant?: TenantUpdateOneRequiredWithoutMealsInput | undefined;
    productLink?: NullableStringFieldUpdateOperationsInput | undefined;
    title?: NullableStringFieldUpdateOperationsInput | undefined;
    description?: NullableStringFieldUpdateOperationsInput | undefined;
    dietaryRestrictions?: MealUpdatedietaryRestrictionsInput | undefined;
    allowedMealTypes?: MealUpdateallowedMealTypesInput | undefined;
    allowedMealKinds?: MealUpdateallowedMealKindsInput | undefined;
    doctorSpecificDiets?: MealUpdatedoctorSpecificDietsInput | undefined;
    specialDiets?: MealUpdatespecialDietsInput | undefined;
    Items?: MealItemUpdateManyWithoutMealsInput | undefined;
    itemIds?: MealUpdateitemIdsInput | undefined;
    Availability?: MealAvailabilityUpdateManyWithoutMealInput | undefined;
    Orders?: OrderUpdateManyWithoutMealInput | undefined;
    photo?: NullableStringFieldUpdateOperationsInput | undefined;
    gallery?: MealUpdategalleryInput | undefined;
    AggregateRating?: AggregateRatingUpdateOneWithoutMealInput | undefined;
    publishStatus?: EnumPUBLISH_STATUSFieldUpdateOperationsInput | undefined;
    LikedBy?: UserUpdateManyWithoutLikedMealsInput | undefined;
    likedByIds?: MealUpdatelikedByIdsInput | undefined;
    Posts?: PostUpdateManyWithoutMealInput | undefined;
    Features?: FeaturesUpdateManyWithoutMealInput | undefined;
    Reactions?: ReactionUpdateManyWithoutMealInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
