import { UserCreateNestedOneWithoutQueriesInput } from "../inputs/UserCreateNestedOneWithoutQueriesInput";
export declare class LLMQueryCreateWithoutTenantInput {
    id?: string | undefined;
    queryLink?: string | undefined;
    question?: string | undefined;
    response?: string | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    User?: UserCreateNestedOneWithoutQueriesInput | undefined;
}
