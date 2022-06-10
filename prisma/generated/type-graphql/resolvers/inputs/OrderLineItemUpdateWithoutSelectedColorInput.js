"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderLineItemUpdateWithoutSelectedColorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ArtworkUpdateOneRequiredWithoutOrderLineItemsInput_1 = require("../inputs/ArtworkUpdateOneRequiredWithoutOrderLineItemsInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const OrderUpdateOneRequiredWithoutItemsInput_1 = require("../inputs/OrderUpdateOneRequiredWithoutItemsInput");
const PriceUpdateOneRequiredWithoutOrderLineItemsInput_1 = require("../inputs/PriceUpdateOneRequiredWithoutOrderLineItemsInput");
const ProductUpdateOneRequiredWithoutOrderLineItemsInput_1 = require("../inputs/ProductUpdateOneRequiredWithoutOrderLineItemsInput");
const SizeUpdateOneRequiredWithoutOrderLineItemsInput_1 = require("../inputs/SizeUpdateOneRequiredWithoutOrderLineItemsInput");
let OrderLineItemUpdateWithoutSelectedColorInput = class OrderLineItemUpdateWithoutSelectedColorInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceUpdateOneRequiredWithoutOrderLineItemsInput_1.PriceUpdateOneRequiredWithoutOrderLineItemsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriceUpdateOneRequiredWithoutOrderLineItemsInput_1.PriceUpdateOneRequiredWithoutOrderLineItemsInput)
], OrderLineItemUpdateWithoutSelectedColorInput.prototype, "lineItemPrice", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductUpdateOneRequiredWithoutOrderLineItemsInput_1.ProductUpdateOneRequiredWithoutOrderLineItemsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductUpdateOneRequiredWithoutOrderLineItemsInput_1.ProductUpdateOneRequiredWithoutOrderLineItemsInput)
], OrderLineItemUpdateWithoutSelectedColorInput.prototype, "SelectedProduct", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArtworkUpdateOneRequiredWithoutOrderLineItemsInput_1.ArtworkUpdateOneRequiredWithoutOrderLineItemsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ArtworkUpdateOneRequiredWithoutOrderLineItemsInput_1.ArtworkUpdateOneRequiredWithoutOrderLineItemsInput)
], OrderLineItemUpdateWithoutSelectedColorInput.prototype, "SelectedArtwork", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SizeUpdateOneRequiredWithoutOrderLineItemsInput_1.SizeUpdateOneRequiredWithoutOrderLineItemsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SizeUpdateOneRequiredWithoutOrderLineItemsInput_1.SizeUpdateOneRequiredWithoutOrderLineItemsInput)
], OrderLineItemUpdateWithoutSelectedColorInput.prototype, "SelectedSize", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderUpdateOneRequiredWithoutItemsInput_1.OrderUpdateOneRequiredWithoutItemsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderUpdateOneRequiredWithoutItemsInput_1.OrderUpdateOneRequiredWithoutItemsInput)
], OrderLineItemUpdateWithoutSelectedColorInput.prototype, "Order", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], OrderLineItemUpdateWithoutSelectedColorInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], OrderLineItemUpdateWithoutSelectedColorInput.prototype, "updatedAt", void 0);
OrderLineItemUpdateWithoutSelectedColorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderLineItemUpdateWithoutSelectedColorInput", {
        isAbstract: true
    })
], OrderLineItemUpdateWithoutSelectedColorInput);
exports.OrderLineItemUpdateWithoutSelectedColorInput = OrderLineItemUpdateWithoutSelectedColorInput;
