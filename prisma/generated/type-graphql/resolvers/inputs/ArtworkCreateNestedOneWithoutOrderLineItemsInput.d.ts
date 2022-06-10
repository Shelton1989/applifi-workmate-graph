import { ArtworkCreateOrConnectWithoutOrderLineItemsInput } from "../inputs/ArtworkCreateOrConnectWithoutOrderLineItemsInput";
import { ArtworkCreateWithoutOrderLineItemsInput } from "../inputs/ArtworkCreateWithoutOrderLineItemsInput";
import { ArtworkWhereUniqueInput } from "../inputs/ArtworkWhereUniqueInput";
export declare class ArtworkCreateNestedOneWithoutOrderLineItemsInput {
    create?: ArtworkCreateWithoutOrderLineItemsInput | undefined;
    connectOrCreate?: ArtworkCreateOrConnectWithoutOrderLineItemsInput | undefined;
    connect?: ArtworkWhereUniqueInput | undefined;
}
