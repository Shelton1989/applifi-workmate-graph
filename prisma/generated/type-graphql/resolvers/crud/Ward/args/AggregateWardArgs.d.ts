import { WardOrderByWithRelationInput } from "../../../inputs/WardOrderByWithRelationInput";
import { WardWhereInput } from "../../../inputs/WardWhereInput";
import { WardWhereUniqueInput } from "../../../inputs/WardWhereUniqueInput";
export declare class AggregateWardArgs {
    where?: WardWhereInput | undefined;
    orderBy?: WardOrderByWithRelationInput[] | undefined;
    cursor?: WardWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
