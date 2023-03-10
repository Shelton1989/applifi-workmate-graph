import { OrderCreateManyMealInputEnvelope } from "../inputs/OrderCreateManyMealInputEnvelope";
import { OrderCreateOrConnectWithoutMealInput } from "../inputs/OrderCreateOrConnectWithoutMealInput";
import { OrderCreateWithoutMealInput } from "../inputs/OrderCreateWithoutMealInput";
import { OrderScalarWhereInput } from "../inputs/OrderScalarWhereInput";
import { OrderUpdateManyWithWhereWithoutMealInput } from "../inputs/OrderUpdateManyWithWhereWithoutMealInput";
import { OrderUpdateWithWhereUniqueWithoutMealInput } from "../inputs/OrderUpdateWithWhereUniqueWithoutMealInput";
import { OrderUpsertWithWhereUniqueWithoutMealInput } from "../inputs/OrderUpsertWithWhereUniqueWithoutMealInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";
export declare class OrderUpdateManyWithoutMealInput {
    create?: OrderCreateWithoutMealInput[] | undefined;
    connectOrCreate?: OrderCreateOrConnectWithoutMealInput[] | undefined;
    upsert?: OrderUpsertWithWhereUniqueWithoutMealInput[] | undefined;
    createMany?: OrderCreateManyMealInputEnvelope | undefined;
    set?: OrderWhereUniqueInput[] | undefined;
    disconnect?: OrderWhereUniqueInput[] | undefined;
    delete?: OrderWhereUniqueInput[] | undefined;
    connect?: OrderWhereUniqueInput[] | undefined;
    update?: OrderUpdateWithWhereUniqueWithoutMealInput[] | undefined;
    updateMany?: OrderUpdateManyWithWhereWithoutMealInput[] | undefined;
    deleteMany?: OrderScalarWhereInput[] | undefined;
}
