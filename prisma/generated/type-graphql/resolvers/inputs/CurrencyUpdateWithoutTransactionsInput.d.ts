import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { PriceUpdateManyWithoutCurrencyInput } from "../inputs/PriceUpdateManyWithoutCurrencyInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class CurrencyUpdateWithoutTransactionsInput {
    name?: StringFieldUpdateOperationsInput | undefined;
    symbol?: StringFieldUpdateOperationsInput | undefined;
    code?: StringFieldUpdateOperationsInput | undefined;
    prices?: PriceUpdateManyWithoutCurrencyInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
