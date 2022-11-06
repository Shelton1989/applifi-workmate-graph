import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { PostUpdateManyWithoutEpisodeInput } from "../inputs/PostUpdateManyWithoutEpisodeInput";
import { ReactionUpdateManyWithoutEpisodeInput } from "../inputs/ReactionUpdateManyWithoutEpisodeInput";
import { SeasonSeriesUpdateOneRequiredWithoutEpisodesInput } from "../inputs/SeasonSeriesUpdateOneRequiredWithoutEpisodesInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class EpisodeUpdateWithoutAggregateRatingInput {
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
    Reactions?: ReactionUpdateManyWithoutEpisodeInput | undefined;
    Posts?: PostUpdateManyWithoutEpisodeInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
