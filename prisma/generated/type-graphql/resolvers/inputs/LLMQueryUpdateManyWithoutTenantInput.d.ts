import { LLMQueryCreateManyTenantInputEnvelope } from "../inputs/LLMQueryCreateManyTenantInputEnvelope";
import { LLMQueryCreateOrConnectWithoutTenantInput } from "../inputs/LLMQueryCreateOrConnectWithoutTenantInput";
import { LLMQueryCreateWithoutTenantInput } from "../inputs/LLMQueryCreateWithoutTenantInput";
import { LLMQueryScalarWhereInput } from "../inputs/LLMQueryScalarWhereInput";
import { LLMQueryUpdateManyWithWhereWithoutTenantInput } from "../inputs/LLMQueryUpdateManyWithWhereWithoutTenantInput";
import { LLMQueryUpdateWithWhereUniqueWithoutTenantInput } from "../inputs/LLMQueryUpdateWithWhereUniqueWithoutTenantInput";
import { LLMQueryUpsertWithWhereUniqueWithoutTenantInput } from "../inputs/LLMQueryUpsertWithWhereUniqueWithoutTenantInput";
import { LLMQueryWhereUniqueInput } from "../inputs/LLMQueryWhereUniqueInput";
export declare class LLMQueryUpdateManyWithoutTenantInput {
    create?: LLMQueryCreateWithoutTenantInput[] | undefined;
    connectOrCreate?: LLMQueryCreateOrConnectWithoutTenantInput[] | undefined;
    upsert?: LLMQueryUpsertWithWhereUniqueWithoutTenantInput[] | undefined;
    createMany?: LLMQueryCreateManyTenantInputEnvelope | undefined;
    set?: LLMQueryWhereUniqueInput[] | undefined;
    disconnect?: LLMQueryWhereUniqueInput[] | undefined;
    delete?: LLMQueryWhereUniqueInput[] | undefined;
    connect?: LLMQueryWhereUniqueInput[] | undefined;
    update?: LLMQueryUpdateWithWhereUniqueWithoutTenantInput[] | undefined;
    updateMany?: LLMQueryUpdateManyWithWhereWithoutTenantInput[] | undefined;
    deleteMany?: LLMQueryScalarWhereInput[] | undefined;
}
