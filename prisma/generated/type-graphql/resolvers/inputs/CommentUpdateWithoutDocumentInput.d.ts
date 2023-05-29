import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { ReactionUpdateManyWithoutCommentInput } from "../inputs/ReactionUpdateManyWithoutCommentInput";
import { ReplyUpdateManyWithoutCommentInput } from "../inputs/ReplyUpdateManyWithoutCommentInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutCommentsInput } from "../inputs/UserUpdateOneRequiredWithoutCommentsInput";
export declare class CommentUpdateWithoutDocumentInput {
    text?: StringFieldUpdateOperationsInput | undefined;
    Author?: UserUpdateOneRequiredWithoutCommentsInput | undefined;
    Replies?: ReplyUpdateManyWithoutCommentInput | undefined;
    Reactions?: ReactionUpdateManyWithoutCommentInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
