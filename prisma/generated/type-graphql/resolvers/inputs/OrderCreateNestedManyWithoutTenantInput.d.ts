import { OrderCreateManyTenantInputEnvelope } from "../inputs/OrderCreateManyTenantInputEnvelope";
import { OrderCreateOrConnectWithoutTenantInput } from "../inputs/OrderCreateOrConnectWithoutTenantInput";
import { OrderCreateWithoutTenantInput } from "../inputs/OrderCreateWithoutTenantInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";
export declare class OrderCreateNestedManyWithoutTenantInput {
    create?: OrderCreateWithoutTenantInput[] | undefined;
    connectOrCreate?: OrderCreateOrConnectWithoutTenantInput[] | undefined;
    createMany?: OrderCreateManyTenantInputEnvelope | undefined;
    connect?: OrderWhereUniqueInput[] | undefined;
}
