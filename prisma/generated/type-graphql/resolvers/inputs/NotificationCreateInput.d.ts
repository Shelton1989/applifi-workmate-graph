import { UserCreateNestedOneWithoutActivityInput } from "../inputs/UserCreateNestedOneWithoutActivityInput";
import { UserCreateNestedOneWithoutNotificationsInput } from "../inputs/UserCreateNestedOneWithoutNotificationsInput";
export declare class NotificationCreateInput {
    id?: string | undefined;
    description: string;
    User?: UserCreateNestedOneWithoutNotificationsInput | undefined;
    Actor?: UserCreateNestedOneWithoutActivityInput | undefined;
    entityId?: string | undefined;
    hasBeenViewedBySubject?: boolean | undefined;
    link?: string | undefined;
    mediaLink?: string | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
