import { OrderCreateManyMealInputEnvelope } from "../inputs/OrderCreateManyMealInputEnvelope";
import { OrderCreateOrConnectWithoutMealInput } from "../inputs/OrderCreateOrConnectWithoutMealInput";
import { OrderCreateWithoutMealInput } from "../inputs/OrderCreateWithoutMealInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";
export declare class OrderCreateNestedManyWithoutMealInput {
    create?: OrderCreateWithoutMealInput[] | undefined;
    connectOrCreate?: OrderCreateOrConnectWithoutMealInput[] | undefined;
    createMany?: OrderCreateManyMealInputEnvelope | undefined;
    connect?: OrderWhereUniqueInput[] | undefined;
}
