import { OrderLineItemCreateManyLineItemPriceInputEnvelope } from "../inputs/OrderLineItemCreateManyLineItemPriceInputEnvelope";
import { OrderLineItemCreateOrConnectWithoutLineItemPriceInput } from "../inputs/OrderLineItemCreateOrConnectWithoutLineItemPriceInput";
import { OrderLineItemCreateWithoutLineItemPriceInput } from "../inputs/OrderLineItemCreateWithoutLineItemPriceInput";
import { OrderLineItemScalarWhereInput } from "../inputs/OrderLineItemScalarWhereInput";
import { OrderLineItemUpdateManyWithWhereWithoutLineItemPriceInput } from "../inputs/OrderLineItemUpdateManyWithWhereWithoutLineItemPriceInput";
import { OrderLineItemUpdateWithWhereUniqueWithoutLineItemPriceInput } from "../inputs/OrderLineItemUpdateWithWhereUniqueWithoutLineItemPriceInput";
import { OrderLineItemUpsertWithWhereUniqueWithoutLineItemPriceInput } from "../inputs/OrderLineItemUpsertWithWhereUniqueWithoutLineItemPriceInput";
import { OrderLineItemWhereUniqueInput } from "../inputs/OrderLineItemWhereUniqueInput";
export declare class OrderLineItemUpdateManyWithoutLineItemPriceInput {
    create?: OrderLineItemCreateWithoutLineItemPriceInput[] | undefined;
    connectOrCreate?: OrderLineItemCreateOrConnectWithoutLineItemPriceInput[] | undefined;
    upsert?: OrderLineItemUpsertWithWhereUniqueWithoutLineItemPriceInput[] | undefined;
    createMany?: OrderLineItemCreateManyLineItemPriceInputEnvelope | undefined;
    set?: OrderLineItemWhereUniqueInput[] | undefined;
    disconnect?: OrderLineItemWhereUniqueInput[] | undefined;
    delete?: OrderLineItemWhereUniqueInput[] | undefined;
    connect?: OrderLineItemWhereUniqueInput[] | undefined;
    update?: OrderLineItemUpdateWithWhereUniqueWithoutLineItemPriceInput[] | undefined;
    updateMany?: OrderLineItemUpdateManyWithWhereWithoutLineItemPriceInput[] | undefined;
    deleteMany?: OrderLineItemScalarWhereInput[] | undefined;
}
