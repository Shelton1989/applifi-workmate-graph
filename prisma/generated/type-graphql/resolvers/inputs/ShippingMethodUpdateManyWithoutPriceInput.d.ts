import { ShippingMethodCreateManyPriceInputEnvelope } from "../inputs/ShippingMethodCreateManyPriceInputEnvelope";
import { ShippingMethodCreateOrConnectWithoutPriceInput } from "../inputs/ShippingMethodCreateOrConnectWithoutPriceInput";
import { ShippingMethodCreateWithoutPriceInput } from "../inputs/ShippingMethodCreateWithoutPriceInput";
import { ShippingMethodScalarWhereInput } from "../inputs/ShippingMethodScalarWhereInput";
import { ShippingMethodUpdateManyWithWhereWithoutPriceInput } from "../inputs/ShippingMethodUpdateManyWithWhereWithoutPriceInput";
import { ShippingMethodUpdateWithWhereUniqueWithoutPriceInput } from "../inputs/ShippingMethodUpdateWithWhereUniqueWithoutPriceInput";
import { ShippingMethodUpsertWithWhereUniqueWithoutPriceInput } from "../inputs/ShippingMethodUpsertWithWhereUniqueWithoutPriceInput";
import { ShippingMethodWhereUniqueInput } from "../inputs/ShippingMethodWhereUniqueInput";
export declare class ShippingMethodUpdateManyWithoutPriceInput {
    create?: ShippingMethodCreateWithoutPriceInput[] | undefined;
    connectOrCreate?: ShippingMethodCreateOrConnectWithoutPriceInput[] | undefined;
    upsert?: ShippingMethodUpsertWithWhereUniqueWithoutPriceInput[] | undefined;
    createMany?: ShippingMethodCreateManyPriceInputEnvelope | undefined;
    set?: ShippingMethodWhereUniqueInput[] | undefined;
    disconnect?: ShippingMethodWhereUniqueInput[] | undefined;
    delete?: ShippingMethodWhereUniqueInput[] | undefined;
    connect?: ShippingMethodWhereUniqueInput[] | undefined;
    update?: ShippingMethodUpdateWithWhereUniqueWithoutPriceInput[] | undefined;
    updateMany?: ShippingMethodUpdateManyWithWhereWithoutPriceInput[] | undefined;
    deleteMany?: ShippingMethodScalarWhereInput[] | undefined;
}
