import { BookingOrderCreateManyTenantInputEnvelope } from "../inputs/BookingOrderCreateManyTenantInputEnvelope";
import { BookingOrderCreateOrConnectWithoutTenantInput } from "../inputs/BookingOrderCreateOrConnectWithoutTenantInput";
import { BookingOrderCreateWithoutTenantInput } from "../inputs/BookingOrderCreateWithoutTenantInput";
import { BookingOrderWhereUniqueInput } from "../inputs/BookingOrderWhereUniqueInput";
export declare class BookingOrderCreateNestedManyWithoutTenantInput {
    create?: BookingOrderCreateWithoutTenantInput[] | undefined;
    connectOrCreate?: BookingOrderCreateOrConnectWithoutTenantInput[] | undefined;
    createMany?: BookingOrderCreateManyTenantInputEnvelope | undefined;
    connect?: BookingOrderWhereUniqueInput[] | undefined;
}
