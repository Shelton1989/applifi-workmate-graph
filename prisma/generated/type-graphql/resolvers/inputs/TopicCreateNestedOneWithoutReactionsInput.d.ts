import { TopicCreateOrConnectWithoutReactionsInput } from "../inputs/TopicCreateOrConnectWithoutReactionsInput";
import { TopicCreateWithoutReactionsInput } from "../inputs/TopicCreateWithoutReactionsInput";
import { TopicWhereUniqueInput } from "../inputs/TopicWhereUniqueInput";
export declare class TopicCreateNestedOneWithoutReactionsInput {
    create?: TopicCreateWithoutReactionsInput | undefined;
    connectOrCreate?: TopicCreateOrConnectWithoutReactionsInput | undefined;
    connect?: TopicWhereUniqueInput | undefined;
}
