import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EpisodeUpdateManyWithoutSeasonSeriesInput } from "../inputs/EpisodeUpdateManyWithoutSeasonSeriesInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { ReactionUpdateManyWithoutSeasonSeriesInput } from "../inputs/ReactionUpdateManyWithoutSeasonSeriesInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TopicUpdateOneRequiredWithoutSeasonSeriesInput } from "../inputs/TopicUpdateOneRequiredWithoutSeasonSeriesInput";
export declare class SeasonSeriesUpdateWithoutPostsInput {
    seasonOrSeriesNumber?: IntFieldUpdateOperationsInput | undefined;
    title?: StringFieldUpdateOperationsInput | undefined;
    year?: StringFieldUpdateOperationsInput | undefined;
    poster?: StringFieldUpdateOperationsInput | undefined;
    overview?: StringFieldUpdateOperationsInput | undefined;
    trailer?: StringFieldUpdateOperationsInput | undefined;
    coverImage?: StringFieldUpdateOperationsInput | undefined;
    tagline?: StringFieldUpdateOperationsInput | undefined;
    Topic?: TopicUpdateOneRequiredWithoutSeasonSeriesInput | undefined;
    Reactions?: ReactionUpdateManyWithoutSeasonSeriesInput | undefined;
    Episodes?: EpisodeUpdateManyWithoutSeasonSeriesInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
