import { TenantCreateNestedOneWithoutQueriesInput } from "../inputs/TenantCreateNestedOneWithoutQueriesInput";
import { UserCreateNestedOneWithoutQueriesInput } from "../inputs/UserCreateNestedOneWithoutQueriesInput";
export declare class QueryCreateInput {
    id?: string | undefined;
    Tenant: TenantCreateNestedOneWithoutQueriesInput;
    queryLink?: string | undefined;
    queryText?: string | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    User?: UserCreateNestedOneWithoutQueriesInput | undefined;
}
