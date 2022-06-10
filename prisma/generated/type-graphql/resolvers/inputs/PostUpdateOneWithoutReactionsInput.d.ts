import { PostCreateOrConnectWithoutReactionsInput } from "../inputs/PostCreateOrConnectWithoutReactionsInput";
import { PostCreateWithoutReactionsInput } from "../inputs/PostCreateWithoutReactionsInput";
import { PostUpdateWithoutReactionsInput } from "../inputs/PostUpdateWithoutReactionsInput";
import { PostUpsertWithoutReactionsInput } from "../inputs/PostUpsertWithoutReactionsInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";
export declare class PostUpdateOneWithoutReactionsInput {
    create?: PostCreateWithoutReactionsInput | undefined;
    connectOrCreate?: PostCreateOrConnectWithoutReactionsInput | undefined;
    upsert?: PostUpsertWithoutReactionsInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    connect?: PostWhereUniqueInput | undefined;
    update?: PostUpdateWithoutReactionsInput | undefined;
}
