import { ReplyCreateManyAuthorInputEnvelope } from "../inputs/ReplyCreateManyAuthorInputEnvelope";
import { ReplyCreateOrConnectWithoutAuthorInput } from "../inputs/ReplyCreateOrConnectWithoutAuthorInput";
import { ReplyCreateWithoutAuthorInput } from "../inputs/ReplyCreateWithoutAuthorInput";
import { ReplyScalarWhereInput } from "../inputs/ReplyScalarWhereInput";
import { ReplyUpdateManyWithWhereWithoutAuthorInput } from "../inputs/ReplyUpdateManyWithWhereWithoutAuthorInput";
import { ReplyUpdateWithWhereUniqueWithoutAuthorInput } from "../inputs/ReplyUpdateWithWhereUniqueWithoutAuthorInput";
import { ReplyUpsertWithWhereUniqueWithoutAuthorInput } from "../inputs/ReplyUpsertWithWhereUniqueWithoutAuthorInput";
import { ReplyWhereUniqueInput } from "../inputs/ReplyWhereUniqueInput";
export declare class ReplyUpdateManyWithoutAuthorInput {
    create?: ReplyCreateWithoutAuthorInput[] | undefined;
    connectOrCreate?: ReplyCreateOrConnectWithoutAuthorInput[] | undefined;
    upsert?: ReplyUpsertWithWhereUniqueWithoutAuthorInput[] | undefined;
    createMany?: ReplyCreateManyAuthorInputEnvelope | undefined;
    set?: ReplyWhereUniqueInput[] | undefined;
    disconnect?: ReplyWhereUniqueInput[] | undefined;
    delete?: ReplyWhereUniqueInput[] | undefined;
    connect?: ReplyWhereUniqueInput[] | undefined;
    update?: ReplyUpdateWithWhereUniqueWithoutAuthorInput[] | undefined;
    updateMany?: ReplyUpdateManyWithWhereWithoutAuthorInput[] | undefined;
    deleteMany?: ReplyScalarWhereInput[] | undefined;
}
