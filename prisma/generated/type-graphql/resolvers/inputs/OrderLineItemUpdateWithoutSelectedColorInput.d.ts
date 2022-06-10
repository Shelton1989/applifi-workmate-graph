import { ArtworkUpdateOneRequiredWithoutOrderLineItemsInput } from "../inputs/ArtworkUpdateOneRequiredWithoutOrderLineItemsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { OrderUpdateOneRequiredWithoutItemsInput } from "../inputs/OrderUpdateOneRequiredWithoutItemsInput";
import { PriceUpdateOneRequiredWithoutOrderLineItemsInput } from "../inputs/PriceUpdateOneRequiredWithoutOrderLineItemsInput";
import { ProductUpdateOneRequiredWithoutOrderLineItemsInput } from "../inputs/ProductUpdateOneRequiredWithoutOrderLineItemsInput";
import { SizeUpdateOneRequiredWithoutOrderLineItemsInput } from "../inputs/SizeUpdateOneRequiredWithoutOrderLineItemsInput";
export declare class OrderLineItemUpdateWithoutSelectedColorInput {
    lineItemPrice?: PriceUpdateOneRequiredWithoutOrderLineItemsInput | undefined;
    SelectedProduct?: ProductUpdateOneRequiredWithoutOrderLineItemsInput | undefined;
    SelectedArtwork?: ArtworkUpdateOneRequiredWithoutOrderLineItemsInput | undefined;
    SelectedSize?: SizeUpdateOneRequiredWithoutOrderLineItemsInput | undefined;
    Order?: OrderUpdateOneRequiredWithoutItemsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
