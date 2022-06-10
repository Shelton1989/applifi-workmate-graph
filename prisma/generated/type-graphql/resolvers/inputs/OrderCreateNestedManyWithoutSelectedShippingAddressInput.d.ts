import { OrderCreateManySelectedShippingAddressInputEnvelope } from "../inputs/OrderCreateManySelectedShippingAddressInputEnvelope";
import { OrderCreateOrConnectWithoutSelectedShippingAddressInput } from "../inputs/OrderCreateOrConnectWithoutSelectedShippingAddressInput";
import { OrderCreateWithoutSelectedShippingAddressInput } from "../inputs/OrderCreateWithoutSelectedShippingAddressInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";
export declare class OrderCreateNestedManyWithoutSelectedShippingAddressInput {
    create?: OrderCreateWithoutSelectedShippingAddressInput[] | undefined;
    connectOrCreate?: OrderCreateOrConnectWithoutSelectedShippingAddressInput[] | undefined;
    createMany?: OrderCreateManySelectedShippingAddressInputEnvelope | undefined;
    connect?: OrderWhereUniqueInput[] | undefined;
}
