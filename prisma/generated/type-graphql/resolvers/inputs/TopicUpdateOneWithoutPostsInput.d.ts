import { TopicCreateOrConnectWithoutPostsInput } from "../inputs/TopicCreateOrConnectWithoutPostsInput";
import { TopicCreateWithoutPostsInput } from "../inputs/TopicCreateWithoutPostsInput";
import { TopicUpdateWithoutPostsInput } from "../inputs/TopicUpdateWithoutPostsInput";
import { TopicUpsertWithoutPostsInput } from "../inputs/TopicUpsertWithoutPostsInput";
import { TopicWhereUniqueInput } from "../inputs/TopicWhereUniqueInput";
export declare class TopicUpdateOneWithoutPostsInput {
    create?: TopicCreateWithoutPostsInput | undefined;
    connectOrCreate?: TopicCreateOrConnectWithoutPostsInput | undefined;
    upsert?: TopicUpsertWithoutPostsInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    connect?: TopicWhereUniqueInput | undefined;
    update?: TopicUpdateWithoutPostsInput | undefined;
}
