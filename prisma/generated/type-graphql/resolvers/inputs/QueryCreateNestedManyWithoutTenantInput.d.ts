import { QueryCreateManyTenantInputEnvelope } from "../inputs/QueryCreateManyTenantInputEnvelope";
import { QueryCreateOrConnectWithoutTenantInput } from "../inputs/QueryCreateOrConnectWithoutTenantInput";
import { QueryCreateWithoutTenantInput } from "../inputs/QueryCreateWithoutTenantInput";
import { QueryWhereUniqueInput } from "../inputs/QueryWhereUniqueInput";
export declare class QueryCreateNestedManyWithoutTenantInput {
    create?: QueryCreateWithoutTenantInput[] | undefined;
    connectOrCreate?: QueryCreateOrConnectWithoutTenantInput[] | undefined;
    createMany?: QueryCreateManyTenantInputEnvelope | undefined;
    connect?: QueryWhereUniqueInput[] | undefined;
}
