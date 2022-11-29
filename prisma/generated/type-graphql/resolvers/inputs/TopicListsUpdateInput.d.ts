import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumLIST_TYPEFieldUpdateOperationsInput } from "../inputs/EnumLIST_TYPEFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TopicListsUpdatelistsInput } from "../inputs/TopicListsUpdatelistsInput";
export declare class TopicListsUpdateInput {
    type?: EnumLIST_TYPEFieldUpdateOperationsInput | undefined;
    title?: StringFieldUpdateOperationsInput | undefined;
    lists?: TopicListsUpdatelistsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
