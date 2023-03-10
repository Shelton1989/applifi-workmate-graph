import { MealCreateNestedOneWithoutFeaturesInput } from "../inputs/MealCreateNestedOneWithoutFeaturesInput";
export declare class FeaturesCreateInput {
    id?: string | undefined;
    Meal: MealCreateNestedOneWithoutFeaturesInput;
    title: string;
    shortDescription: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
