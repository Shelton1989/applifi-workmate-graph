import { TopicCreateOrConnectWithoutReactionsInput } from "../inputs/TopicCreateOrConnectWithoutReactionsInput";
import { TopicCreateWithoutReactionsInput } from "../inputs/TopicCreateWithoutReactionsInput";
import { TopicUpdateWithoutReactionsInput } from "../inputs/TopicUpdateWithoutReactionsInput";
import { TopicUpsertWithoutReactionsInput } from "../inputs/TopicUpsertWithoutReactionsInput";
import { TopicWhereUniqueInput } from "../inputs/TopicWhereUniqueInput";
export declare class TopicUpdateOneWithoutReactionsInput {
    create?: TopicCreateWithoutReactionsInput | undefined;
    connectOrCreate?: TopicCreateOrConnectWithoutReactionsInput | undefined;
    upsert?: TopicUpsertWithoutReactionsInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    connect?: TopicWhereUniqueInput | undefined;
    update?: TopicUpdateWithoutReactionsInput | undefined;
}
