import { BookingOrderUpdateManyWithoutBuyerInput } from "../inputs/BookingOrderUpdateManyWithoutBuyerInput";
import { CommentUpdateManyWithoutAuthorInput } from "../inputs/CommentUpdateManyWithoutAuthorInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { ExperienceUpdateManyWithoutLikedByInput } from "../inputs/ExperienceUpdateManyWithoutLikedByInput";
import { NotificationSettingsUpdateOneWithoutUserInput } from "../inputs/NotificationSettingsUpdateOneWithoutUserInput";
import { NotificationUpdateManyWithoutActorInput } from "../inputs/NotificationUpdateManyWithoutActorInput";
import { NotificationUpdateManyWithoutUserInput } from "../inputs/NotificationUpdateManyWithoutUserInput";
import { NullableBoolFieldUpdateOperationsInput } from "../inputs/NullableBoolFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { ReactionUpdateManyWithoutAuthorInput } from "../inputs/ReactionUpdateManyWithoutAuthorInput";
import { ReplyUpdateManyWithoutAuthorInput } from "../inputs/ReplyUpdateManyWithoutAuthorInput";
import { RequestUpdateManyWithoutReporterInput } from "../inputs/RequestUpdateManyWithoutReporterInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TenantUpdateOneWithoutUsersInput } from "../inputs/TenantUpdateOneWithoutUsersInput";
import { UserUpdateManyWithoutFollowersInput } from "../inputs/UserUpdateManyWithoutFollowersInput";
import { UserUpdateManyWithoutFollowingInput } from "../inputs/UserUpdateManyWithoutFollowingInput";
import { UserUpdateexperienceIdsInput } from "../inputs/UserUpdateexperienceIdsInput";
import { UserUpdatefollowerIdsInput } from "../inputs/UserUpdatefollowerIdsInput";
import { UserUpdatefollowingIdsInput } from "../inputs/UserUpdatefollowingIdsInput";
import { UserUpdaterolesInput } from "../inputs/UserUpdaterolesInput";
export declare class UserUpdateWithoutPostsInput {
    Tenant?: TenantUpdateOneWithoutUsersInput | undefined;
    uid?: StringFieldUpdateOperationsInput | undefined;
    uuid?: NullableStringFieldUpdateOperationsInput | undefined;
    username?: StringFieldUpdateOperationsInput | undefined;
    email?: StringFieldUpdateOperationsInput | undefined;
    roles?: UserUpdaterolesInput | undefined;
    firstName?: NullableStringFieldUpdateOperationsInput | undefined;
    lastName?: NullableStringFieldUpdateOperationsInput | undefined;
    avatar?: NullableStringFieldUpdateOperationsInput | undefined;
    coverImage?: NullableStringFieldUpdateOperationsInput | undefined;
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    biography?: NullableStringFieldUpdateOperationsInput | undefined;
    hasAcceptedTerms?: NullableBoolFieldUpdateOperationsInput | undefined;
    isFirstTimeUser?: NullableBoolFieldUpdateOperationsInput | undefined;
    isVerified?: NullableBoolFieldUpdateOperationsInput | undefined;
    NotificationSettings?: NotificationSettingsUpdateOneWithoutUserInput | undefined;
    Notifications?: NotificationUpdateManyWithoutUserInput | undefined;
    Activity?: NotificationUpdateManyWithoutActorInput | undefined;
    Following?: UserUpdateManyWithoutFollowersInput | undefined;
    followingIds?: UserUpdatefollowingIdsInput | undefined;
    Followers?: UserUpdateManyWithoutFollowingInput | undefined;
    followerIds?: UserUpdatefollowerIdsInput | undefined;
    LikedExperiences?: ExperienceUpdateManyWithoutLikedByInput | undefined;
    experienceIds?: UserUpdateexperienceIdsInput | undefined;
    Requests?: RequestUpdateManyWithoutReporterInput | undefined;
    Comments?: CommentUpdateManyWithoutAuthorInput | undefined;
    Replies?: ReplyUpdateManyWithoutAuthorInput | undefined;
    Reactions?: ReactionUpdateManyWithoutAuthorInput | undefined;
    Bookings?: BookingOrderUpdateManyWithoutBuyerInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
