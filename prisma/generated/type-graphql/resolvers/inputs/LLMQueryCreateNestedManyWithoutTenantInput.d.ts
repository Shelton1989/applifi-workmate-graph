import { LLMQueryCreateManyTenantInputEnvelope } from "../inputs/LLMQueryCreateManyTenantInputEnvelope";
import { LLMQueryCreateOrConnectWithoutTenantInput } from "../inputs/LLMQueryCreateOrConnectWithoutTenantInput";
import { LLMQueryCreateWithoutTenantInput } from "../inputs/LLMQueryCreateWithoutTenantInput";
import { LLMQueryWhereUniqueInput } from "../inputs/LLMQueryWhereUniqueInput";
export declare class LLMQueryCreateNestedManyWithoutTenantInput {
    create?: LLMQueryCreateWithoutTenantInput[] | undefined;
    connectOrCreate?: LLMQueryCreateOrConnectWithoutTenantInput[] | undefined;
    createMany?: LLMQueryCreateManyTenantInputEnvelope | undefined;
    connect?: LLMQueryWhereUniqueInput[] | undefined;
}
