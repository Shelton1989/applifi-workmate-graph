import { TenantCreateNestedOneWithoutQueriesInput } from "../inputs/TenantCreateNestedOneWithoutQueriesInput";
export declare class LLMQueryCreateWithoutUserInput {
    id?: string | undefined;
    Tenant: TenantCreateNestedOneWithoutQueriesInput;
    queryLink?: string | undefined;
    queryText?: string | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
