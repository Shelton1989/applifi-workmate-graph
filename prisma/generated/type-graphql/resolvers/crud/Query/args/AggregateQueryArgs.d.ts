import { QueryOrderByWithRelationInput } from "../../../inputs/QueryOrderByWithRelationInput";
import { QueryWhereInput } from "../../../inputs/QueryWhereInput";
import { QueryWhereUniqueInput } from "../../../inputs/QueryWhereUniqueInput";
export declare class AggregateQueryArgs {
    where?: QueryWhereInput | undefined;
    orderBy?: QueryOrderByWithRelationInput[] | undefined;
    cursor?: QueryWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
