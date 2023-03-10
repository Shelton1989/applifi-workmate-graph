import { OrderCreateManyTenantInputEnvelope } from "../inputs/OrderCreateManyTenantInputEnvelope";
import { OrderCreateOrConnectWithoutTenantInput } from "../inputs/OrderCreateOrConnectWithoutTenantInput";
import { OrderCreateWithoutTenantInput } from "../inputs/OrderCreateWithoutTenantInput";
import { OrderScalarWhereInput } from "../inputs/OrderScalarWhereInput";
import { OrderUpdateManyWithWhereWithoutTenantInput } from "../inputs/OrderUpdateManyWithWhereWithoutTenantInput";
import { OrderUpdateWithWhereUniqueWithoutTenantInput } from "../inputs/OrderUpdateWithWhereUniqueWithoutTenantInput";
import { OrderUpsertWithWhereUniqueWithoutTenantInput } from "../inputs/OrderUpsertWithWhereUniqueWithoutTenantInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";
export declare class OrderUpdateManyWithoutTenantInput {
    create?: OrderCreateWithoutTenantInput[] | undefined;
    connectOrCreate?: OrderCreateOrConnectWithoutTenantInput[] | undefined;
    upsert?: OrderUpsertWithWhereUniqueWithoutTenantInput[] | undefined;
    createMany?: OrderCreateManyTenantInputEnvelope | undefined;
    set?: OrderWhereUniqueInput[] | undefined;
    disconnect?: OrderWhereUniqueInput[] | undefined;
    delete?: OrderWhereUniqueInput[] | undefined;
    connect?: OrderWhereUniqueInput[] | undefined;
    update?: OrderUpdateWithWhereUniqueWithoutTenantInput[] | undefined;
    updateMany?: OrderUpdateManyWithWhereWithoutTenantInput[] | undefined;
    deleteMany?: OrderScalarWhereInput[] | undefined;
}
