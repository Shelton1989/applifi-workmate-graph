import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EpisodeUpdateOneWithoutAggregateRatingInput } from "../inputs/EpisodeUpdateOneWithoutAggregateRatingInput";
import { FloatFieldUpdateOperationsInput } from "../inputs/FloatFieldUpdateOperationsInput";
import { NullableIntFieldUpdateOperationsInput } from "../inputs/NullableIntFieldUpdateOperationsInput";
import { SeasonSeriesUpdateOneWithoutAggregateRatingInput } from "../inputs/SeasonSeriesUpdateOneWithoutAggregateRatingInput";
export declare class AggregateRatingUpdateWithoutTopicInput {
    ratingValue?: FloatFieldUpdateOperationsInput | undefined;
    countedPosts?: NullableIntFieldUpdateOperationsInput | undefined;
    allPosts?: NullableIntFieldUpdateOperationsInput | undefined;
    ratingCount?: NullableIntFieldUpdateOperationsInput | undefined;
    SeasonSeries?: SeasonSeriesUpdateOneWithoutAggregateRatingInput | undefined;
    Episode?: EpisodeUpdateOneWithoutAggregateRatingInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
