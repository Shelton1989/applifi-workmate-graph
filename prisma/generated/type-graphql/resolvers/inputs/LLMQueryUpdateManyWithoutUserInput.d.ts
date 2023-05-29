import { LLMQueryCreateManyUserInputEnvelope } from "../inputs/LLMQueryCreateManyUserInputEnvelope";
import { LLMQueryCreateOrConnectWithoutUserInput } from "../inputs/LLMQueryCreateOrConnectWithoutUserInput";
import { LLMQueryCreateWithoutUserInput } from "../inputs/LLMQueryCreateWithoutUserInput";
import { LLMQueryScalarWhereInput } from "../inputs/LLMQueryScalarWhereInput";
import { LLMQueryUpdateManyWithWhereWithoutUserInput } from "../inputs/LLMQueryUpdateManyWithWhereWithoutUserInput";
import { LLMQueryUpdateWithWhereUniqueWithoutUserInput } from "../inputs/LLMQueryUpdateWithWhereUniqueWithoutUserInput";
import { LLMQueryUpsertWithWhereUniqueWithoutUserInput } from "../inputs/LLMQueryUpsertWithWhereUniqueWithoutUserInput";
import { LLMQueryWhereUniqueInput } from "../inputs/LLMQueryWhereUniqueInput";
export declare class LLMQueryUpdateManyWithoutUserInput {
    create?: LLMQueryCreateWithoutUserInput[] | undefined;
    connectOrCreate?: LLMQueryCreateOrConnectWithoutUserInput[] | undefined;
    upsert?: LLMQueryUpsertWithWhereUniqueWithoutUserInput[] | undefined;
    createMany?: LLMQueryCreateManyUserInputEnvelope | undefined;
    set?: LLMQueryWhereUniqueInput[] | undefined;
    disconnect?: LLMQueryWhereUniqueInput[] | undefined;
    delete?: LLMQueryWhereUniqueInput[] | undefined;
    connect?: LLMQueryWhereUniqueInput[] | undefined;
    update?: LLMQueryUpdateWithWhereUniqueWithoutUserInput[] | undefined;
    updateMany?: LLMQueryUpdateManyWithWhereWithoutUserInput[] | undefined;
    deleteMany?: LLMQueryScalarWhereInput[] | undefined;
}
