import { UserCreateNestedOneWithoutActivityInput } from "../inputs/UserCreateNestedOneWithoutActivityInput";
export declare class NotificationCreateWithoutUserInput {
    id?: string | undefined;
    description: string;
    Actor?: UserCreateNestedOneWithoutActivityInput | undefined;
    entityId?: string | undefined;
    hasBeenViewedBySubject?: boolean | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
