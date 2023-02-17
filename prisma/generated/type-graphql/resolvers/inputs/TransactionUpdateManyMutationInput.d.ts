import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumPAYMENT_METHODFieldUpdateOperationsInput } from "../inputs/EnumPAYMENT_METHODFieldUpdateOperationsInput";
import { EnumPAYMENT_TYPEFieldUpdateOperationsInput } from "../inputs/EnumPAYMENT_TYPEFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
export declare class TransactionUpdateManyMutationInput {
    amountInLowestDenomination?: IntFieldUpdateOperationsInput | undefined;
    SelectedPaymentType?: NullableStringFieldUpdateOperationsInput | undefined;
    stripePaymentReference?: NullableStringFieldUpdateOperationsInput | undefined;
    paymentMethod?: EnumPAYMENT_METHODFieldUpdateOperationsInput | undefined;
    paymentType?: EnumPAYMENT_TYPEFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
