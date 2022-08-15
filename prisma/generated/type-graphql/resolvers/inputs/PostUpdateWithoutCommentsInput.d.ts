import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumMEDIA_TYPEFieldUpdateOperationsInput } from "../inputs/EnumMEDIA_TYPEFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { PostUpdatemediaUrlInput } from "../inputs/PostUpdatemediaUrlInput";
import { ReactionUpdateManyWithoutPostInput } from "../inputs/ReactionUpdateManyWithoutPostInput";
import { UserUpdateOneRequiredWithoutPostsInput } from "../inputs/UserUpdateOneRequiredWithoutPostsInput";
export declare class PostUpdateWithoutCommentsInput {
    type?: EnumMEDIA_TYPEFieldUpdateOperationsInput | undefined;
    caption?: NullableStringFieldUpdateOperationsInput | undefined;
    mediaUrl?: PostUpdatemediaUrlInput | undefined;
    isCommentsEnabled?: BoolFieldUpdateOperationsInput | undefined;
    Author?: UserUpdateOneRequiredWithoutPostsInput | undefined;
    Reactions?: ReactionUpdateManyWithoutPostInput | undefined;
    productLink?: NullableStringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
