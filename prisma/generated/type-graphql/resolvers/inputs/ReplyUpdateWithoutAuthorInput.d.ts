import { CommentUpdateOneRequiredWithoutRepliesInput } from "../inputs/CommentUpdateOneRequiredWithoutRepliesInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { ReactionUpdateManyWithoutReplyInput } from "../inputs/ReactionUpdateManyWithoutReplyInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class ReplyUpdateWithoutAuthorInput {
    text?: StringFieldUpdateOperationsInput | undefined;
    Comment?: CommentUpdateOneRequiredWithoutRepliesInput | undefined;
    Reactions?: ReactionUpdateManyWithoutReplyInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
