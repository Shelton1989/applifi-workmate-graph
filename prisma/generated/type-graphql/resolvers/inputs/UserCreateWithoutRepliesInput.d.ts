import { CommentCreateNestedManyWithoutAuthorInput } from "../inputs/CommentCreateNestedManyWithoutAuthorInput";
import { LLMQueryCreateNestedManyWithoutUserInput } from "../inputs/LLMQueryCreateNestedManyWithoutUserInput";
import { NotificationCreateNestedManyWithoutActorInput } from "../inputs/NotificationCreateNestedManyWithoutActorInput";
import { NotificationCreateNestedManyWithoutUserInput } from "../inputs/NotificationCreateNestedManyWithoutUserInput";
import { NotificationSettingsCreateNestedOneWithoutUserInput } from "../inputs/NotificationSettingsCreateNestedOneWithoutUserInput";
import { ReactionCreateNestedManyWithoutAuthorInput } from "../inputs/ReactionCreateNestedManyWithoutAuthorInput";
import { RequestCreateNestedManyWithoutReporterInput } from "../inputs/RequestCreateNestedManyWithoutReporterInput";
import { TenantCreateNestedOneWithoutUsersInput } from "../inputs/TenantCreateNestedOneWithoutUsersInput";
import { UserCreaterolesInput } from "../inputs/UserCreaterolesInput";
export declare class UserCreateWithoutRepliesInput {
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
    hasAcceptedTerms?: boolean | undefined;
    isFirstTimeUser?: boolean | undefined;
    isVerified?: boolean | undefined;
    isActive?: boolean | undefined;
    NotificationSettings?: NotificationSettingsCreateNestedOneWithoutUserInput | undefined;
    Notifications?: NotificationCreateNestedManyWithoutUserInput | undefined;
    Activity?: NotificationCreateNestedManyWithoutActorInput | undefined;
    Queries?: LLMQueryCreateNestedManyWithoutUserInput | undefined;
    Requests?: RequestCreateNestedManyWithoutReporterInput | undefined;
    Comments?: CommentCreateNestedManyWithoutAuthorInput | undefined;
    Reactions?: ReactionCreateNestedManyWithoutAuthorInput | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
