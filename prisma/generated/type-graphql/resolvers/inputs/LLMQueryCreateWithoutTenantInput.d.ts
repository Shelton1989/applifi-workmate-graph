import { UserCreateNestedOneWithoutQueriesInput } from "../inputs/UserCreateNestedOneWithoutQueriesInput";
export declare class LLMQueryCreateWithoutTenantInput {
    id?: string | undefined;
    queryLink?: string | undefined;
    queryText?: string | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    User?: UserCreateNestedOneWithoutQueriesInput | undefined;
}
