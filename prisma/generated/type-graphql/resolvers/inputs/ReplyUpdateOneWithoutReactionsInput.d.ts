import { ReplyCreateOrConnectWithoutReactionsInput } from "../inputs/ReplyCreateOrConnectWithoutReactionsInput";
import { ReplyCreateWithoutReactionsInput } from "../inputs/ReplyCreateWithoutReactionsInput";
import { ReplyUpdateWithoutReactionsInput } from "../inputs/ReplyUpdateWithoutReactionsInput";
import { ReplyUpsertWithoutReactionsInput } from "../inputs/ReplyUpsertWithoutReactionsInput";
import { ReplyWhereUniqueInput } from "../inputs/ReplyWhereUniqueInput";
export declare class ReplyUpdateOneWithoutReactionsInput {
    create?: ReplyCreateWithoutReactionsInput | undefined;
    connectOrCreate?: ReplyCreateOrConnectWithoutReactionsInput | undefined;
    upsert?: ReplyUpsertWithoutReactionsInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    connect?: ReplyWhereUniqueInput | undefined;
    update?: ReplyUpdateWithoutReactionsInput | undefined;
}
