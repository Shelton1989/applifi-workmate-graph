import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumTOPIC_TYPEFieldUpdateOperationsInput } from "../inputs/EnumTOPIC_TYPEFieldUpdateOperationsInput";
import { PostUpdateManyWithoutTopicInput } from "../inputs/PostUpdateManyWithoutTopicInput";
import { ReactionUpdateManyWithoutTopicInput } from "../inputs/ReactionUpdateManyWithoutTopicInput";
import { SeasonSeriesUpdateManyWithoutTopicInput } from "../inputs/SeasonSeriesUpdateManyWithoutTopicInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TopicUpdateartistsInput } from "../inputs/TopicUpdateartistsInput";
import { TopicUpdateauthorsInput } from "../inputs/TopicUpdateauthorsInput";
import { TopicUpdatecastInput } from "../inputs/TopicUpdatecastInput";
import { TopicUpdatecreatorsInput } from "../inputs/TopicUpdatecreatorsInput";
import { TopicUpdatedirectorsInput } from "../inputs/TopicUpdatedirectorsInput";
import { TopicUpdategenresInput } from "../inputs/TopicUpdategenresInput";
import { TopicUpdateproducersInput } from "../inputs/TopicUpdateproducersInput";
import { TopicUpdatepublishersInput } from "../inputs/TopicUpdatepublishersInput";
export declare class TopicUpdateInput {
    title?: StringFieldUpdateOperationsInput | undefined;
    year?: StringFieldUpdateOperationsInput | undefined;
    poster?: StringFieldUpdateOperationsInput | undefined;
    overview?: StringFieldUpdateOperationsInput | undefined;
    trailer?: StringFieldUpdateOperationsInput | undefined;
    coverImage?: StringFieldUpdateOperationsInput | undefined;
    tagline?: StringFieldUpdateOperationsInput | undefined;
    genres?: TopicUpdategenresInput | undefined;
    creators?: TopicUpdatecreatorsInput | undefined;
    authors?: TopicUpdateauthorsInput | undefined;
    artists?: TopicUpdateartistsInput | undefined;
    producers?: TopicUpdateproducersInput | undefined;
    directors?: TopicUpdatedirectorsInput | undefined;
    publishers?: TopicUpdatepublishersInput | undefined;
    cast?: TopicUpdatecastInput | undefined;
    type?: StringFieldUpdateOperationsInput | undefined;
    Reactions?: ReactionUpdateManyWithoutTopicInput | undefined;
    SeasonSeries?: SeasonSeriesUpdateManyWithoutTopicInput | undefined;
    Posts?: PostUpdateManyWithoutTopicInput | undefined;
    topicType?: EnumTOPIC_TYPEFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}