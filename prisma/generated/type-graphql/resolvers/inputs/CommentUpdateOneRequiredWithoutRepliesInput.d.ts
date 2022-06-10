import { CommentCreateOrConnectWithoutRepliesInput } from "../inputs/CommentCreateOrConnectWithoutRepliesInput";
import { CommentCreateWithoutRepliesInput } from "../inputs/CommentCreateWithoutRepliesInput";
import { CommentUpdateWithoutRepliesInput } from "../inputs/CommentUpdateWithoutRepliesInput";
import { CommentUpsertWithoutRepliesInput } from "../inputs/CommentUpsertWithoutRepliesInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";
export declare class CommentUpdateOneRequiredWithoutRepliesInput {
    create?: CommentCreateWithoutRepliesInput | undefined;
    connectOrCreate?: CommentCreateOrConnectWithoutRepliesInput | undefined;
    upsert?: CommentUpsertWithoutRepliesInput | undefined;
    connect?: CommentWhereUniqueInput | undefined;
    update?: CommentUpdateWithoutRepliesInput | undefined;
}
