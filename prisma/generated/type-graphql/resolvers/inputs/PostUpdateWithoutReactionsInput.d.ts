import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { CommentUpdateManyWithoutPostInput } from "../inputs/CommentUpdateManyWithoutPostInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumMEDIA_TYPEFieldUpdateOperationsInput } from "../inputs/EnumMEDIA_TYPEFieldUpdateOperationsInput";
import { EpisodeUpdateOneWithoutPostsInput } from "../inputs/EpisodeUpdateOneWithoutPostsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { PostUpdatemediaUrlInput } from "../inputs/PostUpdatemediaUrlInput";
import { SeasonSeriesUpdateOneWithoutPostsInput } from "../inputs/SeasonSeriesUpdateOneWithoutPostsInput";
import { TopicUpdateOneWithoutPostsInput } from "../inputs/TopicUpdateOneWithoutPostsInput";
import { UserUpdateOneRequiredWithoutPostsInput } from "../inputs/UserUpdateOneRequiredWithoutPostsInput";
export declare class PostUpdateWithoutReactionsInput {
    type?: EnumMEDIA_TYPEFieldUpdateOperationsInput | undefined;
    caption?: NullableStringFieldUpdateOperationsInput | undefined;
    mediaUrl?: PostUpdatemediaUrlInput | undefined;
    rating?: IntFieldUpdateOperationsInput | undefined;
    isCommentsEnabled?: BoolFieldUpdateOperationsInput | undefined;
    canBeCounted?: BoolFieldUpdateOperationsInput | undefined;
    Author?: UserUpdateOneRequiredWithoutPostsInput | undefined;
    Comments?: CommentUpdateManyWithoutPostInput | undefined;
    Topic?: TopicUpdateOneWithoutPostsInput | undefined;
    SeasonSeries?: SeasonSeriesUpdateOneWithoutPostsInput | undefined;
    Episode?: EpisodeUpdateOneWithoutPostsInput | undefined;
    postLink?: NullableStringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
