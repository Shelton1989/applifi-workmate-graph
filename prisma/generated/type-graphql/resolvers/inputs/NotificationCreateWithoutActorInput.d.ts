import { UserCreateNestedOneWithoutNotificationsInput } from "../inputs/UserCreateNestedOneWithoutNotificationsInput";
export declare class NotificationCreateWithoutActorInput {
    id?: string | undefined;
    description: string;
    User?: UserCreateNestedOneWithoutNotificationsInput | undefined;
    entityId?: string | undefined;
    hasBeenViewedBySubject?: boolean | undefined;
    link?: string | undefined;
    mediaLink?: string | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
