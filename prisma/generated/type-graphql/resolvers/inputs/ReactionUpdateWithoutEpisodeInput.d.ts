import { CommentUpdateOneWithoutReactionsInput } from "../inputs/CommentUpdateOneWithoutReactionsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumREACTION_TYPEFieldUpdateOperationsInput } from "../inputs/EnumREACTION_TYPEFieldUpdateOperationsInput";
import { PostUpdateOneWithoutReactionsInput } from "../inputs/PostUpdateOneWithoutReactionsInput";
import { ReplyUpdateOneWithoutReactionsInput } from "../inputs/ReplyUpdateOneWithoutReactionsInput";
import { SeasonSeriesUpdateOneWithoutReactionsInput } from "../inputs/SeasonSeriesUpdateOneWithoutReactionsInput";
import { TopicUpdateOneWithoutReactionsInput } from "../inputs/TopicUpdateOneWithoutReactionsInput";
import { UserUpdateOneRequiredWithoutReactionsInput } from "../inputs/UserUpdateOneRequiredWithoutReactionsInput";
export declare class ReactionUpdateWithoutEpisodeInput {
    type?: EnumREACTION_TYPEFieldUpdateOperationsInput | undefined;
    Post?: PostUpdateOneWithoutReactionsInput | undefined;
    Comment?: CommentUpdateOneWithoutReactionsInput | undefined;
    Reply?: ReplyUpdateOneWithoutReactionsInput | undefined;
    Author?: UserUpdateOneRequiredWithoutReactionsInput | undefined;
    Topic?: TopicUpdateOneWithoutReactionsInput | undefined;
    SeasonSeries?: SeasonSeriesUpdateOneWithoutReactionsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
