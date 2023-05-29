import { TenantCreateOrConnectWithoutDocumentsInput } from "../inputs/TenantCreateOrConnectWithoutDocumentsInput";
import { TenantCreateWithoutDocumentsInput } from "../inputs/TenantCreateWithoutDocumentsInput";
import { TenantUpdateWithoutDocumentsInput } from "../inputs/TenantUpdateWithoutDocumentsInput";
import { TenantUpsertWithoutDocumentsInput } from "../inputs/TenantUpsertWithoutDocumentsInput";
import { TenantWhereUniqueInput } from "../inputs/TenantWhereUniqueInput";
export declare class TenantUpdateOneRequiredWithoutDocumentsInput {
    create?: TenantCreateWithoutDocumentsInput | undefined;
    connectOrCreate?: TenantCreateOrConnectWithoutDocumentsInput | undefined;
    upsert?: TenantUpsertWithoutDocumentsInput | undefined;
    connect?: TenantWhereUniqueInput | undefined;
    update?: TenantUpdateWithoutDocumentsInput | undefined;
}
