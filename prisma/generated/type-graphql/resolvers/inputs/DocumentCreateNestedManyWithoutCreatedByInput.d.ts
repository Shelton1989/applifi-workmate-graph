import { DocumentCreateManyCreatedByInputEnvelope } from "../inputs/DocumentCreateManyCreatedByInputEnvelope";
import { DocumentCreateOrConnectWithoutCreatedByInput } from "../inputs/DocumentCreateOrConnectWithoutCreatedByInput";
import { DocumentCreateWithoutCreatedByInput } from "../inputs/DocumentCreateWithoutCreatedByInput";
import { DocumentWhereUniqueInput } from "../inputs/DocumentWhereUniqueInput";
export declare class DocumentCreateNestedManyWithoutCreatedByInput {
    create?: DocumentCreateWithoutCreatedByInput[] | undefined;
    connectOrCreate?: DocumentCreateOrConnectWithoutCreatedByInput[] | undefined;
    createMany?: DocumentCreateManyCreatedByInputEnvelope | undefined;
    connect?: DocumentWhereUniqueInput[] | undefined;
}
