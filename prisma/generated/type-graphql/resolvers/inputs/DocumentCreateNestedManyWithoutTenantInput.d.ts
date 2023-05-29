import { DocumentCreateManyTenantInputEnvelope } from "../inputs/DocumentCreateManyTenantInputEnvelope";
import { DocumentCreateOrConnectWithoutTenantInput } from "../inputs/DocumentCreateOrConnectWithoutTenantInput";
import { DocumentCreateWithoutTenantInput } from "../inputs/DocumentCreateWithoutTenantInput";
import { DocumentWhereUniqueInput } from "../inputs/DocumentWhereUniqueInput";
export declare class DocumentCreateNestedManyWithoutTenantInput {
    create?: DocumentCreateWithoutTenantInput[] | undefined;
    connectOrCreate?: DocumentCreateOrConnectWithoutTenantInput[] | undefined;
    createMany?: DocumentCreateManyTenantInputEnvelope | undefined;
    connect?: DocumentWhereUniqueInput[] | undefined;
}
