import { AggregateRatingUpdateOneWithoutEpisodeInput } from "../inputs/AggregateRatingUpdateOneWithoutEpisodeInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { PostUpdateManyWithoutEpisodeInput } from "../inputs/PostUpdateManyWithoutEpisodeInput";
import { SeasonSeriesUpdateOneRequiredWithoutEpisodesInput } from "../inputs/SeasonSeriesUpdateOneRequiredWithoutEpisodesInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class EpisodeUpdateWithoutReactionsInput {
    episodeNumber?: IntFieldUpdateOperationsInput | undefined;
    title?: StringFieldUpdateOperationsInput | undefined;
    year?: StringFieldUpdateOperationsInput | undefined;
    poster?: StringFieldUpdateOperationsInput | undefined;
    overview?: StringFieldUpdateOperationsInput | undefined;
    trailer?: StringFieldUpdateOperationsInput | undefined;
    coverImage?: StringFieldUpdateOperationsInput | undefined;
    tagline?: StringFieldUpdateOperationsInput | undefined;
    releaseDate?: DateTimeFieldUpdateOperationsInput | undefined;
    SeasonSeries?: SeasonSeriesUpdateOneRequiredWithoutEpisodesInput | undefined;
    AggregateRating?: AggregateRatingUpdateOneWithoutEpisodeInput | undefined;
    Posts?: PostUpdateManyWithoutEpisodeInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
