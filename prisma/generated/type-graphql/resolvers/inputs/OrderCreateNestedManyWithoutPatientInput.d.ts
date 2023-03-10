import { OrderCreateManyPatientInputEnvelope } from "../inputs/OrderCreateManyPatientInputEnvelope";
import { OrderCreateOrConnectWithoutPatientInput } from "../inputs/OrderCreateOrConnectWithoutPatientInput";
import { OrderCreateWithoutPatientInput } from "../inputs/OrderCreateWithoutPatientInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";
export declare class OrderCreateNestedManyWithoutPatientInput {
    create?: OrderCreateWithoutPatientInput[] | undefined;
    connectOrCreate?: OrderCreateOrConnectWithoutPatientInput[] | undefined;
    createMany?: OrderCreateManyPatientInputEnvelope | undefined;
    connect?: OrderWhereUniqueInput[] | undefined;
}
