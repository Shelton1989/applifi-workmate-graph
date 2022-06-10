import { ArtworkCreateOrConnectWithoutOrderLineItemsInput } from "../inputs/ArtworkCreateOrConnectWithoutOrderLineItemsInput";
import { ArtworkCreateWithoutOrderLineItemsInput } from "../inputs/ArtworkCreateWithoutOrderLineItemsInput";
import { ArtworkUpdateWithoutOrderLineItemsInput } from "../inputs/ArtworkUpdateWithoutOrderLineItemsInput";
import { ArtworkUpsertWithoutOrderLineItemsInput } from "../inputs/ArtworkUpsertWithoutOrderLineItemsInput";
import { ArtworkWhereUniqueInput } from "../inputs/ArtworkWhereUniqueInput";
export declare class ArtworkUpdateOneRequiredWithoutOrderLineItemsInput {
    create?: ArtworkCreateWithoutOrderLineItemsInput | undefined;
    connectOrCreate?: ArtworkCreateOrConnectWithoutOrderLineItemsInput | undefined;
    upsert?: ArtworkUpsertWithoutOrderLineItemsInput | undefined;
    connect?: ArtworkWhereUniqueInput | undefined;
    update?: ArtworkUpdateWithoutOrderLineItemsInput | undefined;
}
