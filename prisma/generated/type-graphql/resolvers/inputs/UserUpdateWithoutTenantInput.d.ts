import { CommentUpdateManyWithoutAuthorInput } from "../inputs/CommentUpdateManyWithoutAuthorInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { MealUpdateManyWithoutLikedByInput } from "../inputs/MealUpdateManyWithoutLikedByInput";
import { NotificationSettingsUpdateOneWithoutUserInput } from "../inputs/NotificationSettingsUpdateOneWithoutUserInput";
import { NotificationUpdateManyWithoutActorInput } from "../inputs/NotificationUpdateManyWithoutActorInput";
import { NotificationUpdateManyWithoutUserInput } from "../inputs/NotificationUpdateManyWithoutUserInput";
import { NullableBoolFieldUpdateOperationsInput } from "../inputs/NullableBoolFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { OrderUpdateManyWithoutPatientInput } from "../inputs/OrderUpdateManyWithoutPatientInput";
import { PatientProfileUpdateOneWithoutUserInput } from "../inputs/PatientProfileUpdateOneWithoutUserInput";
import { PostUpdateManyWithoutAuthorInput } from "../inputs/PostUpdateManyWithoutAuthorInput";
import { ReactionUpdateManyWithoutAuthorInput } from "../inputs/ReactionUpdateManyWithoutAuthorInput";
import { ReplyUpdateManyWithoutAuthorInput } from "../inputs/ReplyUpdateManyWithoutAuthorInput";
import { RequestUpdateManyWithoutReporterInput } from "../inputs/RequestUpdateManyWithoutReporterInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdatemealIdsInput } from "../inputs/UserUpdatemealIdsInput";
import { UserUpdaterolesInput } from "../inputs/UserUpdaterolesInput";
import { WardUpdateOneWithoutUsersInput } from "../inputs/WardUpdateOneWithoutUsersInput";
export declare class UserUpdateWithoutTenantInput {
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
    isActive?: NullableBoolFieldUpdateOperationsInput | undefined;
    NotificationSettings?: NotificationSettingsUpdateOneWithoutUserInput | undefined;
    PatientProfile?: PatientProfileUpdateOneWithoutUserInput | undefined;
    Notifications?: NotificationUpdateManyWithoutUserInput | undefined;
    Activity?: NotificationUpdateManyWithoutActorInput | undefined;
    LikedMeals?: MealUpdateManyWithoutLikedByInput | undefined;
    mealIds?: UserUpdatemealIdsInput | undefined;
    Requests?: RequestUpdateManyWithoutReporterInput | undefined;
    Posts?: PostUpdateManyWithoutAuthorInput | undefined;
    Comments?: CommentUpdateManyWithoutAuthorInput | undefined;
    Replies?: ReplyUpdateManyWithoutAuthorInput | undefined;
    Reactions?: ReactionUpdateManyWithoutAuthorInput | undefined;
    Bookings?: OrderUpdateManyWithoutPatientInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    Ward?: WardUpdateOneWithoutUsersInput | undefined;
}
