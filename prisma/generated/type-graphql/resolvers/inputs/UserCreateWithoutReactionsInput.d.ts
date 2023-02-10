import { BookingOrderCreateNestedManyWithoutBuyerInput } from "../inputs/BookingOrderCreateNestedManyWithoutBuyerInput";
import { CommentCreateNestedManyWithoutAuthorInput } from "../inputs/CommentCreateNestedManyWithoutAuthorInput";
import { ExperienceCreateNestedManyWithoutLikedByInput } from "../inputs/ExperienceCreateNestedManyWithoutLikedByInput";
import { NotificationCreateNestedManyWithoutActorInput } from "../inputs/NotificationCreateNestedManyWithoutActorInput";
import { NotificationCreateNestedManyWithoutUserInput } from "../inputs/NotificationCreateNestedManyWithoutUserInput";
import { NotificationSettingsCreateNestedOneWithoutUserInput } from "../inputs/NotificationSettingsCreateNestedOneWithoutUserInput";
import { PostCreateNestedManyWithoutAuthorInput } from "../inputs/PostCreateNestedManyWithoutAuthorInput";
import { ReplyCreateNestedManyWithoutAuthorInput } from "../inputs/ReplyCreateNestedManyWithoutAuthorInput";
import { RequestCreateNestedManyWithoutReporterInput } from "../inputs/RequestCreateNestedManyWithoutReporterInput";
import { TenantCreateNestedOneWithoutUsersInput } from "../inputs/TenantCreateNestedOneWithoutUsersInput";
import { UserCreateNestedManyWithoutFollowersInput } from "../inputs/UserCreateNestedManyWithoutFollowersInput";
import { UserCreateNestedManyWithoutFollowingInput } from "../inputs/UserCreateNestedManyWithoutFollowingInput";
import { UserCreateexperienceIdsInput } from "../inputs/UserCreateexperienceIdsInput";
import { UserCreatefollowerIdsInput } from "../inputs/UserCreatefollowerIdsInput";
import { UserCreatefollowingIdsInput } from "../inputs/UserCreatefollowingIdsInput";
import { UserCreaterolesInput } from "../inputs/UserCreaterolesInput";
export declare class UserCreateWithoutReactionsInput {
    Tenant?: TenantCreateNestedOneWithoutUsersInput | undefined;
    uid: string;
    uuid?: string | undefined;
    id?: string | undefined;
    username: string;
    email: string;
    roles?: UserCreaterolesInput | undefined;
    firstName?: string | undefined;
    lastName?: string | undefined;
    avatar?: string | undefined;
    coverImage?: string | undefined;
    dateOfBirth?: Date | undefined;
    biography?: string | undefined;
    hasAcceptedTerms?: boolean | undefined;
    isFirstTimeUser?: boolean | undefined;
    isVerified?: boolean | undefined;
    NotificationSettings?: NotificationSettingsCreateNestedOneWithoutUserInput | undefined;
    Notifications?: NotificationCreateNestedManyWithoutUserInput | undefined;
    Activity?: NotificationCreateNestedManyWithoutActorInput | undefined;
    Following?: UserCreateNestedManyWithoutFollowersInput | undefined;
    followingIds?: UserCreatefollowingIdsInput | undefined;
    Followers?: UserCreateNestedManyWithoutFollowingInput | undefined;
    followerIds?: UserCreatefollowerIdsInput | undefined;
    LikedExperiences?: ExperienceCreateNestedManyWithoutLikedByInput | undefined;
    experienceIds?: UserCreateexperienceIdsInput | undefined;
    Requests?: RequestCreateNestedManyWithoutReporterInput | undefined;
    Posts?: PostCreateNestedManyWithoutAuthorInput | undefined;
    Comments?: CommentCreateNestedManyWithoutAuthorInput | undefined;
    Replies?: ReplyCreateNestedManyWithoutAuthorInput | undefined;
    Bookings?: BookingOrderCreateNestedManyWithoutBuyerInput | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
