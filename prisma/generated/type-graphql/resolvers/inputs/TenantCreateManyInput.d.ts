import { TenantCreateexperienceImagesInput } from "../inputs/TenantCreateexperienceImagesInput";
export declare class TenantCreateManyInput {
    id?: string | undefined;
    name: string;
    slug: string;
    avatar?: string | undefined;
    coverImage?: string | undefined;
    experienceImages?: TenantCreateexperienceImagesInput | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
