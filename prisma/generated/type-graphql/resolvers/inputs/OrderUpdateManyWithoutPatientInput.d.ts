import { OrderCreateManyPatientInputEnvelope } from "../inputs/OrderCreateManyPatientInputEnvelope";
import { OrderCreateOrConnectWithoutPatientInput } from "../inputs/OrderCreateOrConnectWithoutPatientInput";
import { OrderCreateWithoutPatientInput } from "../inputs/OrderCreateWithoutPatientInput";
import { OrderScalarWhereInput } from "../inputs/OrderScalarWhereInput";
import { OrderUpdateManyWithWhereWithoutPatientInput } from "../inputs/OrderUpdateManyWithWhereWithoutPatientInput";
import { OrderUpdateWithWhereUniqueWithoutPatientInput } from "../inputs/OrderUpdateWithWhereUniqueWithoutPatientInput";
import { OrderUpsertWithWhereUniqueWithoutPatientInput } from "../inputs/OrderUpsertWithWhereUniqueWithoutPatientInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";
export declare class OrderUpdateManyWithoutPatientInput {
    create?: OrderCreateWithoutPatientInput[] | undefined;
    connectOrCreate?: OrderCreateOrConnectWithoutPatientInput[] | undefined;
    upsert?: OrderUpsertWithWhereUniqueWithoutPatientInput[] | undefined;
    createMany?: OrderCreateManyPatientInputEnvelope | undefined;
    set?: OrderWhereUniqueInput[] | undefined;
    disconnect?: OrderWhereUniqueInput[] | undefined;
    delete?: OrderWhereUniqueInput[] | undefined;
    connect?: OrderWhereUniqueInput[] | undefined;
    update?: OrderUpdateWithWhereUniqueWithoutPatientInput[] | undefined;
    updateMany?: OrderUpdateManyWithWhereWithoutPatientInput[] | undefined;
    deleteMany?: OrderScalarWhereInput[] | undefined;
}
