import { CurrencyCreateInput } from "../../../inputs/CurrencyCreateInput";
import { CurrencyUpdateInput } from "../../../inputs/CurrencyUpdateInput";
import { CurrencyWhereUniqueInput } from "../../../inputs/CurrencyWhereUniqueInput";
export declare class UpsertCurrencyArgs {
    where: CurrencyWhereUniqueInput;
    create: CurrencyCreateInput;
    update: CurrencyUpdateInput;
}
