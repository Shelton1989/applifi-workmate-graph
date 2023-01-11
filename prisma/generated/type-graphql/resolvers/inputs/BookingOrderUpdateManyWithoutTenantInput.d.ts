import { BookingOrderCreateManyTenantInputEnvelope } from "../inputs/BookingOrderCreateManyTenantInputEnvelope";
import { BookingOrderCreateOrConnectWithoutTenantInput } from "../inputs/BookingOrderCreateOrConnectWithoutTenantInput";
import { BookingOrderCreateWithoutTenantInput } from "../inputs/BookingOrderCreateWithoutTenantInput";
import { BookingOrderScalarWhereInput } from "../inputs/BookingOrderScalarWhereInput";
import { BookingOrderUpdateManyWithWhereWithoutTenantInput } from "../inputs/BookingOrderUpdateManyWithWhereWithoutTenantInput";
import { BookingOrderUpdateWithWhereUniqueWithoutTenantInput } from "../inputs/BookingOrderUpdateWithWhereUniqueWithoutTenantInput";
import { BookingOrderUpsertWithWhereUniqueWithoutTenantInput } from "../inputs/BookingOrderUpsertWithWhereUniqueWithoutTenantInput";
import { BookingOrderWhereUniqueInput } from "../inputs/BookingOrderWhereUniqueInput";
export declare class BookingOrderUpdateManyWithoutTenantInput {
    create?: BookingOrderCreateWithoutTenantInput[] | undefined;
    connectOrCreate?: BookingOrderCreateOrConnectWithoutTenantInput[] | undefined;
    upsert?: BookingOrderUpsertWithWhereUniqueWithoutTenantInput[] | undefined;
    createMany?: BookingOrderCreateManyTenantInputEnvelope | undefined;
    set?: BookingOrderWhereUniqueInput[] | undefined;
    disconnect?: BookingOrderWhereUniqueInput[] | undefined;
    delete?: BookingOrderWhereUniqueInput[] | undefined;
    connect?: BookingOrderWhereUniqueInput[] | undefined;
    update?: BookingOrderUpdateWithWhereUniqueWithoutTenantInput[] | undefined;
    updateMany?: BookingOrderUpdateManyWithWhereWithoutTenantInput[] | undefined;
    deleteMany?: BookingOrderScalarWhereInput[] | undefined;
}
