import { RequestCreateManyReporterInputEnvelope } from "../inputs/RequestCreateManyReporterInputEnvelope";
import { RequestCreateOrConnectWithoutReporterInput } from "../inputs/RequestCreateOrConnectWithoutReporterInput";
import { RequestCreateWithoutReporterInput } from "../inputs/RequestCreateWithoutReporterInput";
import { RequestWhereUniqueInput } from "../inputs/RequestWhereUniqueInput";
export declare class RequestCreateNestedManyWithoutReporterInput {
    create?: RequestCreateWithoutReporterInput[] | undefined;
    connectOrCreate?: RequestCreateOrConnectWithoutReporterInput[] | undefined;
    createMany?: RequestCreateManyReporterInputEnvelope | undefined;
    connect?: RequestWhereUniqueInput[] | undefined;
}
