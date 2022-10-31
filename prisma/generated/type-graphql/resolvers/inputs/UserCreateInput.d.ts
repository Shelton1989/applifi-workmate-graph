import { CommentCreateNestedManyWithoutAuthorInput } from "../inputs/CommentCreateNestedManyWithoutAuthorInput";
import { NotificationCreateNestedManyWithoutActorInput } from "../inputs/NotificationCreateNestedManyWithoutActorInput";
import { NotificationCreateNestedManyWithoutUserInput } from "../inputs/NotificationCreateNestedManyWithoutUserInput";
import { NotificationSettingsCreateNestedOneWithoutUserInput } from "../inputs/NotificationSettingsCreateNestedOneWithoutUserInput";
import { PostCreateNestedManyWithoutAuthorInput } from "../inputs/PostCreateNestedManyWithoutAuthorInput";
import { ReactionCreateNestedManyWithoutAuthorInput } from "../inputs/ReactionCreateNestedManyWithoutAuthorInput";
import { ReplyCreateNestedManyWithoutAuthorInput } from "../inputs/ReplyCreateNestedManyWithoutAuthorInput";
import { RequestCreateNestedManyWithoutReporterInput } from "../inputs/RequestCreateNestedManyWithoutReporterInput";
import { UserCreateNestedManyWithoutFollowersInput } from "../inputs/UserCreateNestedManyWithoutFollowersInput";
import { UserCreateNestedManyWithoutFollowingInput } from "../inputs/UserCreateNestedManyWithoutFollowingInput";
import { UserCreatefollowerIdsInput } from "../inputs/UserCreatefollowerIdsInput";
import { UserCreatefollowingIdsInput } from "../inputs/UserCreatefollowingIdsInput";
export declare class UserCreateInput {
    uid: string;
    id?: string | undefined;
    username: string;
    email: string;
    role?: "SUPER_ADMIN" | "ADMIN" | "CRITIC" | "USER" | undefined;
    firstName?: string | undefined;
    lastName?: string | undefined;
    avatar?: string | undefined;
    coverImage?: string | undefined;
    dateOfBirth: Date;
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
    Requests?: RequestCreateNestedManyWithoutReporterInput | undefined;
    Posts?: PostCreateNestedManyWithoutAuthorInput | undefined;
    Comments?: CommentCreateNestedManyWithoutAuthorInput | undefined;
    Replies?: ReplyCreateNestedManyWithoutAuthorInput | undefined;
    Reactions?: ReactionCreateNestedManyWithoutAuthorInput | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
