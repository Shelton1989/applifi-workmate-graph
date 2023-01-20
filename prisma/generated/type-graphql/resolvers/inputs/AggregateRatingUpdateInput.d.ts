import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { ExperienceUpdateOneWithoutAggregateRatingInput } from "../inputs/ExperienceUpdateOneWithoutAggregateRatingInput";
import { FloatFieldUpdateOperationsInput } from "../inputs/FloatFieldUpdateOperationsInput";
import { NullableIntFieldUpdateOperationsInput } from "../inputs/NullableIntFieldUpdateOperationsInput";
export declare class AggregateRatingUpdateInput {
    ratingValue?: FloatFieldUpdateOperationsInput | undefined;
    countedPosts?: NullableIntFieldUpdateOperationsInput | undefined;
    allPosts?: NullableIntFieldUpdateOperationsInput | undefined;
    ratingCount?: NullableIntFieldUpdateOperationsInput | undefined;
    Experience?: ExperienceUpdateOneWithoutAggregateRatingInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
