import { CommentCreateOrConnectWithoutRepliesInput } from "../inputs/CommentCreateOrConnectWithoutRepliesInput";
import { CommentCreateWithoutRepliesInput } from "../inputs/CommentCreateWithoutRepliesInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";
export declare class CommentCreateNestedOneWithoutRepliesInput {
    create?: CommentCreateWithoutRepliesInput | undefined;
    connectOrCreate?: CommentCreateOrConnectWithoutRepliesInput | undefined;
    connect?: CommentWhereUniqueInput | undefined;
}
