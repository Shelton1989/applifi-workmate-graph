import { LLMQueryCreateManyUserInputEnvelope } from "../inputs/LLMQueryCreateManyUserInputEnvelope";
import { LLMQueryCreateOrConnectWithoutUserInput } from "../inputs/LLMQueryCreateOrConnectWithoutUserInput";
import { LLMQueryCreateWithoutUserInput } from "../inputs/LLMQueryCreateWithoutUserInput";
import { LLMQueryWhereUniqueInput } from "../inputs/LLMQueryWhereUniqueInput";
export declare class LLMQueryCreateNestedManyWithoutUserInput {
    create?: LLMQueryCreateWithoutUserInput[] | undefined;
    connectOrCreate?: LLMQueryCreateOrConnectWithoutUserInput[] | undefined;
    createMany?: LLMQueryCreateManyUserInputEnvelope | undefined;
    connect?: LLMQueryWhereUniqueInput[] | undefined;
}
