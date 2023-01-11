import { ExperienceCreateNestedManyWithoutTenantInput } from "../inputs/ExperienceCreateNestedManyWithoutTenantInput";
import { LocationCreateNestedManyWithoutTenantInput } from "../inputs/LocationCreateNestedManyWithoutTenantInput";
import { TenantCreateexperienceImagesInput } from "../inputs/TenantCreateexperienceImagesInput";
import { UserCreateNestedManyWithoutTenantInput } from "../inputs/UserCreateNestedManyWithoutTenantInput";
export declare class TenantCreateWithoutBookingOrdersInput {
    id?: string | undefined;
    name: string;
    slug: string;
    avatar?: string | undefined;
    coverImage?: string | undefined;
    experienceImages?: TenantCreateexperienceImagesInput | undefined;
    Users?: UserCreateNestedManyWithoutTenantInput | undefined;
    Experiences?: ExperienceCreateNestedManyWithoutTenantInput | undefined;
    Locations?: LocationCreateNestedManyWithoutTenantInput | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
