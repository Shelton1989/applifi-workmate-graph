import { BookingOrderCreateNestedManyWithoutTenantInput } from "../inputs/BookingOrderCreateNestedManyWithoutTenantInput";
import { ExperienceCreateNestedManyWithoutTenantInput } from "../inputs/ExperienceCreateNestedManyWithoutTenantInput";
import { LocationCreateNestedManyWithoutTenantInput } from "../inputs/LocationCreateNestedManyWithoutTenantInput";
import { TenantCreateexperienceImagesInput } from "../inputs/TenantCreateexperienceImagesInput";
export declare class TenantCreateWithoutUsersInput {
    id?: string | undefined;
    name: string;
    slug: string;
    description?: string | undefined;
    avatar?: string | undefined;
    coverImage?: string | undefined;
    experienceImages?: TenantCreateexperienceImagesInput | undefined;
    Experiences?: ExperienceCreateNestedManyWithoutTenantInput | undefined;
    BookingOrders?: BookingOrderCreateNestedManyWithoutTenantInput | undefined;
    Locations?: LocationCreateNestedManyWithoutTenantInput | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
