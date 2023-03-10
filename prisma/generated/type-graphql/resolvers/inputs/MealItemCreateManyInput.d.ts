import { MealItemCreatemealIdsInput } from "../inputs/MealItemCreatemealIdsInput";
export declare class MealItemCreateManyInput {
    id?: string | undefined;
    mealIds?: MealItemCreatemealIdsInput | undefined;
    title: string;
    shortDescription: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
