import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { DocumentUpdateOneRequiredWithoutCommentsInput } from "../inputs/DocumentUpdateOneRequiredWithoutCommentsInput";
import { ReactionUpdateManyWithoutCommentInput } from "../inputs/ReactionUpdateManyWithoutCommentInput";
import { ReplyUpdateManyWithoutCommentInput } from "../inputs/ReplyUpdateManyWithoutCommentInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutCommentsInput } from "../inputs/UserUpdateOneRequiredWithoutCommentsInput";
export declare class CommentUpdateInput {
    text?: StringFieldUpdateOperationsInput | undefined;
    Document?: DocumentUpdateOneRequiredWithoutCommentsInput | undefined;
    Author?: UserUpdateOneRequiredWithoutCommentsInput | undefined;
    Replies?: ReplyUpdateManyWithoutCommentInput | undefined;
    Reactions?: ReactionUpdateManyWithoutCommentInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
