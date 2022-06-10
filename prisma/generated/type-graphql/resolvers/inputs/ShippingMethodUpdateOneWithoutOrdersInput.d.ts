import { ShippingMethodCreateOrConnectWithoutOrdersInput } from "../inputs/ShippingMethodCreateOrConnectWithoutOrdersInput";
import { ShippingMethodCreateWithoutOrdersInput } from "../inputs/ShippingMethodCreateWithoutOrdersInput";
import { ShippingMethodUpdateWithoutOrdersInput } from "../inputs/ShippingMethodUpdateWithoutOrdersInput";
import { ShippingMethodUpsertWithoutOrdersInput } from "../inputs/ShippingMethodUpsertWithoutOrdersInput";
import { ShippingMethodWhereUniqueInput } from "../inputs/ShippingMethodWhereUniqueInput";
export declare class ShippingMethodUpdateOneWithoutOrdersInput {
    create?: ShippingMethodCreateWithoutOrdersInput | undefined;
    connectOrCreate?: ShippingMethodCreateOrConnectWithoutOrdersInput | undefined;
    upsert?: ShippingMethodUpsertWithoutOrdersInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    connect?: ShippingMethodWhereUniqueInput | undefined;
    update?: ShippingMethodUpdateWithoutOrdersInput | undefined;
}
