import { TenantCreateOrConnectWithoutOrdersInput } from "../inputs/TenantCreateOrConnectWithoutOrdersInput";
import { TenantCreateWithoutOrdersInput } from "../inputs/TenantCreateWithoutOrdersInput";
import { TenantUpdateWithoutOrdersInput } from "../inputs/TenantUpdateWithoutOrdersInput";
import { TenantUpsertWithoutOrdersInput } from "../inputs/TenantUpsertWithoutOrdersInput";
import { TenantWhereUniqueInput } from "../inputs/TenantWhereUniqueInput";
export declare class TenantUpdateOneRequiredWithoutOrdersInput {
    create?: TenantCreateWithoutOrdersInput | undefined;
    connectOrCreate?: TenantCreateOrConnectWithoutOrdersInput | undefined;
    upsert?: TenantUpsertWithoutOrdersInput | undefined;
    connect?: TenantWhereUniqueInput | undefined;
    update?: TenantUpdateWithoutOrdersInput | undefined;
}
