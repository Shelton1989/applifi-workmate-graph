import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { PriceUpdateManyWithoutCurrencyInput } from "../inputs/PriceUpdateManyWithoutCurrencyInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TransactionUpdateManyWithoutCurrencyInput } from "../inputs/TransactionUpdateManyWithoutCurrencyInput";
export declare class CurrencyUpdateInput {
    name?: StringFieldUpdateOperationsInput | undefined;
    symbol?: StringFieldUpdateOperationsInput | undefined;
    code?: StringFieldUpdateOperationsInput | undefined;
    prices?: PriceUpdateManyWithoutCurrencyInput | undefined;
    Transactions?: TransactionUpdateManyWithoutCurrencyInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
