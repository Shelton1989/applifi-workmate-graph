import { OrderLineItemCreateManySelectedArtworkInputEnvelope } from "../inputs/OrderLineItemCreateManySelectedArtworkInputEnvelope";
import { OrderLineItemCreateOrConnectWithoutSelectedArtworkInput } from "../inputs/OrderLineItemCreateOrConnectWithoutSelectedArtworkInput";
import { OrderLineItemCreateWithoutSelectedArtworkInput } from "../inputs/OrderLineItemCreateWithoutSelectedArtworkInput";
import { OrderLineItemWhereUniqueInput } from "../inputs/OrderLineItemWhereUniqueInput";
export declare class OrderLineItemCreateNestedManyWithoutSelectedArtworkInput {
    create?: OrderLineItemCreateWithoutSelectedArtworkInput[] | undefined;
    connectOrCreate?: OrderLineItemCreateOrConnectWithoutSelectedArtworkInput[] | undefined;
    createMany?: OrderLineItemCreateManySelectedArtworkInputEnvelope | undefined;
    connect?: OrderLineItemWhereUniqueInput[] | undefined;
}
