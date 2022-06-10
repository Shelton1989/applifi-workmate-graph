import { CommentUpdateOneRequiredWithoutRepliesInput } from "../inputs/CommentUpdateOneRequiredWithoutRepliesInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { ReactionUpdateManyWithoutReplyInput } from "../inputs/ReactionUpdateManyWithoutReplyInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutRepliesInput } from "../inputs/UserUpdateOneRequiredWithoutRepliesInput";
export declare class ReplyUpdateInput {
    text?: StringFieldUpdateOperationsInput | undefined;
    Comment?: CommentUpdateOneRequiredWithoutRepliesInput | undefined;
    Author?: UserUpdateOneRequiredWithoutRepliesInput | undefined;
    Reactions?: ReactionUpdateManyWithoutReplyInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
