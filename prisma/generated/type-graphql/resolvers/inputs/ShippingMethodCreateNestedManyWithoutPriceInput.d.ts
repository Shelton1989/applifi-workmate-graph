import { ShippingMethodCreateManyPriceInputEnvelope } from "../inputs/ShippingMethodCreateManyPriceInputEnvelope";
import { ShippingMethodCreateOrConnectWithoutPriceInput } from "../inputs/ShippingMethodCreateOrConnectWithoutPriceInput";
import { ShippingMethodCreateWithoutPriceInput } from "../inputs/ShippingMethodCreateWithoutPriceInput";
import { ShippingMethodWhereUniqueInput } from "../inputs/ShippingMethodWhereUniqueInput";
export declare class ShippingMethodCreateNestedManyWithoutPriceInput {
    create?: ShippingMethodCreateWithoutPriceInput[] | undefined;
    connectOrCreate?: ShippingMethodCreateOrConnectWithoutPriceInput[] | undefined;
    createMany?: ShippingMethodCreateManyPriceInputEnvelope | undefined;
    connect?: ShippingMethodWhereUniqueInput[] | undefined;
}
