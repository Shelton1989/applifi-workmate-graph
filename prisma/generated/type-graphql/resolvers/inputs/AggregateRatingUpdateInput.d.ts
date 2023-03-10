import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { FloatFieldUpdateOperationsInput } from "../inputs/FloatFieldUpdateOperationsInput";
import { MealUpdateOneWithoutAggregateRatingInput } from "../inputs/MealUpdateOneWithoutAggregateRatingInput";
import { NullableIntFieldUpdateOperationsInput } from "../inputs/NullableIntFieldUpdateOperationsInput";
export declare class AggregateRatingUpdateInput {
    ratingValue?: FloatFieldUpdateOperationsInput | undefined;
    countedPosts?: NullableIntFieldUpdateOperationsInput | undefined;
    allPosts?: NullableIntFieldUpdateOperationsInput | undefined;
    ratingCount?: NullableIntFieldUpdateOperationsInput | undefined;
    Meal?: MealUpdateOneWithoutAggregateRatingInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
