import { BillingCreateOrConnectWithoutTenantInput } from "../inputs/BillingCreateOrConnectWithoutTenantInput";
import { BillingCreateWithoutTenantInput } from "../inputs/BillingCreateWithoutTenantInput";
import { BillingUpdateWithoutTenantInput } from "../inputs/BillingUpdateWithoutTenantInput";
import { BillingUpsertWithoutTenantInput } from "../inputs/BillingUpsertWithoutTenantInput";
import { BillingWhereUniqueInput } from "../inputs/BillingWhereUniqueInput";
export declare class BillingUpdateOneWithoutTenantInput {
    create?: BillingCreateWithoutTenantInput | undefined;
    connectOrCreate?: BillingCreateOrConnectWithoutTenantInput | undefined;
    upsert?: BillingUpsertWithoutTenantInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    connect?: BillingWhereUniqueInput | undefined;
    update?: BillingUpdateWithoutTenantInput | undefined;
}
