import { ArtworkUpdateOneRequiredWithoutOrderLineItemsInput } from "../inputs/ArtworkUpdateOneRequiredWithoutOrderLineItemsInput";
import { ColorUpdateOneRequiredWithoutOrderLineItemsInput } from "../inputs/ColorUpdateOneRequiredWithoutOrderLineItemsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { PriceUpdateOneRequiredWithoutOrderLineItemsInput } from "../inputs/PriceUpdateOneRequiredWithoutOrderLineItemsInput";
import { ProductUpdateOneRequiredWithoutOrderLineItemsInput } from "../inputs/ProductUpdateOneRequiredWithoutOrderLineItemsInput";
import { SizeUpdateOneRequiredWithoutOrderLineItemsInput } from "../inputs/SizeUpdateOneRequiredWithoutOrderLineItemsInput";
export declare class OrderLineItemUpdateWithoutOrderInput {
    lineItemPrice?: PriceUpdateOneRequiredWithoutOrderLineItemsInput | undefined;
    SelectedProduct?: ProductUpdateOneRequiredWithoutOrderLineItemsInput | undefined;
    SelectedColor?: ColorUpdateOneRequiredWithoutOrderLineItemsInput | undefined;
    SelectedArtwork?: ArtworkUpdateOneRequiredWithoutOrderLineItemsInput | undefined;
    SelectedSize?: SizeUpdateOneRequiredWithoutOrderLineItemsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
