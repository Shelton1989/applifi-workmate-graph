import { BillingCreateNestedOneWithoutTenantInput } from "../inputs/BillingCreateNestedOneWithoutTenantInput";
import { DocumentCreateNestedManyWithoutTenantInput } from "../inputs/DocumentCreateNestedManyWithoutTenantInput";
import { QueryCreateNestedManyWithoutTenantInput } from "../inputs/QueryCreateNestedManyWithoutTenantInput";
import { TenantCreateacceptedUserEmailDomainsInput } from "../inputs/TenantCreateacceptedUserEmailDomainsInput";
export declare class TenantCreateWithoutUsersInput {
    id?: string | undefined;
    name: string;
    slug: string;
    description?: string | undefined;
    logoImage?: string | undefined;
    avatar?: string | undefined;
    Queries?: QueryCreateNestedManyWithoutTenantInput | undefined;
    Documents?: DocumentCreateNestedManyWithoutTenantInput | undefined;
    Billing?: BillingCreateNestedOneWithoutTenantInput | undefined;
    acceptedUserEmailDomains?: TenantCreateacceptedUserEmailDomainsInput | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
