import { TenantCreateInput } from "../../../inputs/TenantCreateInput";
import { TenantUpdateInput } from "../../../inputs/TenantUpdateInput";
import { TenantWhereUniqueInput } from "../../../inputs/TenantWhereUniqueInput";
export declare class UpsertTenantArgs {
    where: TenantWhereUniqueInput;
    create: TenantCreateInput;
    update: TenantUpdateInput;
}
