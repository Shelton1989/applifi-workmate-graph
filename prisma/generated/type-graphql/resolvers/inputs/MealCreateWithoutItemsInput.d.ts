import { AggregateRatingCreateNestedOneWithoutMealInput } from "../inputs/AggregateRatingCreateNestedOneWithoutMealInput";
import { FeaturesCreateNestedManyWithoutMealInput } from "../inputs/FeaturesCreateNestedManyWithoutMealInput";
import { MealAvailabilityCreateNestedManyWithoutMealInput } from "../inputs/MealAvailabilityCreateNestedManyWithoutMealInput";
import { MealCreateallowedMealKindsInput } from "../inputs/MealCreateallowedMealKindsInput";
import { MealCreateallowedMealTypesInput } from "../inputs/MealCreateallowedMealTypesInput";
import { MealCreatedietaryRestrictionsInput } from "../inputs/MealCreatedietaryRestrictionsInput";
import { MealCreatedoctorSpecificDietsInput } from "../inputs/MealCreatedoctorSpecificDietsInput";
import { MealCreategalleryInput } from "../inputs/MealCreategalleryInput";
import { MealCreateitemIdsInput } from "../inputs/MealCreateitemIdsInput";
import { MealCreatelikedByIdsInput } from "../inputs/MealCreatelikedByIdsInput";
import { MealCreatespecialDietsInput } from "../inputs/MealCreatespecialDietsInput";
import { OrderCreateNestedManyWithoutMealInput } from "../inputs/OrderCreateNestedManyWithoutMealInput";
import { PostCreateNestedManyWithoutMealInput } from "../inputs/PostCreateNestedManyWithoutMealInput";
import { ReactionCreateNestedManyWithoutMealInput } from "../inputs/ReactionCreateNestedManyWithoutMealInput";
import { TenantCreateNestedOneWithoutMealsInput } from "../inputs/TenantCreateNestedOneWithoutMealsInput";
import { UserCreateNestedManyWithoutLikedMealsInput } from "../inputs/UserCreateNestedManyWithoutLikedMealsInput";
export declare class MealCreateWithoutItemsInput {
    id?: string | undefined;
    Tenant: TenantCreateNestedOneWithoutMealsInput;
    productLink?: string | undefined;
    title?: string | undefined;
    description?: string | undefined;
    dietaryRestrictions?: MealCreatedietaryRestrictionsInput | undefined;
    allowedMealTypes?: MealCreateallowedMealTypesInput | undefined;
    allowedMealKinds?: MealCreateallowedMealKindsInput | undefined;
    doctorSpecificDiets?: MealCreatedoctorSpecificDietsInput | undefined;
    specialDiets?: MealCreatespecialDietsInput | undefined;
    itemIds?: MealCreateitemIdsInput | undefined;
    Availability?: MealAvailabilityCreateNestedManyWithoutMealInput | undefined;
    Orders?: OrderCreateNestedManyWithoutMealInput | undefined;
    photo?: string | undefined;
    gallery?: MealCreategalleryInput | undefined;
    AggregateRating?: AggregateRatingCreateNestedOneWithoutMealInput | undefined;
    publishStatus?: "DRAFT" | "PUBLISHED" | "UNPUBLISHED" | "UNDER_REVIEW" | "PENDING_APPROVAL" | "IN_REVIEW" | "APPROVED" | "NO_ACTION_TAKEN" | "REJECTED_WITH_REASON" | "DECLINED" | "BANNED" | "SOFT_BANNED" | undefined;
    LikedBy?: UserCreateNestedManyWithoutLikedMealsInput | undefined;
    likedByIds?: MealCreatelikedByIdsInput | undefined;
    Posts?: PostCreateNestedManyWithoutMealInput | undefined;
    Features?: FeaturesCreateNestedManyWithoutMealInput | undefined;
    Reactions?: ReactionCreateNestedManyWithoutMealInput | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
