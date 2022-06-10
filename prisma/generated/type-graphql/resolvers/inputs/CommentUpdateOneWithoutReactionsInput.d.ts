import { CommentCreateOrConnectWithoutReactionsInput } from "../inputs/CommentCreateOrConnectWithoutReactionsInput";
import { CommentCreateWithoutReactionsInput } from "../inputs/CommentCreateWithoutReactionsInput";
import { CommentUpdateWithoutReactionsInput } from "../inputs/CommentUpdateWithoutReactionsInput";
import { CommentUpsertWithoutReactionsInput } from "../inputs/CommentUpsertWithoutReactionsInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";
export declare class CommentUpdateOneWithoutReactionsInput {
    create?: CommentCreateWithoutReactionsInput | undefined;
    connectOrCreate?: CommentCreateOrConnectWithoutReactionsInput | undefined;
    upsert?: CommentUpsertWithoutReactionsInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    connect?: CommentWhereUniqueInput | undefined;
    update?: CommentUpdateWithoutReactionsInput | undefined;
}
