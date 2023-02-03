import { AggregateRatingCreateNestedOneWithoutExperienceInput } from "../inputs/AggregateRatingCreateNestedOneWithoutExperienceInput";
import { BookingOrderCreateNestedManyWithoutExperienceInput } from "../inputs/BookingOrderCreateNestedManyWithoutExperienceInput";
import { ExperienceAvailabilityCreateNestedManyWithoutExperienceInput } from "../inputs/ExperienceAvailabilityCreateNestedManyWithoutExperienceInput";
import { ExperienceCreategalleryInput } from "../inputs/ExperienceCreategalleryInput";
import { ExperienceCreatelikedByIdsInput } from "../inputs/ExperienceCreatelikedByIdsInput";
import { FeaturesCreateNestedManyWithoutExperienceInput } from "../inputs/FeaturesCreateNestedManyWithoutExperienceInput";
import { LocationCreateNestedManyWithoutExperienceInput } from "../inputs/LocationCreateNestedManyWithoutExperienceInput";
import { PostCreateNestedManyWithoutExperienceInput } from "../inputs/PostCreateNestedManyWithoutExperienceInput";
import { PriceCreateNestedManyWithoutExperienceInput } from "../inputs/PriceCreateNestedManyWithoutExperienceInput";
import { ReactionCreateNestedManyWithoutExperienceInput } from "../inputs/ReactionCreateNestedManyWithoutExperienceInput";
import { TenantCreateNestedOneWithoutExperiencesInput } from "../inputs/TenantCreateNestedOneWithoutExperiencesInput";
import { UserCreateNestedManyWithoutLikedExperiencesInput } from "../inputs/UserCreateNestedManyWithoutLikedExperiencesInput";
export declare class ExperienceCreateInput {
    id?: string | undefined;
    Tenant: TenantCreateNestedOneWithoutExperiencesInput;
    productLink?: string | undefined;
    stripeProductId?: string | undefined;
    title?: string | undefined;
    description?: string | undefined;
    category?: "CAMPING" | undefined;
    Availability?: ExperienceAvailabilityCreateNestedManyWithoutExperienceInput | undefined;
    Bookings?: BookingOrderCreateNestedManyWithoutExperienceInput | undefined;
    photo?: string | undefined;
    gallery?: ExperienceCreategalleryInput | undefined;
    duration?: number | undefined;
    AggregateRating?: AggregateRatingCreateNestedOneWithoutExperienceInput | undefined;
    publishStatus?: "DRAFT" | "PUBLISHED" | "UNPUBLISHED" | "UNDER_REVIEW" | "PENDING_APPROVAL" | "IN_REVIEW" | "APPROVED" | "NO_ACTION_TAKEN" | "REJECTED_WITH_REASON" | "DECLINED" | "BANNED" | "SOFT_BANNED" | undefined;
    LikedBy?: UserCreateNestedManyWithoutLikedExperiencesInput | undefined;
    likedByIds?: ExperienceCreatelikedByIdsInput | undefined;
    Locations?: LocationCreateNestedManyWithoutExperienceInput | undefined;
    Price?: PriceCreateNestedManyWithoutExperienceInput | undefined;
    Posts?: PostCreateNestedManyWithoutExperienceInput | undefined;
    Features?: FeaturesCreateNestedManyWithoutExperienceInput | undefined;
    Reactions?: ReactionCreateNestedManyWithoutExperienceInput | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
