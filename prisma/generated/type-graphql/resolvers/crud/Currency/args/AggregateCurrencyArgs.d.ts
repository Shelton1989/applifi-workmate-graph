import { CurrencyOrderByWithRelationInput } from "../../../inputs/CurrencyOrderByWithRelationInput";
import { CurrencyWhereInput } from "../../../inputs/CurrencyWhereInput";
import { CurrencyWhereUniqueInput } from "../../../inputs/CurrencyWhereUniqueInput";
export declare class AggregateCurrencyArgs {
    where?: CurrencyWhereInput | undefined;
    orderBy?: CurrencyOrderByWithRelationInput[] | undefined;
    cursor?: CurrencyWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
