import { MealOrderByWithAggregationInput } from "../../../inputs/MealOrderByWithAggregationInput";
import { MealScalarWhereWithAggregatesInput } from "../../../inputs/MealScalarWhereWithAggregatesInput";
import { MealWhereInput } from "../../../inputs/MealWhereInput";
export declare class GroupByMealArgs {
    where?: MealWhereInput | undefined;
    orderBy?: MealOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "tenantId" | "productLink" | "title" | "description" | "dietaryRestrictions" | "mealTypes" | "mealKinds" | "doctorSpecificDiets" | "specialDiets" | "itemIds" | "photo" | "gallery" | "publishStatus" | "likedByIds" | "createdAt" | "updatedAt">;
    having?: MealScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
