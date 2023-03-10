import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { MealRelationFilter } from "../inputs/MealRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class FeaturesWhereInput {
    AND?: FeaturesWhereInput[] | undefined;
    OR?: FeaturesWhereInput[] | undefined;
    NOT?: FeaturesWhereInput[] | undefined;
    id?: StringFilter | undefined;
    Meal?: MealRelationFilter | undefined;
    mealId?: StringFilter | undefined;
    title?: StringFilter | undefined;
    shortDescription?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
