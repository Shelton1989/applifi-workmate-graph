import { TenantCreateacceptedUserEmailDomainsInput } from "../inputs/TenantCreateacceptedUserEmailDomainsInput";
import { TenantCreateexperienceImagesInput } from "../inputs/TenantCreateexperienceImagesInput";
export declare class TenantCreateManyInput {
    id?: string | undefined;
    name: string;
    slug: string;
    description?: string | undefined;
    logoImage?: string | undefined;
    avatar?: string | undefined;
    coverImage?: string | undefined;
    experienceImages?: TenantCreateexperienceImagesInput | undefined;
    acceptedUserEmailDomains?: TenantCreateacceptedUserEmailDomainsInput | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
