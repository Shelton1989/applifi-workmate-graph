import { LocationCreateNestedManyWithoutTenantInput } from "../inputs/LocationCreateNestedManyWithoutTenantInput";
import { MealCreateNestedManyWithoutTenantInput } from "../inputs/MealCreateNestedManyWithoutTenantInput";
import { OrderCreateNestedManyWithoutTenantInput } from "../inputs/OrderCreateNestedManyWithoutTenantInput";
import { TenantCreateacceptedUserEmailDomainsInput } from "../inputs/TenantCreateacceptedUserEmailDomainsInput";
import { TenantCreateexperienceImagesInput } from "../inputs/TenantCreateexperienceImagesInput";
export declare class TenantCreateWithoutUsersInput {
    id?: string | undefined;
    name: string;
    slug: string;
    description?: string | undefined;
    logoImage?: string | undefined;
    avatar?: string | undefined;
    coverImage?: string | undefined;
    experienceImages?: TenantCreateexperienceImagesInput | undefined;
    Meals?: MealCreateNestedManyWithoutTenantInput | undefined;
    Orders?: OrderCreateNestedManyWithoutTenantInput | undefined;
    Locations?: LocationCreateNestedManyWithoutTenantInput | undefined;
    acceptedUserEmailDomains?: TenantCreateacceptedUserEmailDomainsInput | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
