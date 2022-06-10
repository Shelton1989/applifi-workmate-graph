"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderLineItemUpdateWithoutOrderInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ArtworkUpdateOneRequiredWithoutOrderLineItemsInput_1 = require("../inputs/ArtworkUpdateOneRequiredWithoutOrderLineItemsInput");
const ColorUpdateOneRequiredWithoutOrderLineItemsInput_1 = require("../inputs/ColorUpdateOneRequiredWithoutOrderLineItemsInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const PriceUpdateOneRequiredWithoutOrderLineItemsInput_1 = require("../inputs/PriceUpdateOneRequiredWithoutOrderLineItemsInput");
const ProductUpdateOneRequiredWithoutOrderLineItemsInput_1 = require("../inputs/ProductUpdateOneRequiredWithoutOrderLineItemsInput");
const SizeUpdateOneRequiredWithoutOrderLineItemsInput_1 = require("../inputs/SizeUpdateOneRequiredWithoutOrderLineItemsInput");
let OrderLineItemUpdateWithoutOrderInput = class OrderLineItemUpdateWithoutOrderInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceUpdateOneRequiredWithoutOrderLineItemsInput_1.PriceUpdateOneRequiredWithoutOrderLineItemsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriceUpdateOneRequiredWithoutOrderLineItemsInput_1.PriceUpdateOneRequiredWithoutOrderLineItemsInput)
], OrderLineItemUpdateWithoutOrderInput.prototype, "lineItemPrice", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductUpdateOneRequiredWithoutOrderLineItemsInput_1.ProductUpdateOneRequiredWithoutOrderLineItemsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductUpdateOneRequiredWithoutOrderLineItemsInput_1.ProductUpdateOneRequiredWithoutOrderLineItemsInput)
], OrderLineItemUpdateWithoutOrderInput.prototype, "SelectedProduct", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ColorUpdateOneRequiredWithoutOrderLineItemsInput_1.ColorUpdateOneRequiredWithoutOrderLineItemsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ColorUpdateOneRequiredWithoutOrderLineItemsInput_1.ColorUpdateOneRequiredWithoutOrderLineItemsInput)
], OrderLineItemUpdateWithoutOrderInput.prototype, "SelectedColor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArtworkUpdateOneRequiredWithoutOrderLineItemsInput_1.ArtworkUpdateOneRequiredWithoutOrderLineItemsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ArtworkUpdateOneRequiredWithoutOrderLineItemsInput_1.ArtworkUpdateOneRequiredWithoutOrderLineItemsInput)
], OrderLineItemUpdateWithoutOrderInput.prototype, "SelectedArtwork", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SizeUpdateOneRequiredWithoutOrderLineItemsInput_1.SizeUpdateOneRequiredWithoutOrderLineItemsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SizeUpdateOneRequiredWithoutOrderLineItemsInput_1.SizeUpdateOneRequiredWithoutOrderLineItemsInput)
], OrderLineItemUpdateWithoutOrderInput.prototype, "SelectedSize", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], OrderLineItemUpdateWithoutOrderInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], OrderLineItemUpdateWithoutOrderInput.prototype, "updatedAt", void 0);
OrderLineItemUpdateWithoutOrderInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderLineItemUpdateWithoutOrderInput", {
        isAbstract: true
    })
], OrderLineItemUpdateWithoutOrderInput);
exports.OrderLineItemUpdateWithoutOrderInput = OrderLineItemUpdateWithoutOrderInput;
