import { OrderCreateManySelectedShippingMethodInputEnvelope } from "../inputs/OrderCreateManySelectedShippingMethodInputEnvelope";
import { OrderCreateOrConnectWithoutSelectedShippingMethodInput } from "../inputs/OrderCreateOrConnectWithoutSelectedShippingMethodInput";
import { OrderCreateWithoutSelectedShippingMethodInput } from "../inputs/OrderCreateWithoutSelectedShippingMethodInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";
export declare class OrderCreateNestedManyWithoutSelectedShippingMethodInput {
    create?: OrderCreateWithoutSelectedShippingMethodInput[] | undefined;
    connectOrCreate?: OrderCreateOrConnectWithoutSelectedShippingMethodInput[] | undefined;
    createMany?: OrderCreateManySelectedShippingMethodInputEnvelope | undefined;
    connect?: OrderWhereUniqueInput[] | undefined;
}
