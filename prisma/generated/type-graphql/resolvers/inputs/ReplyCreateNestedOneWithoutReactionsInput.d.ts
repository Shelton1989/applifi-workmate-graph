import { ReplyCreateOrConnectWithoutReactionsInput } from "../inputs/ReplyCreateOrConnectWithoutReactionsInput";
import { ReplyCreateWithoutReactionsInput } from "../inputs/ReplyCreateWithoutReactionsInput";
import { ReplyWhereUniqueInput } from "../inputs/ReplyWhereUniqueInput";
export declare class ReplyCreateNestedOneWithoutReactionsInput {
    create?: ReplyCreateWithoutReactionsInput | undefined;
    connectOrCreate?: ReplyCreateOrConnectWithoutReactionsInput | undefined;
    connect?: ReplyWhereUniqueInput | undefined;
}
