import { CommentCreateManyAuthorInputEnvelope } from "../inputs/CommentCreateManyAuthorInputEnvelope";
import { CommentCreateOrConnectWithoutAuthorInput } from "../inputs/CommentCreateOrConnectWithoutAuthorInput";
import { CommentCreateWithoutAuthorInput } from "../inputs/CommentCreateWithoutAuthorInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";
export declare class CommentCreateNestedManyWithoutAuthorInput {
    create?: CommentCreateWithoutAuthorInput[] | undefined;
    connectOrCreate?: CommentCreateOrConnectWithoutAuthorInput[] | undefined;
    createMany?: CommentCreateManyAuthorInputEnvelope | undefined;
    connect?: CommentWhereUniqueInput[] | undefined;
}
