import { AggregateRatingUpdateOneWithoutSeasonSeriesInput } from "../inputs/AggregateRatingUpdateOneWithoutSeasonSeriesInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { PostUpdateManyWithoutSeasonSeriesInput } from "../inputs/PostUpdateManyWithoutSeasonSeriesInput";
import { ReactionUpdateManyWithoutSeasonSeriesInput } from "../inputs/ReactionUpdateManyWithoutSeasonSeriesInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TopicUpdateOneRequiredWithoutSeasonSeriesInput } from "../inputs/TopicUpdateOneRequiredWithoutSeasonSeriesInput";
export declare class SeasonSeriesUpdateWithoutEpisodesInput {
    seasonOrSeriesNumber?: IntFieldUpdateOperationsInput | undefined;
    title?: StringFieldUpdateOperationsInput | undefined;
    year?: StringFieldUpdateOperationsInput | undefined;
    poster?: StringFieldUpdateOperationsInput | undefined;
    overview?: StringFieldUpdateOperationsInput | undefined;
    trailer?: StringFieldUpdateOperationsInput | undefined;
    coverImage?: StringFieldUpdateOperationsInput | undefined;
    tagline?: StringFieldUpdateOperationsInput | undefined;
    releaseDate?: DateTimeFieldUpdateOperationsInput | undefined;
    Topic?: TopicUpdateOneRequiredWithoutSeasonSeriesInput | undefined;
    AggregateRating?: AggregateRatingUpdateOneWithoutSeasonSeriesInput | undefined;
    Reactions?: ReactionUpdateManyWithoutSeasonSeriesInput | undefined;
    Posts?: PostUpdateManyWithoutSeasonSeriesInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
