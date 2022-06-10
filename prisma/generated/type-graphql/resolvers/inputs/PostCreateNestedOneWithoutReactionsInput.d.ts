import { PostCreateOrConnectWithoutReactionsInput } from "../inputs/PostCreateOrConnectWithoutReactionsInput";
import { PostCreateWithoutReactionsInput } from "../inputs/PostCreateWithoutReactionsInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";
export declare class PostCreateNestedOneWithoutReactionsInput {
    create?: PostCreateWithoutReactionsInput | undefined;
    connectOrCreate?: PostCreateOrConnectWithoutReactionsInput | undefined;
    connect?: PostWhereUniqueInput | undefined;
}
