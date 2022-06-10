"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderLineItemUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ArtworkUpdateOneRequiredWithoutOrderLineItemsInput_1 = require("../inputs/ArtworkUpdateOneRequiredWithoutOrderLineItemsInput");
const ColorUpdateOneRequiredWithoutOrderLineItemsInput_1 = require("../inputs/ColorUpdateOneRequiredWithoutOrderLineItemsInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const OrderUpdateOneRequiredWithoutItemsInput_1 = require("../inputs/OrderUpdateOneRequiredWithoutItemsInput");
const PriceUpdateOneRequiredWithoutOrderLineItemsInput_1 = require("../inputs/PriceUpdateOneRequiredWithoutOrderLineItemsInput");
const ProductUpdateOneRequiredWithoutOrderLineItemsInput_1 = require("../inputs/ProductUpdateOneRequiredWithoutOrderLineItemsInput");
const SizeUpdateOneRequiredWithoutOrderLineItemsInput_1 = require("../inputs/SizeUpdateOneRequiredWithoutOrderLineItemsInput");
let OrderLineItemUpdateInput = class OrderLineItemUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceUpdateOneRequiredWithoutOrderLineItemsInput_1.PriceUpdateOneRequiredWithoutOrderLineItemsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriceUpdateOneRequiredWithoutOrderLineItemsInput_1.PriceUpdateOneRequiredWithoutOrderLineItemsInput)
], OrderLineItemUpdateInput.prototype, "lineItemPrice", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductUpdateOneRequiredWithoutOrderLineItemsInput_1.ProductUpdateOneRequiredWithoutOrderLineItemsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductUpdateOneRequiredWithoutOrderLineItemsInput_1.ProductUpdateOneRequiredWithoutOrderLineItemsInput)
], OrderLineItemUpdateInput.prototype, "SelectedProduct", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ColorUpdateOneRequiredWithoutOrderLineItemsInput_1.ColorUpdateOneRequiredWithoutOrderLineItemsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ColorUpdateOneRequiredWithoutOrderLineItemsInput_1.ColorUpdateOneRequiredWithoutOrderLineItemsInput)
], OrderLineItemUpdateInput.prototype, "SelectedColor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArtworkUpdateOneRequiredWithoutOrderLineItemsInput_1.ArtworkUpdateOneRequiredWithoutOrderLineItemsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ArtworkUpdateOneRequiredWithoutOrderLineItemsInput_1.ArtworkUpdateOneRequiredWithoutOrderLineItemsInput)
], OrderLineItemUpdateInput.prototype, "SelectedArtwork", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SizeUpdateOneRequiredWithoutOrderLineItemsInput_1.SizeUpdateOneRequiredWithoutOrderLineItemsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SizeUpdateOneRequiredWithoutOrderLineItemsInput_1.SizeUpdateOneRequiredWithoutOrderLineItemsInput)
], OrderLineItemUpdateInput.prototype, "SelectedSize", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderUpdateOneRequiredWithoutItemsInput_1.OrderUpdateOneRequiredWithoutItemsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderUpdateOneRequiredWithoutItemsInput_1.OrderUpdateOneRequiredWithoutItemsInput)
], OrderLineItemUpdateInput.prototype, "Order", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], OrderLineItemUpdateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], OrderLineItemUpdateInput.prototype, "updatedAt", void 0);
OrderLineItemUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderLineItemUpdateInput", {
        isAbstract: true
    })
], OrderLineItemUpdateInput);
exports.OrderLineItemUpdateInput = OrderLineItemUpdateInput;
