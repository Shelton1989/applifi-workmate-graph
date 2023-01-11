import { PostCreateManyExperienceInputEnvelope } from "../inputs/PostCreateManyExperienceInputEnvelope";
import { PostCreateOrConnectWithoutExperienceInput } from "../inputs/PostCreateOrConnectWithoutExperienceInput";
import { PostCreateWithoutExperienceInput } from "../inputs/PostCreateWithoutExperienceInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";
export declare class PostCreateNestedManyWithoutExperienceInput {
    create?: PostCreateWithoutExperienceInput[] | undefined;
    connectOrCreate?: PostCreateOrConnectWithoutExperienceInput[] | undefined;
    createMany?: PostCreateManyExperienceInputEnvelope | undefined;
    connect?: PostWhereUniqueInput[] | undefined;
}
