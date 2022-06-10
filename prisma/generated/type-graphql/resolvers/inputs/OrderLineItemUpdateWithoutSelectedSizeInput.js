"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderLineItemUpdateWithoutSelectedSizeInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ArtworkUpdateOneRequiredWithoutOrderLineItemsInput_1 = require("../inputs/ArtworkUpdateOneRequiredWithoutOrderLineItemsInput");
const ColorUpdateOneRequiredWithoutOrderLineItemsInput_1 = require("../inputs/ColorUpdateOneRequiredWithoutOrderLineItemsInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const OrderUpdateOneRequiredWithoutItemsInput_1 = require("../inputs/OrderUpdateOneRequiredWithoutItemsInput");
const PriceUpdateOneRequiredWithoutOrderLineItemsInput_1 = require("../inputs/PriceUpdateOneRequiredWithoutOrderLineItemsInput");
const ProductUpdateOneRequiredWithoutOrderLineItemsInput_1 = require("../inputs/ProductUpdateOneRequiredWithoutOrderLineItemsInput");
let OrderLineItemUpdateWithoutSelectedSizeInput = class OrderLineItemUpdateWithoutSelectedSizeInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceUpdateOneRequiredWithoutOrderLineItemsInput_1.PriceUpdateOneRequiredWithoutOrderLineItemsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriceUpdateOneRequiredWithoutOrderLineItemsInput_1.PriceUpdateOneRequiredWithoutOrderLineItemsInput)
], OrderLineItemUpdateWithoutSelectedSizeInput.prototype, "lineItemPrice", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductUpdateOneRequiredWithoutOrderLineItemsInput_1.ProductUpdateOneRequiredWithoutOrderLineItemsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductUpdateOneRequiredWithoutOrderLineItemsInput_1.ProductUpdateOneRequiredWithoutOrderLineItemsInput)
], OrderLineItemUpdateWithoutSelectedSizeInput.prototype, "SelectedProduct", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ColorUpdateOneRequiredWithoutOrderLineItemsInput_1.ColorUpdateOneRequiredWithoutOrderLineItemsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ColorUpdateOneRequiredWithoutOrderLineItemsInput_1.ColorUpdateOneRequiredWithoutOrderLineItemsInput)
], OrderLineItemUpdateWithoutSelectedSizeInput.prototype, "SelectedColor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArtworkUpdateOneRequiredWithoutOrderLineItemsInput_1.ArtworkUpdateOneRequiredWithoutOrderLineItemsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ArtworkUpdateOneRequiredWithoutOrderLineItemsInput_1.ArtworkUpdateOneRequiredWithoutOrderLineItemsInput)
], OrderLineItemUpdateWithoutSelectedSizeInput.prototype, "SelectedArtwork", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderUpdateOneRequiredWithoutItemsInput_1.OrderUpdateOneRequiredWithoutItemsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderUpdateOneRequiredWithoutItemsInput_1.OrderUpdateOneRequiredWithoutItemsInput)
], OrderLineItemUpdateWithoutSelectedSizeInput.prototype, "Order", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], OrderLineItemUpdateWithoutSelectedSizeInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], OrderLineItemUpdateWithoutSelectedSizeInput.prototype, "updatedAt", void 0);
OrderLineItemUpdateWithoutSelectedSizeInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderLineItemUpdateWithoutSelectedSizeInput", {
        isAbstract: true
    })
], OrderLineItemUpdateWithoutSelectedSizeInput);
exports.OrderLineItemUpdateWithoutSelectedSizeInput = OrderLineItemUpdateWithoutSelectedSizeInput;
