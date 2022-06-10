import { CommentCreateOrConnectWithoutReactionsInput } from "../inputs/CommentCreateOrConnectWithoutReactionsInput";
import { CommentCreateWithoutReactionsInput } from "../inputs/CommentCreateWithoutReactionsInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";
export declare class CommentCreateNestedOneWithoutReactionsInput {
    create?: CommentCreateWithoutReactionsInput | undefined;
    connectOrCreate?: CommentCreateOrConnectWithoutReactionsInput | undefined;
    connect?: CommentWhereUniqueInput | undefined;
}
