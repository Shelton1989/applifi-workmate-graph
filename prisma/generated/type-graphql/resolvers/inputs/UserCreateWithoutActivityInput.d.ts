import { CommentCreateNestedManyWithoutAuthorInput } from "../inputs/CommentCreateNestedManyWithoutAuthorInput";
import { MealCreateNestedManyWithoutLikedByInput } from "../inputs/MealCreateNestedManyWithoutLikedByInput";
import { NotificationCreateNestedManyWithoutUserInput } from "../inputs/NotificationCreateNestedManyWithoutUserInput";
import { NotificationSettingsCreateNestedOneWithoutUserInput } from "../inputs/NotificationSettingsCreateNestedOneWithoutUserInput";
import { OrderCreateNestedManyWithoutPatientInput } from "../inputs/OrderCreateNestedManyWithoutPatientInput";
import { PatientProfileCreateNestedOneWithoutUserInput } from "../inputs/PatientProfileCreateNestedOneWithoutUserInput";
import { PostCreateNestedManyWithoutAuthorInput } from "../inputs/PostCreateNestedManyWithoutAuthorInput";
import { ReactionCreateNestedManyWithoutAuthorInput } from "../inputs/ReactionCreateNestedManyWithoutAuthorInput";
import { ReplyCreateNestedManyWithoutAuthorInput } from "../inputs/ReplyCreateNestedManyWithoutAuthorInput";
import { RequestCreateNestedManyWithoutReporterInput } from "../inputs/RequestCreateNestedManyWithoutReporterInput";
import { TenantCreateNestedOneWithoutUsersInput } from "../inputs/TenantCreateNestedOneWithoutUsersInput";
import { UserCreatemealIdsInput } from "../inputs/UserCreatemealIdsInput";
import { UserCreaterolesInput } from "../inputs/UserCreaterolesInput";
import { WardCreateNestedOneWithoutUsersInput } from "../inputs/WardCreateNestedOneWithoutUsersInput";
export declare class UserCreateWithoutActivityInput {
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
    isActive?: boolean | undefined;
    NotificationSettings?: NotificationSettingsCreateNestedOneWithoutUserInput | undefined;
    PatientProfile?: PatientProfileCreateNestedOneWithoutUserInput | undefined;
    Notifications?: NotificationCreateNestedManyWithoutUserInput | undefined;
    LikedMeals?: MealCreateNestedManyWithoutLikedByInput | undefined;
    mealIds?: UserCreatemealIdsInput | undefined;
    Requests?: RequestCreateNestedManyWithoutReporterInput | undefined;
    Posts?: PostCreateNestedManyWithoutAuthorInput | undefined;
    Comments?: CommentCreateNestedManyWithoutAuthorInput | undefined;
    Replies?: ReplyCreateNestedManyWithoutAuthorInput | undefined;
    Reactions?: ReactionCreateNestedManyWithoutAuthorInput | undefined;
    Bookings?: OrderCreateNestedManyWithoutPatientInput | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    Ward?: WardCreateNestedOneWithoutUsersInput | undefined;
}
