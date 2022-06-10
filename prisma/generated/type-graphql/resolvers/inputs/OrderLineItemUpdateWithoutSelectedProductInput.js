"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderLineItemUpdateWithoutSelectedProductInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ArtworkUpdateOneRequiredWithoutOrderLineItemsInput_1 = require("../inputs/ArtworkUpdateOneRequiredWithoutOrderLineItemsInput");
const ColorUpdateOneRequiredWithoutOrderLineItemsInput_1 = require("../inputs/ColorUpdateOneRequiredWithoutOrderLineItemsInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const OrderUpdateOneRequiredWithoutItemsInput_1 = require("../inputs/OrderUpdateOneRequiredWithoutItemsInput");
const PriceUpdateOneRequiredWithoutOrderLineItemsInput_1 = require("../inputs/PriceUpdateOneRequiredWithoutOrderLineItemsInput");
const SizeUpdateOneRequiredWithoutOrderLineItemsInput_1 = require("../inputs/SizeUpdateOneRequiredWithoutOrderLineItemsInput");
let OrderLineItemUpdateWithoutSelectedProductInput = class OrderLineItemUpdateWithoutSelectedProductInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceUpdateOneRequiredWithoutOrderLineItemsInput_1.PriceUpdateOneRequiredWithoutOrderLineItemsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriceUpdateOneRequiredWithoutOrderLineItemsInput_1.PriceUpdateOneRequiredWithoutOrderLineItemsInput)
], OrderLineItemUpdateWithoutSelectedProductInput.prototype, "lineItemPrice", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ColorUpdateOneRequiredWithoutOrderLineItemsInput_1.ColorUpdateOneRequiredWithoutOrderLineItemsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ColorUpdateOneRequiredWithoutOrderLineItemsInput_1.ColorUpdateOneRequiredWithoutOrderLineItemsInput)
], OrderLineItemUpdateWithoutSelectedProductInput.prototype, "SelectedColor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArtworkUpdateOneRequiredWithoutOrderLineItemsInput_1.ArtworkUpdateOneRequiredWithoutOrderLineItemsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ArtworkUpdateOneRequiredWithoutOrderLineItemsInput_1.ArtworkUpdateOneRequiredWithoutOrderLineItemsInput)
], OrderLineItemUpdateWithoutSelectedProductInput.prototype, "SelectedArtwork", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SizeUpdateOneRequiredWithoutOrderLineItemsInput_1.SizeUpdateOneRequiredWithoutOrderLineItemsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SizeUpdateOneRequiredWithoutOrderLineItemsInput_1.SizeUpdateOneRequiredWithoutOrderLineItemsInput)
], OrderLineItemUpdateWithoutSelectedProductInput.prototype, "SelectedSize", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderUpdateOneRequiredWithoutItemsInput_1.OrderUpdateOneRequiredWithoutItemsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderUpdateOneRequiredWithoutItemsInput_1.OrderUpdateOneRequiredWithoutItemsInput)
], OrderLineItemUpdateWithoutSelectedProductInput.prototype, "Order", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], OrderLineItemUpdateWithoutSelectedProductInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], OrderLineItemUpdateWithoutSelectedProductInput.prototype, "updatedAt", void 0);
OrderLineItemUpdateWithoutSelectedProductInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderLineItemUpdateWithoutSelectedProductInput", {
        isAbstract: true
    })
], OrderLineItemUpdateWithoutSelectedProductInput);
exports.OrderLineItemUpdateWithoutSelectedProductInput = OrderLineItemUpdateWithoutSelectedProductInput;
