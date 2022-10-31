import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { ReactionUpdateManyWithoutEpisodeInput } from "../inputs/ReactionUpdateManyWithoutEpisodeInput";
import { SeasonSeriesUpdateOneRequiredWithoutEpisodesInput } from "../inputs/SeasonSeriesUpdateOneRequiredWithoutEpisodesInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class EpisodeUpdateWithoutPostsInput {
    episodeNumber?: IntFieldUpdateOperationsInput | undefined;
    title?: StringFieldUpdateOperationsInput | undefined;
    year?: StringFieldUpdateOperationsInput | undefined;
    poster?: StringFieldUpdateOperationsInput | undefined;
    overview?: StringFieldUpdateOperationsInput | undefined;
    trailer?: StringFieldUpdateOperationsInput | undefined;
    coverImage?: StringFieldUpdateOperationsInput | undefined;
    tagline?: StringFieldUpdateOperationsInput | undefined;
    SeasonSeries?: SeasonSeriesUpdateOneRequiredWithoutEpisodesInput | undefined;
    Reactions?: ReactionUpdateManyWithoutEpisodeInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
