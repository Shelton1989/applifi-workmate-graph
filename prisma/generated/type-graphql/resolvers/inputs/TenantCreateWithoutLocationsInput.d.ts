import { MealCreateNestedManyWithoutTenantInput } from "../inputs/MealCreateNestedManyWithoutTenantInput";
import { OrderCreateNestedManyWithoutTenantInput } from "../inputs/OrderCreateNestedManyWithoutTenantInput";
import { TenantCreateacceptedUserEmailDomainsInput } from "../inputs/TenantCreateacceptedUserEmailDomainsInput";
import { TenantCreateexperienceImagesInput } from "../inputs/TenantCreateexperienceImagesInput";
import { UserCreateNestedManyWithoutTenantInput } from "../inputs/UserCreateNestedManyWithoutTenantInput";
export declare class TenantCreateWithoutLocationsInput {
    id?: string | undefined;
    name: string;
    slug: string;
    description?: string | undefined;
    logoImage?: string | undefined;
    avatar?: string | undefined;
    coverImage?: string | undefined;
    experienceImages?: TenantCreateexperienceImagesInput | undefined;
    Users?: UserCreateNestedManyWithoutTenantInput | undefined;
    Meals?: MealCreateNestedManyWithoutTenantInput | undefined;
    Orders?: OrderCreateNestedManyWithoutTenantInput | undefined;
    acceptedUserEmailDomains?: TenantCreateacceptedUserEmailDomainsInput | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
