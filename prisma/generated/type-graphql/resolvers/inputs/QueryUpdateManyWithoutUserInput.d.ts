import { QueryCreateManyUserInputEnvelope } from "../inputs/QueryCreateManyUserInputEnvelope";
import { QueryCreateOrConnectWithoutUserInput } from "../inputs/QueryCreateOrConnectWithoutUserInput";
import { QueryCreateWithoutUserInput } from "../inputs/QueryCreateWithoutUserInput";
import { QueryScalarWhereInput } from "../inputs/QueryScalarWhereInput";
import { QueryUpdateManyWithWhereWithoutUserInput } from "../inputs/QueryUpdateManyWithWhereWithoutUserInput";
import { QueryUpdateWithWhereUniqueWithoutUserInput } from "../inputs/QueryUpdateWithWhereUniqueWithoutUserInput";
import { QueryUpsertWithWhereUniqueWithoutUserInput } from "../inputs/QueryUpsertWithWhereUniqueWithoutUserInput";
import { QueryWhereUniqueInput } from "../inputs/QueryWhereUniqueInput";
export declare class QueryUpdateManyWithoutUserInput {
    create?: QueryCreateWithoutUserInput[] | undefined;
    connectOrCreate?: QueryCreateOrConnectWithoutUserInput[] | undefined;
    upsert?: QueryUpsertWithWhereUniqueWithoutUserInput[] | undefined;
    createMany?: QueryCreateManyUserInputEnvelope | undefined;
    set?: QueryWhereUniqueInput[] | undefined;
    disconnect?: QueryWhereUniqueInput[] | undefined;
    delete?: QueryWhereUniqueInput[] | undefined;
    connect?: QueryWhereUniqueInput[] | undefined;
    update?: QueryUpdateWithWhereUniqueWithoutUserInput[] | undefined;
    updateMany?: QueryUpdateManyWithWhereWithoutUserInput[] | undefined;
    deleteMany?: QueryScalarWhereInput[] | undefined;
}
