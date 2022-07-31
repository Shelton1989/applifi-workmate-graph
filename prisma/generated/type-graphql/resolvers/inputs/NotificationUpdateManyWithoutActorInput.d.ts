import { NotificationCreateManyActorInputEnvelope } from "../inputs/NotificationCreateManyActorInputEnvelope";
import { NotificationCreateOrConnectWithoutActorInput } from "../inputs/NotificationCreateOrConnectWithoutActorInput";
import { NotificationCreateWithoutActorInput } from "../inputs/NotificationCreateWithoutActorInput";
import { NotificationScalarWhereInput } from "../inputs/NotificationScalarWhereInput";
import { NotificationUpdateManyWithWhereWithoutActorInput } from "../inputs/NotificationUpdateManyWithWhereWithoutActorInput";
import { NotificationUpdateWithWhereUniqueWithoutActorInput } from "../inputs/NotificationUpdateWithWhereUniqueWithoutActorInput";
import { NotificationUpsertWithWhereUniqueWithoutActorInput } from "../inputs/NotificationUpsertWithWhereUniqueWithoutActorInput";
import { NotificationWhereUniqueInput } from "../inputs/NotificationWhereUniqueInput";
export declare class NotificationUpdateManyWithoutActorInput {
    create?: NotificationCreateWithoutActorInput[] | undefined;
    connectOrCreate?: NotificationCreateOrConnectWithoutActorInput[] | undefined;
    upsert?: NotificationUpsertWithWhereUniqueWithoutActorInput[] | undefined;
    createMany?: NotificationCreateManyActorInputEnvelope | undefined;
    set?: NotificationWhereUniqueInput[] | undefined;
    disconnect?: NotificationWhereUniqueInput[] | undefined;
    delete?: NotificationWhereUniqueInput[] | undefined;
    connect?: NotificationWhereUniqueInput[] | undefined;
    update?: NotificationUpdateWithWhereUniqueWithoutActorInput[] | undefined;
    updateMany?: NotificationUpdateManyWithWhereWithoutActorInput[] | undefined;
    deleteMany?: NotificationScalarWhereInput[] | undefined;
}
