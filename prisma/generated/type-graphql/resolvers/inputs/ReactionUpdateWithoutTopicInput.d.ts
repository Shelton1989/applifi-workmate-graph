import { CommentUpdateOneWithoutReactionsInput } from "../inputs/CommentUpdateOneWithoutReactionsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumREACTION_TYPEFieldUpdateOperationsInput } from "../inputs/EnumREACTION_TYPEFieldUpdateOperationsInput";
import { EpisodeUpdateOneWithoutReactionsInput } from "../inputs/EpisodeUpdateOneWithoutReactionsInput";
import { PostUpdateOneWithoutReactionsInput } from "../inputs/PostUpdateOneWithoutReactionsInput";
import { ReplyUpdateOneWithoutReactionsInput } from "../inputs/ReplyUpdateOneWithoutReactionsInput";
import { SeasonSeriesUpdateOneWithoutReactionsInput } from "../inputs/SeasonSeriesUpdateOneWithoutReactionsInput";
import { UserUpdateOneRequiredWithoutReactionsInput } from "../inputs/UserUpdateOneRequiredWithoutReactionsInput";
export declare class ReactionUpdateWithoutTopicInput {
    type?: EnumREACTION_TYPEFieldUpdateOperationsInput | undefined;
    Post?: PostUpdateOneWithoutReactionsInput | undefined;
    Comment?: CommentUpdateOneWithoutReactionsInput | undefined;
    Reply?: ReplyUpdateOneWithoutReactionsInput | undefined;
    Author?: UserUpdateOneRequiredWithoutReactionsInput | undefined;
    SeasonSeries?: SeasonSeriesUpdateOneWithoutReactionsInput | undefined;
    Episode?: EpisodeUpdateOneWithoutReactionsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
