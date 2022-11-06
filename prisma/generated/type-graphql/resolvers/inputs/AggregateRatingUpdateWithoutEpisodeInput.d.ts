import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { FloatFieldUpdateOperationsInput } from "../inputs/FloatFieldUpdateOperationsInput";
import { NullableIntFieldUpdateOperationsInput } from "../inputs/NullableIntFieldUpdateOperationsInput";
import { SeasonSeriesUpdateOneWithoutAggregateRatingInput } from "../inputs/SeasonSeriesUpdateOneWithoutAggregateRatingInput";
import { TopicUpdateOneWithoutAggregateRatingInput } from "../inputs/TopicUpdateOneWithoutAggregateRatingInput";
export declare class AggregateRatingUpdateWithoutEpisodeInput {
    ratingValue?: FloatFieldUpdateOperationsInput | undefined;
    countedPosts?: NullableIntFieldUpdateOperationsInput | undefined;
    allPosts?: NullableIntFieldUpdateOperationsInput | undefined;
    ratingCount?: NullableIntFieldUpdateOperationsInput | undefined;
    Topic?: TopicUpdateOneWithoutAggregateRatingInput | undefined;
    SeasonSeries?: SeasonSeriesUpdateOneWithoutAggregateRatingInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
