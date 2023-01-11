import { TenantCreateOrConnectWithoutBookingOrdersInput } from "../inputs/TenantCreateOrConnectWithoutBookingOrdersInput";
import { TenantCreateWithoutBookingOrdersInput } from "../inputs/TenantCreateWithoutBookingOrdersInput";
import { TenantUpdateWithoutBookingOrdersInput } from "../inputs/TenantUpdateWithoutBookingOrdersInput";
import { TenantUpsertWithoutBookingOrdersInput } from "../inputs/TenantUpsertWithoutBookingOrdersInput";
import { TenantWhereUniqueInput } from "../inputs/TenantWhereUniqueInput";
export declare class TenantUpdateOneRequiredWithoutBookingOrdersInput {
    create?: TenantCreateWithoutBookingOrdersInput | undefined;
    connectOrCreate?: TenantCreateOrConnectWithoutBookingOrdersInput | undefined;
    upsert?: TenantUpsertWithoutBookingOrdersInput | undefined;
    connect?: TenantWhereUniqueInput | undefined;
    update?: TenantUpdateWithoutBookingOrdersInput | undefined;
}
