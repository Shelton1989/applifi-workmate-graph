import { TenantCreateNestedOneWithoutQueriesInput } from "../inputs/TenantCreateNestedOneWithoutQueriesInput";
import { UserCreateNestedOneWithoutQueriesInput } from "../inputs/UserCreateNestedOneWithoutQueriesInput";
export declare class LLMQueryCreateInput {
    id?: string | undefined;
    Tenant: TenantCreateNestedOneWithoutQueriesInput;
    queryLink?: string | undefined;
    question?: string | undefined;
    response?: string | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    User?: UserCreateNestedOneWithoutQueriesInput | undefined;
}
