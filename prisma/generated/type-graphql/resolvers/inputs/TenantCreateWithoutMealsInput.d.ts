import { LocationCreateNestedManyWithoutTenantInput } from "../inputs/LocationCreateNestedManyWithoutTenantInput";
import { OrderCreateNestedManyWithoutTenantInput } from "../inputs/OrderCreateNestedManyWithoutTenantInput";
import { TenantCreateMealImagesInput } from "../inputs/TenantCreateMealImagesInput";
import { TenantCreateacceptedUserEmailDomainsInput } from "../inputs/TenantCreateacceptedUserEmailDomainsInput";
import { UserCreateNestedManyWithoutTenantInput } from "../inputs/UserCreateNestedManyWithoutTenantInput";
export declare class TenantCreateWithoutMealsInput {
    id?: string | undefined;
    name: string;
    slug: string;
    description?: string | undefined;
    logoImage?: string | undefined;
    avatar?: string | undefined;
    coverImage?: string | undefined;
    MealImages?: TenantCreateMealImagesInput | undefined;
    Users?: UserCreateNestedManyWithoutTenantInput | undefined;
    Orders?: OrderCreateNestedManyWithoutTenantInput | undefined;
    Locations?: LocationCreateNestedManyWithoutTenantInput | undefined;
    acceptedUserEmailDomains?: TenantCreateacceptedUserEmailDomainsInput | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}