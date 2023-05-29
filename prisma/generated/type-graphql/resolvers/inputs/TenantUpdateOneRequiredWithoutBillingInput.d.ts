import { TenantCreateOrConnectWithoutBillingInput } from "../inputs/TenantCreateOrConnectWithoutBillingInput";
import { TenantCreateWithoutBillingInput } from "../inputs/TenantCreateWithoutBillingInput";
import { TenantUpdateWithoutBillingInput } from "../inputs/TenantUpdateWithoutBillingInput";
import { TenantUpsertWithoutBillingInput } from "../inputs/TenantUpsertWithoutBillingInput";
import { TenantWhereUniqueInput } from "../inputs/TenantWhereUniqueInput";
export declare class TenantUpdateOneRequiredWithoutBillingInput {
    create?: TenantCreateWithoutBillingInput | undefined;
    connectOrCreate?: TenantCreateOrConnectWithoutBillingInput | undefined;
    upsert?: TenantUpsertWithoutBillingInput | undefined;
    connect?: TenantWhereUniqueInput | undefined;
    update?: TenantUpdateWithoutBillingInput | undefined;
}
