import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TransactionUpdateManyWithoutCurrencyInput } from "../inputs/TransactionUpdateManyWithoutCurrencyInput";
export declare class CurrencyUpdateWithoutPricesInput {
    name?: StringFieldUpdateOperationsInput | undefined;
    symbol?: StringFieldUpdateOperationsInput | undefined;
    code?: StringFieldUpdateOperationsInput | undefined;
    Transactions?: TransactionUpdateManyWithoutCurrencyInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
