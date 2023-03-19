import { MealCountAggregate } from "../outputs/MealCountAggregate";
import { MealMaxAggregate } from "../outputs/MealMaxAggregate";
import { MealMinAggregate } from "../outputs/MealMinAggregate";
export declare class MealGroupBy {
    id: string;
    tenantId: string;
    productLink: string | null;
    title: string | null;
    description: string | null;
    dietaryRestrictions: Array<"NONE" | "VEGETARIAN" | "VEGAN" | "GLUTEN_FREE" | "DAIRY_FREE" | "NUT_FREE" | "EGG_FREE" | "PORK_FREE" | "HALAL" | "KOSHER" | "PALEO" | "OTHER"> | null;
    mealTypes: Array<"BREAKFAST" | "LUNCH" | "DINNER" | "SNACK"> | null;
    mealKinds: Array<"FLUID" | "LIGHT" | "FULL"> | null;
    doctorSpecificDiets: Array<"NONE" | "VEGETARIAN" | "VEGAN" | "GLUTEN_FREE" | "DAIRY_FREE" | "NUT_FREE" | "EGG_FREE" | "PORK_FREE" | "HALAL" | "KOSHER" | "PALEO" | "OTHER"> | null;
    specialDiets: Array<"NONE" | "MIXED_FLUID" | "CLEAR_FLUID" | "PUREED"> | null;
    itemIds: string[] | null;
    photo: string | null;
    gallery: string[] | null;
    publishStatus: "DRAFT" | "PUBLISHED" | "UNPUBLISHED" | "UNDER_REVIEW" | "PENDING_APPROVAL" | "IN_REVIEW" | "APPROVED" | "NO_ACTION_TAKEN" | "REJECTED_WITH_REASON" | "DECLINED" | "BANNED" | "SOFT_BANNED";
    likedByIds: string[] | null;
    createdAt: Date;
    updatedAt: Date;
    _count: MealCountAggregate | null;
    _min: MealMinAggregate | null;
    _max: MealMaxAggregate | null;
}
