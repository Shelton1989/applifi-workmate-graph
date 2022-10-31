import { PostCreateManyTopicInputEnvelope } from "../inputs/PostCreateManyTopicInputEnvelope";
import { PostCreateOrConnectWithoutTopicInput } from "../inputs/PostCreateOrConnectWithoutTopicInput";
import { PostCreateWithoutTopicInput } from "../inputs/PostCreateWithoutTopicInput";
import { PostScalarWhereInput } from "../inputs/PostScalarWhereInput";
import { PostUpdateManyWithWhereWithoutTopicInput } from "../inputs/PostUpdateManyWithWhereWithoutTopicInput";
import { PostUpdateWithWhereUniqueWithoutTopicInput } from "../inputs/PostUpdateWithWhereUniqueWithoutTopicInput";
import { PostUpsertWithWhereUniqueWithoutTopicInput } from "../inputs/PostUpsertWithWhereUniqueWithoutTopicInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";
export declare class PostUpdateManyWithoutTopicInput {
    create?: PostCreateWithoutTopicInput[] | undefined;
    connectOrCreate?: PostCreateOrConnectWithoutTopicInput[] | undefined;
    upsert?: PostUpsertWithWhereUniqueWithoutTopicInput[] | undefined;
    createMany?: PostCreateManyTopicInputEnvelope | undefined;
    set?: PostWhereUniqueInput[] | undefined;
    disconnect?: PostWhereUniqueInput[] | undefined;
    delete?: PostWhereUniqueInput[] | undefined;
    connect?: PostWhereUniqueInput[] | undefined;
    update?: PostUpdateWithWhereUniqueWithoutTopicInput[] | undefined;
    updateMany?: PostUpdateManyWithWhereWithoutTopicInput[] | undefined;
    deleteMany?: PostScalarWhereInput[] | undefined;
}
