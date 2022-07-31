import { NotificationCreateManyActorInputEnvelope } from "../inputs/NotificationCreateManyActorInputEnvelope";
import { NotificationCreateOrConnectWithoutActorInput } from "../inputs/NotificationCreateOrConnectWithoutActorInput";
import { NotificationCreateWithoutActorInput } from "../inputs/NotificationCreateWithoutActorInput";
import { NotificationWhereUniqueInput } from "../inputs/NotificationWhereUniqueInput";
export declare class NotificationCreateNestedManyWithoutActorInput {
    create?: NotificationCreateWithoutActorInput[] | undefined;
    connectOrCreate?: NotificationCreateOrConnectWithoutActorInput[] | undefined;
    createMany?: NotificationCreateManyActorInputEnvelope | undefined;
    connect?: NotificationWhereUniqueInput[] | undefined;
}
