import { QueryCreateManyUserInputEnvelope } from "../inputs/QueryCreateManyUserInputEnvelope";
import { QueryCreateOrConnectWithoutUserInput } from "../inputs/QueryCreateOrConnectWithoutUserInput";
import { QueryCreateWithoutUserInput } from "../inputs/QueryCreateWithoutUserInput";
import { QueryWhereUniqueInput } from "../inputs/QueryWhereUniqueInput";
export declare class QueryCreateNestedManyWithoutUserInput {
    create?: QueryCreateWithoutUserInput[] | undefined;
    connectOrCreate?: QueryCreateOrConnectWithoutUserInput[] | undefined;
    createMany?: QueryCreateManyUserInputEnvelope | undefined;
    connect?: QueryWhereUniqueInput[] | undefined;
}
