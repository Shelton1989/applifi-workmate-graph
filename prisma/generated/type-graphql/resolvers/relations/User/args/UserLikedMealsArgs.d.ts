import { MealOrderByWithRelationInput } from "../../../inputs/MealOrderByWithRelationInput";
import { MealWhereInput } from "../../../inputs/MealWhereInput";
import { MealWhereUniqueInput } from "../../../inputs/MealWhereUniqueInput";
export declare class UserLikedMealsArgs {
    where?: MealWhereInput | undefined;
    orderBy?: MealOrderByWithRelationInput[] | undefined;
    cursor?: MealWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "tenantId" | "productLink" | "title" | "description" | "dietaryRestrictions" | "allowedMealTypes" | "allowedMealKinds" | "doctorSpecificDiets" | "specialDiets" | "itemIds" | "photo" | "gallery" | "publishStatus" | "likedByIds" | "createdAt" | "updatedAt"> | undefined;
}
