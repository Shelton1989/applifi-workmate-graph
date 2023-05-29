import { TenantCreateOrConnectWithoutDocumentsInput } from "../inputs/TenantCreateOrConnectWithoutDocumentsInput";
import { TenantCreateWithoutDocumentsInput } from "../inputs/TenantCreateWithoutDocumentsInput";
import { TenantWhereUniqueInput } from "../inputs/TenantWhereUniqueInput";
export declare class TenantCreateNestedOneWithoutDocumentsInput {
    create?: TenantCreateWithoutDocumentsInput | undefined;
    connectOrCreate?: TenantCreateOrConnectWithoutDocumentsInput | undefined;
    connect?: TenantWhereUniqueInput | undefined;
}
