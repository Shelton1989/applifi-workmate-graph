import { CommentCreateManyDocumentInputEnvelope } from "../inputs/CommentCreateManyDocumentInputEnvelope";
import { CommentCreateOrConnectWithoutDocumentInput } from "../inputs/CommentCreateOrConnectWithoutDocumentInput";
import { CommentCreateWithoutDocumentInput } from "../inputs/CommentCreateWithoutDocumentInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";
export declare class CommentCreateNestedManyWithoutDocumentInput {
    create?: CommentCreateWithoutDocumentInput[] | undefined;
    connectOrCreate?: CommentCreateOrConnectWithoutDocumentInput[] | undefined;
    createMany?: CommentCreateManyDocumentInputEnvelope | undefined;
    connect?: CommentWhereUniqueInput[] | undefined;
}
