import { NotificationCreateManyUserInputEnvelope } from "../inputs/NotificationCreateManyUserInputEnvelope";
import { NotificationCreateOrConnectWithoutUserInput } from "../inputs/NotificationCreateOrConnectWithoutUserInput";
import { NotificationCreateWithoutUserInput } from "../inputs/NotificationCreateWithoutUserInput";
import { NotificationScalarWhereInput } from "../inputs/NotificationScalarWhereInput";
import { NotificationUpdateManyWithWhereWithoutUserInput } from "../inputs/NotificationUpdateManyWithWhereWithoutUserInput";
import { NotificationUpdateWithWhereUniqueWithoutUserInput } from "../inputs/NotificationUpdateWithWhereUniqueWithoutUserInput";
import { NotificationUpsertWithWhereUniqueWithoutUserInput } from "../inputs/NotificationUpsertWithWhereUniqueWithoutUserInput";
import { NotificationWhereUniqueInput } from "../inputs/NotificationWhereUniqueInput";
export declare class NotificationUpdateManyWithoutUserInput {
    create?: NotificationCreateWithoutUserInput[] | undefined;
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput[] | undefined;
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput[] | undefined;
    createMany?: NotificationCreateManyUserInputEnvelope | undefined;
    set?: NotificationWhereUniqueInput[] | undefined;
    disconnect?: NotificationWhereUniqueInput[] | undefined;
    delete?: NotificationWhereUniqueInput[] | undefined;
    connect?: NotificationWhereUniqueInput[] | undefined;
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput[] | undefined;
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput[] | undefined;
    deleteMany?: NotificationScalarWhereInput[] | undefined;
}
