import { UserCreateNestedOneWithoutQueriesInput } from "../inputs/UserCreateNestedOneWithoutQueriesInput";
export declare class QueryCreateWithoutTenantInput {
    id?: string | undefined;
    queryLink?: string | undefined;
    queryText?: string | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    User?: UserCreateNestedOneWithoutQueriesInput | undefined;
}
