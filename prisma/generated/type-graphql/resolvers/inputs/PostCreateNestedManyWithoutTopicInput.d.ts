import { PostCreateManyTopicInputEnvelope } from "../inputs/PostCreateManyTopicInputEnvelope";
import { PostCreateOrConnectWithoutTopicInput } from "../inputs/PostCreateOrConnectWithoutTopicInput";
import { PostCreateWithoutTopicInput } from "../inputs/PostCreateWithoutTopicInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";
export declare class PostCreateNestedManyWithoutTopicInput {
    create?: PostCreateWithoutTopicInput[] | undefined;
    connectOrCreate?: PostCreateOrConnectWithoutTopicInput[] | undefined;
    createMany?: PostCreateManyTopicInputEnvelope | undefined;
    connect?: PostWhereUniqueInput[] | undefined;
}
