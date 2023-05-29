import { BillingCreateNestedOneWithoutTenantInput } from "../inputs/BillingCreateNestedOneWithoutTenantInput";
import { LLMQueryCreateNestedManyWithoutTenantInput } from "../inputs/LLMQueryCreateNestedManyWithoutTenantInput";
import { TenantCreateacceptedUserEmailDomainsInput } from "../inputs/TenantCreateacceptedUserEmailDomainsInput";
import { UserCreateNestedManyWithoutTenantInput } from "../inputs/UserCreateNestedManyWithoutTenantInput";
export declare class TenantCreateWithoutDocumentsInput {
    id?: string | undefined;
    name: string;
    slug: string;
    description?: string | undefined;
    logoImage?: string | undefined;
    avatar?: string | undefined;
    Users?: UserCreateNestedManyWithoutTenantInput | undefined;
    Queries?: LLMQueryCreateNestedManyWithoutTenantInput | undefined;
    Billing?: BillingCreateNestedOneWithoutTenantInput | undefined;
    acceptedUserEmailDomains?: TenantCreateacceptedUserEmailDomainsInput | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
