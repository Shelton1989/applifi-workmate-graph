import { PostCreateManyExperienceInputEnvelope } from "../inputs/PostCreateManyExperienceInputEnvelope";
import { PostCreateOrConnectWithoutExperienceInput } from "../inputs/PostCreateOrConnectWithoutExperienceInput";
import { PostCreateWithoutExperienceInput } from "../inputs/PostCreateWithoutExperienceInput";
import { PostScalarWhereInput } from "../inputs/PostScalarWhereInput";
import { PostUpdateManyWithWhereWithoutExperienceInput } from "../inputs/PostUpdateManyWithWhereWithoutExperienceInput";
import { PostUpdateWithWhereUniqueWithoutExperienceInput } from "../inputs/PostUpdateWithWhereUniqueWithoutExperienceInput";
import { PostUpsertWithWhereUniqueWithoutExperienceInput } from "../inputs/PostUpsertWithWhereUniqueWithoutExperienceInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";
export declare class PostUpdateManyWithoutExperienceInput {
    create?: PostCreateWithoutExperienceInput[] | undefined;
    connectOrCreate?: PostCreateOrConnectWithoutExperienceInput[] | undefined;
    upsert?: PostUpsertWithWhereUniqueWithoutExperienceInput[] | undefined;
    createMany?: PostCreateManyExperienceInputEnvelope | undefined;
    set?: PostWhereUniqueInput[] | undefined;
    disconnect?: PostWhereUniqueInput[] | undefined;
    delete?: PostWhereUniqueInput[] | undefined;
    connect?: PostWhereUniqueInput[] | undefined;
    update?: PostUpdateWithWhereUniqueWithoutExperienceInput[] | undefined;
    updateMany?: PostUpdateManyWithWhereWithoutExperienceInput[] | undefined;
    deleteMany?: PostScalarWhereInput[] | undefined;
}
