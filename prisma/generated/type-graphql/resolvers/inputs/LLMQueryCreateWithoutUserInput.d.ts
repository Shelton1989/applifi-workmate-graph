import { TenantCreateNestedOneWithoutQueriesInput } from "../inputs/TenantCreateNestedOneWithoutQueriesInput";
export declare class LLMQueryCreateWithoutUserInput {
    id?: string | undefined;
    Tenant: TenantCreateNestedOneWithoutQueriesInput;
    queryLink?: string | undefined;
    question?: string | undefined;
    response?: string | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
