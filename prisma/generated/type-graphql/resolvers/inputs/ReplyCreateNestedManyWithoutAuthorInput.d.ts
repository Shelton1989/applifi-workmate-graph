import { ReplyCreateManyAuthorInputEnvelope } from "../inputs/ReplyCreateManyAuthorInputEnvelope";
import { ReplyCreateOrConnectWithoutAuthorInput } from "../inputs/ReplyCreateOrConnectWithoutAuthorInput";
import { ReplyCreateWithoutAuthorInput } from "../inputs/ReplyCreateWithoutAuthorInput";
import { ReplyWhereUniqueInput } from "../inputs/ReplyWhereUniqueInput";
export declare class ReplyCreateNestedManyWithoutAuthorInput {
    create?: ReplyCreateWithoutAuthorInput[] | undefined;
    connectOrCreate?: ReplyCreateOrConnectWithoutAuthorInput[] | undefined;
    createMany?: ReplyCreateManyAuthorInputEnvelope | undefined;
    connect?: ReplyWhereUniqueInput[] | undefined;
}
