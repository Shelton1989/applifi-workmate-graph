import { OrderCreateManySellerInputEnvelope } from "../inputs/OrderCreateManySellerInputEnvelope";
import { OrderCreateOrConnectWithoutSellerInput } from "../inputs/OrderCreateOrConnectWithoutSellerInput";
import { OrderCreateWithoutSellerInput } from "../inputs/OrderCreateWithoutSellerInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";
export declare class OrderCreateNestedManyWithoutSellerInput {
    create?: OrderCreateWithoutSellerInput[] | undefined;
    connectOrCreate?: OrderCreateOrConnectWithoutSellerInput[] | undefined;
    createMany?: OrderCreateManySellerInputEnvelope | undefined;
    connect?: OrderWhereUniqueInput[] | undefined;
}
