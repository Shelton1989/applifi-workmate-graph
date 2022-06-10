import { ReplyOrderByWithRelationInput } from "../../../inputs/ReplyOrderByWithRelationInput";
import { ReplyWhereInput } from "../../../inputs/ReplyWhereInput";
import { ReplyWhereUniqueInput } from "../../../inputs/ReplyWhereUniqueInput";
export declare class AggregateReplyArgs {
    where?: ReplyWhereInput | undefined;
    orderBy?: ReplyOrderByWithRelationInput[] | undefined;
    cursor?: ReplyWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
