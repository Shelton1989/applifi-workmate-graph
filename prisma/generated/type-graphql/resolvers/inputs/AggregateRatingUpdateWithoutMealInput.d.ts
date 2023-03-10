import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { FloatFieldUpdateOperationsInput } from "../inputs/FloatFieldUpdateOperationsInput";
import { NullableIntFieldUpdateOperationsInput } from "../inputs/NullableIntFieldUpdateOperationsInput";
export declare class AggregateRatingUpdateWithoutMealInput {
    ratingValue?: FloatFieldUpdateOperationsInput | undefined;
    countedPosts?: NullableIntFieldUpdateOperationsInput | undefined;
    allPosts?: NullableIntFieldUpdateOperationsInput | undefined;
    ratingCount?: NullableIntFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
