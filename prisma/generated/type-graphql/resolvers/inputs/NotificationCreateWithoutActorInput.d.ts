import { UserCreateNestedOneWithoutNotificationsInput } from "../inputs/UserCreateNestedOneWithoutNotificationsInput";
export declare class NotificationCreateWithoutActorInput {
    id?: string | undefined;
    description: string;
    User?: UserCreateNestedOneWithoutNotificationsInput | undefined;
    entityId?: string | undefined;
    hasBeenViewedBySubject?: boolean | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
