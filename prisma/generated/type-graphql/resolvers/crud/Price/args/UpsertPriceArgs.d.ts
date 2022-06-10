import { PriceCreateInput } from "../../../inputs/PriceCreateInput";
import { PriceUpdateInput } from "../../../inputs/PriceUpdateInput";
import { PriceWhereUniqueInput } from "../../../inputs/PriceWhereUniqueInput";
export declare class UpsertPriceArgs {
    where: PriceWhereUniqueInput;
    create: PriceCreateInput;
    update: PriceUpdateInput;
}
