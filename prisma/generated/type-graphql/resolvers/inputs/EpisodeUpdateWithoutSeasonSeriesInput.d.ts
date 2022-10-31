import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { PostUpdateManyWithoutEpisodeInput } from "../inputs/PostUpdateManyWithoutEpisodeInput";
import { ReactionUpdateManyWithoutEpisodeInput } from "../inputs/ReactionUpdateManyWithoutEpisodeInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class EpisodeUpdateWithoutSeasonSeriesInput {
    episodeNumber?: IntFieldUpdateOperationsInput | undefined;
    title?: StringFieldUpdateOperationsInput | undefined;
    year?: StringFieldUpdateOperationsInput | undefined;
    poster?: StringFieldUpdateOperationsInput | undefined;
    overview?: StringFieldUpdateOperationsInput | undefined;
    trailer?: StringFieldUpdateOperationsInput | undefined;
    coverImage?: StringFieldUpdateOperationsInput | undefined;
    tagline?: StringFieldUpdateOperationsInput | undefined;
    Reactions?: ReactionUpdateManyWithoutEpisodeInput | undefined;
    Posts?: PostUpdateManyWithoutEpisodeInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
