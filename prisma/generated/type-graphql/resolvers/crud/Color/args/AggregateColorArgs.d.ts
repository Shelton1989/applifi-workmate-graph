import { ColorOrderByWithRelationInput } from "../../../inputs/ColorOrderByWithRelationInput";
import { ColorWhereInput } from "../../../inputs/ColorWhereInput";
import { ColorWhereUniqueInput } from "../../../inputs/ColorWhereUniqueInput";
export declare class AggregateColorArgs {
    where?: ColorWhereInput | undefined;
    orderBy?: ColorOrderByWithRelationInput[] | undefined;
    cursor?: ColorWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
