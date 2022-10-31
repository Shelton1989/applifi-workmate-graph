import { TopicCreateOrConnectWithoutPostsInput } from "../inputs/TopicCreateOrConnectWithoutPostsInput";
import { TopicCreateWithoutPostsInput } from "../inputs/TopicCreateWithoutPostsInput";
import { TopicWhereUniqueInput } from "../inputs/TopicWhereUniqueInput";
export declare class TopicCreateNestedOneWithoutPostsInput {
    create?: TopicCreateWithoutPostsInput | undefined;
    connectOrCreate?: TopicCreateOrConnectWithoutPostsInput | undefined;
    connect?: TopicWhereUniqueInput | undefined;
}
