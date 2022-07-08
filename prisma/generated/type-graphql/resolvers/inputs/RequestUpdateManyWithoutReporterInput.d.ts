import { RequestCreateManyReporterInputEnvelope } from "../inputs/RequestCreateManyReporterInputEnvelope";
import { RequestCreateOrConnectWithoutReporterInput } from "../inputs/RequestCreateOrConnectWithoutReporterInput";
import { RequestCreateWithoutReporterInput } from "../inputs/RequestCreateWithoutReporterInput";
import { RequestScalarWhereInput } from "../inputs/RequestScalarWhereInput";
import { RequestUpdateManyWithWhereWithoutReporterInput } from "../inputs/RequestUpdateManyWithWhereWithoutReporterInput";
import { RequestUpdateWithWhereUniqueWithoutReporterInput } from "../inputs/RequestUpdateWithWhereUniqueWithoutReporterInput";
import { RequestUpsertWithWhereUniqueWithoutReporterInput } from "../inputs/RequestUpsertWithWhereUniqueWithoutReporterInput";
import { RequestWhereUniqueInput } from "../inputs/RequestWhereUniqueInput";
export declare class RequestUpdateManyWithoutReporterInput {
    create?: RequestCreateWithoutReporterInput[] | undefined;
    connectOrCreate?: RequestCreateOrConnectWithoutReporterInput[] | undefined;
    upsert?: RequestUpsertWithWhereUniqueWithoutReporterInput[] | undefined;
    createMany?: RequestCreateManyReporterInputEnvelope | undefined;
    set?: RequestWhereUniqueInput[] | undefined;
    disconnect?: RequestWhereUniqueInput[] | undefined;
    delete?: RequestWhereUniqueInput[] | undefined;
    connect?: RequestWhereUniqueInput[] | undefined;
    update?: RequestUpdateWithWhereUniqueWithoutReporterInput[] | undefined;
    updateMany?: RequestUpdateManyWithWhereWithoutReporterInput[] | undefined;
    deleteMany?: RequestScalarWhereInput[] | undefined;
}
