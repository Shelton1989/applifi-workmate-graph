import { ShippingMethodCreateOrConnectWithoutOrdersInput } from "../inputs/ShippingMethodCreateOrConnectWithoutOrdersInput";
import { ShippingMethodCreateWithoutOrdersInput } from "../inputs/ShippingMethodCreateWithoutOrdersInput";
import { ShippingMethodWhereUniqueInput } from "../inputs/ShippingMethodWhereUniqueInput";
export declare class ShippingMethodCreateNestedOneWithoutOrdersInput {
    create?: ShippingMethodCreateWithoutOrdersInput | undefined;
    connectOrCreate?: ShippingMethodCreateOrConnectWithoutOrdersInput | undefined;
    connect?: ShippingMethodWhereUniqueInput | undefined;
}
