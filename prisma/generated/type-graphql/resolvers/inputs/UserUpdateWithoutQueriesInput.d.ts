import { CommentUpdateManyWithoutAuthorInput } from "../inputs/CommentUpdateManyWithoutAuthorInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { DocumentUpdateManyWithoutCreatedByInput } from "../inputs/DocumentUpdateManyWithoutCreatedByInput";
import { NotificationSettingsUpdateOneWithoutUserInput } from "../inputs/NotificationSettingsUpdateOneWithoutUserInput";
import { NotificationUpdateManyWithoutActorInput } from "../inputs/NotificationUpdateManyWithoutActorInput";
import { NotificationUpdateManyWithoutUserInput } from "../inputs/NotificationUpdateManyWithoutUserInput";
import { NullableBoolFieldUpdateOperationsInput } from "../inputs/NullableBoolFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { ReactionUpdateManyWithoutAuthorInput } from "../inputs/ReactionUpdateManyWithoutAuthorInput";
import { ReplyUpdateManyWithoutAuthorInput } from "../inputs/ReplyUpdateManyWithoutAuthorInput";
import { RequestUpdateManyWithoutReporterInput } from "../inputs/RequestUpdateManyWithoutReporterInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TenantUpdateOneWithoutUsersInput } from "../inputs/TenantUpdateOneWithoutUsersInput";
import { UserUpdaterolesInput } from "../inputs/UserUpdaterolesInput";
export declare class UserUpdateWithoutQueriesInput {
    Tenant?: TenantUpdateOneWithoutUsersInput | undefined;
    uid?: StringFieldUpdateOperationsInput | undefined;
    uuid?: NullableStringFieldUpdateOperationsInput | undefined;
    username?: StringFieldUpdateOperationsInput | undefined;
    email?: StringFieldUpdateOperationsInput | undefined;
    roles?: UserUpdaterolesInput | undefined;
    firstName?: NullableStringFieldUpdateOperationsInput | undefined;
    lastName?: NullableStringFieldUpdateOperationsInput | undefined;
    avatar?: NullableStringFieldUpdateOperationsInput | undefined;
    hasAcceptedTerms?: NullableBoolFieldUpdateOperationsInput | undefined;
    isFirstTimeUser?: NullableBoolFieldUpdateOperationsInput | undefined;
    isVerified?: NullableBoolFieldUpdateOperationsInput | undefined;
    isActive?: NullableBoolFieldUpdateOperationsInput | undefined;
    NotificationSettings?: NotificationSettingsUpdateOneWithoutUserInput | undefined;
    Notifications?: NotificationUpdateManyWithoutUserInput | undefined;
    Activity?: NotificationUpdateManyWithoutActorInput | undefined;
    Requests?: RequestUpdateManyWithoutReporterInput | undefined;
    Comments?: CommentUpdateManyWithoutAuthorInput | undefined;
    Replies?: ReplyUpdateManyWithoutAuthorInput | undefined;
    Reactions?: ReactionUpdateManyWithoutAuthorInput | undefined;
    CreatedDocuments?: DocumentUpdateManyWithoutCreatedByInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
