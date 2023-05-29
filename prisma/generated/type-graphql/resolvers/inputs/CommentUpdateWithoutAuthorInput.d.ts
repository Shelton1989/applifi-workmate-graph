import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { DocumentUpdateOneRequiredWithoutCommentsInput } from "../inputs/DocumentUpdateOneRequiredWithoutCommentsInput";
import { ReactionUpdateManyWithoutCommentInput } from "../inputs/ReactionUpdateManyWithoutCommentInput";
import { ReplyUpdateManyWithoutCommentInput } from "../inputs/ReplyUpdateManyWithoutCommentInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class CommentUpdateWithoutAuthorInput {
    text?: StringFieldUpdateOperationsInput | undefined;
    Document?: DocumentUpdateOneRequiredWithoutCommentsInput | undefined;
    Replies?: ReplyUpdateManyWithoutCommentInput | undefined;
    Reactions?: ReactionUpdateManyWithoutCommentInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
