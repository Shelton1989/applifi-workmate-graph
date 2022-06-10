import { ColorCreateOrConnectWithoutOrderLineItemsInput } from "../inputs/ColorCreateOrConnectWithoutOrderLineItemsInput";
import { ColorCreateWithoutOrderLineItemsInput } from "../inputs/ColorCreateWithoutOrderLineItemsInput";
import { ColorUpdateWithoutOrderLineItemsInput } from "../inputs/ColorUpdateWithoutOrderLineItemsInput";
import { ColorUpsertWithoutOrderLineItemsInput } from "../inputs/ColorUpsertWithoutOrderLineItemsInput";
import { ColorWhereUniqueInput } from "../inputs/ColorWhereUniqueInput";
export declare class ColorUpdateOneRequiredWithoutOrderLineItemsInput {
    create?: ColorCreateWithoutOrderLineItemsInput | undefined;
    connectOrCreate?: ColorCreateOrConnectWithoutOrderLineItemsInput | undefined;
    upsert?: ColorUpsertWithoutOrderLineItemsInput | undefined;
    connect?: ColorWhereUniqueInput | undefined;
    update?: ColorUpdateWithoutOrderLineItemsInput | undefined;
}
