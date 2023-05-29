import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { DocumentUpdateOneRequiredWithoutCommentsInput } from "../inputs/DocumentUpdateOneRequiredWithoutCommentsInput";
import { ReplyUpdateManyWithoutCommentInput } from "../inputs/ReplyUpdateManyWithoutCommentInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutCommentsInput } from "../inputs/UserUpdateOneRequiredWithoutCommentsInput";
export declare class CommentUpdateWithoutReactionsInput {
    text?: StringFieldUpdateOperationsInput | undefined;
    Document?: DocumentUpdateOneRequiredWithoutCommentsInput | undefined;
    Author?: UserUpdateOneRequiredWithoutCommentsInput | undefined;
    Replies?: ReplyUpdateManyWithoutCommentInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
