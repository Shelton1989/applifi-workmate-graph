import { NotificationCreateManyUserInputEnvelope } from "../inputs/NotificationCreateManyUserInputEnvelope";
import { NotificationCreateOrConnectWithoutUserInput } from "../inputs/NotificationCreateOrConnectWithoutUserInput";
import { NotificationCreateWithoutUserInput } from "../inputs/NotificationCreateWithoutUserInput";
import { NotificationWhereUniqueInput } from "../inputs/NotificationWhereUniqueInput";
export declare class NotificationCreateNestedManyWithoutUserInput {
    create?: NotificationCreateWithoutUserInput[] | undefined;
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput[] | undefined;
    createMany?: NotificationCreateManyUserInputEnvelope | undefined;
    connect?: NotificationWhereUniqueInput[] | undefined;
}
