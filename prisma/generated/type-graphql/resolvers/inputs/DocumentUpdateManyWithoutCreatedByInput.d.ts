import { DocumentCreateManyCreatedByInputEnvelope } from "../inputs/DocumentCreateManyCreatedByInputEnvelope";
import { DocumentCreateOrConnectWithoutCreatedByInput } from "../inputs/DocumentCreateOrConnectWithoutCreatedByInput";
import { DocumentCreateWithoutCreatedByInput } from "../inputs/DocumentCreateWithoutCreatedByInput";
import { DocumentScalarWhereInput } from "../inputs/DocumentScalarWhereInput";
import { DocumentUpdateManyWithWhereWithoutCreatedByInput } from "../inputs/DocumentUpdateManyWithWhereWithoutCreatedByInput";
import { DocumentUpdateWithWhereUniqueWithoutCreatedByInput } from "../inputs/DocumentUpdateWithWhereUniqueWithoutCreatedByInput";
import { DocumentUpsertWithWhereUniqueWithoutCreatedByInput } from "../inputs/DocumentUpsertWithWhereUniqueWithoutCreatedByInput";
import { DocumentWhereUniqueInput } from "../inputs/DocumentWhereUniqueInput";
export declare class DocumentUpdateManyWithoutCreatedByInput {
    create?: DocumentCreateWithoutCreatedByInput[] | undefined;
    connectOrCreate?: DocumentCreateOrConnectWithoutCreatedByInput[] | undefined;
    upsert?: DocumentUpsertWithWhereUniqueWithoutCreatedByInput[] | undefined;
    createMany?: DocumentCreateManyCreatedByInputEnvelope | undefined;
    set?: DocumentWhereUniqueInput[] | undefined;
    disconnect?: DocumentWhereUniqueInput[] | undefined;
    delete?: DocumentWhereUniqueInput[] | undefined;
    connect?: DocumentWhereUniqueInput[] | undefined;
    update?: DocumentUpdateWithWhereUniqueWithoutCreatedByInput[] | undefined;
    updateMany?: DocumentUpdateManyWithWhereWithoutCreatedByInput[] | undefined;
    deleteMany?: DocumentScalarWhereInput[] | undefined;
}
