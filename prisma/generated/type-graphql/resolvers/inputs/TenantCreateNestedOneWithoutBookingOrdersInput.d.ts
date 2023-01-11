import { TenantCreateOrConnectWithoutBookingOrdersInput } from "../inputs/TenantCreateOrConnectWithoutBookingOrdersInput";
import { TenantCreateWithoutBookingOrdersInput } from "../inputs/TenantCreateWithoutBookingOrdersInput";
import { TenantWhereUniqueInput } from "../inputs/TenantWhereUniqueInput";
export declare class TenantCreateNestedOneWithoutBookingOrdersInput {
    create?: TenantCreateWithoutBookingOrdersInput | undefined;
    connectOrCreate?: TenantCreateOrConnectWithoutBookingOrdersInput | undefined;
    connect?: TenantWhereUniqueInput | undefined;
}
