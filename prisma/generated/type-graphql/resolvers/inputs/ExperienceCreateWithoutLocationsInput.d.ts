import { AggregateRatingCreateNestedOneWithoutExperienceInput } from "../inputs/AggregateRatingCreateNestedOneWithoutExperienceInput";
import { ExperienceAvailabilityCreateNestedManyWithoutExperienceInput } from "../inputs/ExperienceAvailabilityCreateNestedManyWithoutExperienceInput";
import { ExperienceCreategalleryInput } from "../inputs/ExperienceCreategalleryInput";
import { ExperienceCreatelikedByIdsInput } from "../inputs/ExperienceCreatelikedByIdsInput";
import { PostCreateNestedManyWithoutExperienceInput } from "../inputs/PostCreateNestedManyWithoutExperienceInput";
import { PriceCreateNestedManyWithoutExperienceInput } from "../inputs/PriceCreateNestedManyWithoutExperienceInput";
import { TenantCreateNestedOneWithoutExperiencesInput } from "../inputs/TenantCreateNestedOneWithoutExperiencesInput";
import { UserCreateNestedManyWithoutLikedExperiencesInput } from "../inputs/UserCreateNestedManyWithoutLikedExperiencesInput";
export declare class ExperienceCreateWithoutLocationsInput {
    id?: string | undefined;
    Tenant: TenantCreateNestedOneWithoutExperiencesInput;
    productLink?: string | undefined;
    stripeProductId?: string | undefined;
    title?: string | undefined;
    description?: string | undefined;
    category?: "CAMPING" | undefined;
    Availability?: ExperienceAvailabilityCreateNestedManyWithoutExperienceInput | undefined;
    photo?: string | undefined;
    gallery?: ExperienceCreategalleryInput | undefined;
    duration?: number | undefined;
    AggregateRating?: AggregateRatingCreateNestedOneWithoutExperienceInput | undefined;
    publishStatus?: "DRAFT" | "PUBLISHED" | "UNPUBLISHED" | "UNDER_REVIEW" | "PENDING_APPROVAL" | "IN_REVIEW" | "APPROVED" | "NO_ACTION_TAKEN" | "REJECTED_WITH_REASON" | "DECLINED" | "BANNED" | "SOFT_BANNED" | undefined;
    LikedBy?: UserCreateNestedManyWithoutLikedExperiencesInput | undefined;
    likedByIds?: ExperienceCreatelikedByIdsInput | undefined;
    Price?: PriceCreateNestedManyWithoutExperienceInput | undefined;
    Posts?: PostCreateNestedManyWithoutExperienceInput | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
