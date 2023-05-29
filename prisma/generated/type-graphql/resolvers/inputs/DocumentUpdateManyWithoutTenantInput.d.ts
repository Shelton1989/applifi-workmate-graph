import { DocumentCreateManyTenantInputEnvelope } from "../inputs/DocumentCreateManyTenantInputEnvelope";
import { DocumentCreateOrConnectWithoutTenantInput } from "../inputs/DocumentCreateOrConnectWithoutTenantInput";
import { DocumentCreateWithoutTenantInput } from "../inputs/DocumentCreateWithoutTenantInput";
import { DocumentScalarWhereInput } from "../inputs/DocumentScalarWhereInput";
import { DocumentUpdateManyWithWhereWithoutTenantInput } from "../inputs/DocumentUpdateManyWithWhereWithoutTenantInput";
import { DocumentUpdateWithWhereUniqueWithoutTenantInput } from "../inputs/DocumentUpdateWithWhereUniqueWithoutTenantInput";
import { DocumentUpsertWithWhereUniqueWithoutTenantInput } from "../inputs/DocumentUpsertWithWhereUniqueWithoutTenantInput";
import { DocumentWhereUniqueInput } from "../inputs/DocumentWhereUniqueInput";
export declare class DocumentUpdateManyWithoutTenantInput {
    create?: DocumentCreateWithoutTenantInput[] | undefined;
    connectOrCreate?: DocumentCreateOrConnectWithoutTenantInput[] | undefined;
    upsert?: DocumentUpsertWithWhereUniqueWithoutTenantInput[] | undefined;
    createMany?: DocumentCreateManyTenantInputEnvelope | undefined;
    set?: DocumentWhereUniqueInput[] | undefined;
    disconnect?: DocumentWhereUniqueInput[] | undefined;
    delete?: DocumentWhereUniqueInput[] | undefined;
    connect?: DocumentWhereUniqueInput[] | undefined;
    update?: DocumentUpdateWithWhereUniqueWithoutTenantInput[] | undefined;
    updateMany?: DocumentUpdateManyWithWhereWithoutTenantInput[] | undefined;
    deleteMany?: DocumentScalarWhereInput[] | undefined;
}
