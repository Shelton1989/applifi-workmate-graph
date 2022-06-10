import { OrderLineItemCreateManySelectedArtworkInputEnvelope } from "../inputs/OrderLineItemCreateManySelectedArtworkInputEnvelope";
import { OrderLineItemCreateOrConnectWithoutSelectedArtworkInput } from "../inputs/OrderLineItemCreateOrConnectWithoutSelectedArtworkInput";
import { OrderLineItemCreateWithoutSelectedArtworkInput } from "../inputs/OrderLineItemCreateWithoutSelectedArtworkInput";
import { OrderLineItemScalarWhereInput } from "../inputs/OrderLineItemScalarWhereInput";
import { OrderLineItemUpdateManyWithWhereWithoutSelectedArtworkInput } from "../inputs/OrderLineItemUpdateManyWithWhereWithoutSelectedArtworkInput";
import { OrderLineItemUpdateWithWhereUniqueWithoutSelectedArtworkInput } from "../inputs/OrderLineItemUpdateWithWhereUniqueWithoutSelectedArtworkInput";
import { OrderLineItemUpsertWithWhereUniqueWithoutSelectedArtworkInput } from "../inputs/OrderLineItemUpsertWithWhereUniqueWithoutSelectedArtworkInput";
import { OrderLineItemWhereUniqueInput } from "../inputs/OrderLineItemWhereUniqueInput";
export declare class OrderLineItemUpdateManyWithoutSelectedArtworkInput {
    create?: OrderLineItemCreateWithoutSelectedArtworkInput[] | undefined;
    connectOrCreate?: OrderLineItemCreateOrConnectWithoutSelectedArtworkInput[] | undefined;
    upsert?: OrderLineItemUpsertWithWhereUniqueWithoutSelectedArtworkInput[] | undefined;
    createMany?: OrderLineItemCreateManySelectedArtworkInputEnvelope | undefined;
    set?: OrderLineItemWhereUniqueInput[] | undefined;
    disconnect?: OrderLineItemWhereUniqueInput[] | undefined;
    delete?: OrderLineItemWhereUniqueInput[] | undefined;
    connect?: OrderLineItemWhereUniqueInput[] | undefined;
    update?: OrderLineItemUpdateWithWhereUniqueWithoutSelectedArtworkInput[] | undefined;
    updateMany?: OrderLineItemUpdateManyWithWhereWithoutSelectedArtworkInput[] | undefined;
    deleteMany?: OrderLineItemScalarWhereInput[] | undefined;
}
