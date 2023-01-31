import { BookingOrderCreateNestedManyWithoutTenantInput } from "../inputs/BookingOrderCreateNestedManyWithoutTenantInput";
import { LocationCreateNestedManyWithoutTenantInput } from "../inputs/LocationCreateNestedManyWithoutTenantInput";
import { TenantCreateexperienceImagesInput } from "../inputs/TenantCreateexperienceImagesInput";
import { UserCreateNestedManyWithoutTenantInput } from "../inputs/UserCreateNestedManyWithoutTenantInput";
export declare class TenantCreateWithoutExperiencesInput {
    id?: string | undefined;
    name: string;
    slug: string;
    description?: string | undefined;
    logoImage?: string | undefined;
    avatar?: string | undefined;
    coverImage?: string | undefined;
    experienceImages?: TenantCreateexperienceImagesInput | undefined;
    Users?: UserCreateNestedManyWithoutTenantInput | undefined;
    BookingOrders?: BookingOrderCreateNestedManyWithoutTenantInput | undefined;
    Locations?: LocationCreateNestedManyWithoutTenantInput | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
