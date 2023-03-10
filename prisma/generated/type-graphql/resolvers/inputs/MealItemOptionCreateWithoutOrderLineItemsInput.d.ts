import { MealItemCreateNestedOneWithoutOptionsInput } from "../inputs/MealItemCreateNestedOneWithoutOptionsInput";
export declare class MealItemOptionCreateWithoutOrderLineItemsInput {
    id?: string | undefined;
    MealItem: MealItemCreateNestedOneWithoutOptionsInput;
    title: string;
    shortDescription: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
