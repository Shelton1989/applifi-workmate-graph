import { QueryCreateManyTenantInputEnvelope } from "../inputs/QueryCreateManyTenantInputEnvelope";
import { QueryCreateOrConnectWithoutTenantInput } from "../inputs/QueryCreateOrConnectWithoutTenantInput";
import { QueryCreateWithoutTenantInput } from "../inputs/QueryCreateWithoutTenantInput";
import { QueryScalarWhereInput } from "../inputs/QueryScalarWhereInput";
import { QueryUpdateManyWithWhereWithoutTenantInput } from "../inputs/QueryUpdateManyWithWhereWithoutTenantInput";
import { QueryUpdateWithWhereUniqueWithoutTenantInput } from "../inputs/QueryUpdateWithWhereUniqueWithoutTenantInput";
import { QueryUpsertWithWhereUniqueWithoutTenantInput } from "../inputs/QueryUpsertWithWhereUniqueWithoutTenantInput";
import { QueryWhereUniqueInput } from "../inputs/QueryWhereUniqueInput";
export declare class QueryUpdateManyWithoutTenantInput {
    create?: QueryCreateWithoutTenantInput[] | undefined;
    connectOrCreate?: QueryCreateOrConnectWithoutTenantInput[] | undefined;
    upsert?: QueryUpsertWithWhereUniqueWithoutTenantInput[] | undefined;
    createMany?: QueryCreateManyTenantInputEnvelope | undefined;
    set?: QueryWhereUniqueInput[] | undefined;
    disconnect?: QueryWhereUniqueInput[] | undefined;
    delete?: QueryWhereUniqueInput[] | undefined;
    connect?: QueryWhereUniqueInput[] | undefined;
    update?: QueryUpdateWithWhereUniqueWithoutTenantInput[] | undefined;
    updateMany?: QueryUpdateManyWithWhereWithoutTenantInput[] | undefined;
    deleteMany?: QueryScalarWhereInput[] | undefined;
}
