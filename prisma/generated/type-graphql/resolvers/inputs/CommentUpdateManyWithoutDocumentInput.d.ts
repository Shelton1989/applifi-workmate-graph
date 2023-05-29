import { CommentCreateManyDocumentInputEnvelope } from "../inputs/CommentCreateManyDocumentInputEnvelope";
import { CommentCreateOrConnectWithoutDocumentInput } from "../inputs/CommentCreateOrConnectWithoutDocumentInput";
import { CommentCreateWithoutDocumentInput } from "../inputs/CommentCreateWithoutDocumentInput";
import { CommentScalarWhereInput } from "../inputs/CommentScalarWhereInput";
import { CommentUpdateManyWithWhereWithoutDocumentInput } from "../inputs/CommentUpdateManyWithWhereWithoutDocumentInput";
import { CommentUpdateWithWhereUniqueWithoutDocumentInput } from "../inputs/CommentUpdateWithWhereUniqueWithoutDocumentInput";
import { CommentUpsertWithWhereUniqueWithoutDocumentInput } from "../inputs/CommentUpsertWithWhereUniqueWithoutDocumentInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";
export declare class CommentUpdateManyWithoutDocumentInput {
    create?: CommentCreateWithoutDocumentInput[] | undefined;
    connectOrCreate?: CommentCreateOrConnectWithoutDocumentInput[] | undefined;
    upsert?: CommentUpsertWithWhereUniqueWithoutDocumentInput[] | undefined;
    createMany?: CommentCreateManyDocumentInputEnvelope | undefined;
    set?: CommentWhereUniqueInput[] | undefined;
    disconnect?: CommentWhereUniqueInput[] | undefined;
    delete?: CommentWhereUniqueInput[] | undefined;
    connect?: CommentWhereUniqueInput[] | undefined;
    update?: CommentUpdateWithWhereUniqueWithoutDocumentInput[] | undefined;
    updateMany?: CommentUpdateManyWithWhereWithoutDocumentInput[] | undefined;
    deleteMany?: CommentScalarWhereInput[] | undefined;
}
