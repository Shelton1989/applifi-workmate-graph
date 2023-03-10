import { LocationCreateNestedManyWithoutTenantInput } from "../inputs/LocationCreateNestedManyWithoutTenantInput";
import { MealCreateNestedManyWithoutTenantInput } from "../inputs/MealCreateNestedManyWithoutTenantInput";
import { OrderCreateNestedManyWithoutTenantInput } from "../inputs/OrderCreateNestedManyWithoutTenantInput";
import { TenantCreateMealImagesInput } from "../inputs/TenantCreateMealImagesInput";
import { TenantCreateacceptedUserEmailDomainsInput } from "../inputs/TenantCreateacceptedUserEmailDomainsInput";
export declare class TenantCreateWithoutUsersInput {
    id?: string | undefined;
    name: string;
    slug: string;
    description?: string | undefined;
    logoImage?: string | undefined;
    avatar?: string | undefined;
    coverImage?: string | undefined;
    MealImages?: TenantCreateMealImagesInput | undefined;
    Meals?: MealCreateNestedManyWithoutTenantInput | undefined;
    Orders?: OrderCreateNestedManyWithoutTenantInput | undefined;
    Locations?: LocationCreateNestedManyWithoutTenantInput | undefined;
    acceptedUserEmailDomains?: TenantCreateacceptedUserEmailDomainsInput | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
