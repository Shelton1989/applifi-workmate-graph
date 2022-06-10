import { PriceOrderByWithRelationInput } from "../../../inputs/PriceOrderByWithRelationInput";
import { PriceWhereInput } from "../../../inputs/PriceWhereInput";
import { PriceWhereUniqueInput } from "../../../inputs/PriceWhereUniqueInput";
export declare class AggregatePriceArgs {
    where?: PriceWhereInput | undefined;
    orderBy?: PriceOrderByWithRelationInput[] | undefined;
    cursor?: PriceWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
