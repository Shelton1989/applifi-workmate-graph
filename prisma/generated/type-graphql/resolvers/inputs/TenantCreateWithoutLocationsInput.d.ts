import { BookingOrderCreateNestedManyWithoutTenantInput } from "../inputs/BookingOrderCreateNestedManyWithoutTenantInput";
import { ExperienceCreateNestedManyWithoutTenantInput } from "../inputs/ExperienceCreateNestedManyWithoutTenantInput";
import { TenantCreateexperienceImagesInput } from "../inputs/TenantCreateexperienceImagesInput";
import { UserCreateNestedManyWithoutTenantInput } from "../inputs/UserCreateNestedManyWithoutTenantInput";
export declare class TenantCreateWithoutLocationsInput {
    id?: string | undefined;
    name: string;
    slug: string;
    avatar?: string | undefined;
    coverImage?: string | undefined;
    experienceImages?: TenantCreateexperienceImagesInput | undefined;
    Users?: UserCreateNestedManyWithoutTenantInput | undefined;
    Experiences?: ExperienceCreateNestedManyWithoutTenantInput | undefined;
    BookingOrders?: BookingOrderCreateNestedManyWithoutTenantInput | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
