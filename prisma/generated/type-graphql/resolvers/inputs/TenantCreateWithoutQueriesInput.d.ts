import { BillingCreateNestedOneWithoutTenantInput } from "../inputs/BillingCreateNestedOneWithoutTenantInput";
import { DocumentCreateNestedManyWithoutTenantInput } from "../inputs/DocumentCreateNestedManyWithoutTenantInput";
import { TenantCreateacceptedUserEmailDomainsInput } from "../inputs/TenantCreateacceptedUserEmailDomainsInput";
import { UserCreateNestedManyWithoutTenantInput } from "../inputs/UserCreateNestedManyWithoutTenantInput";
export declare class TenantCreateWithoutQueriesInput {
    id?: string | undefined;
    name: string;
    slug: string;
    description?: string | undefined;
    logoImage?: string | undefined;
    avatar?: string | undefined;
    Users?: UserCreateNestedManyWithoutTenantInput | undefined;
    Documents?: DocumentCreateNestedManyWithoutTenantInput | undefined;
    Billing?: BillingCreateNestedOneWithoutTenantInput | undefined;
    acceptedUserEmailDomains?: TenantCreateacceptedUserEmailDomainsInput | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
