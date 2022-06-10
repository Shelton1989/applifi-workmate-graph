"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CurrencyUpdateOneRequiredWithoutPricesInput_1 = require("../inputs/CurrencyUpdateOneRequiredWithoutPricesInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const OrderLineItemUpdateManyWithoutLineItemPriceInput_1 = require("../inputs/OrderLineItemUpdateManyWithoutLineItemPriceInput");
const ProductUpdateManyWithoutPriceInput_1 = require("../inputs/ProductUpdateManyWithoutPriceInput");
const ShippingMethodUpdateManyWithoutPriceInput_1 = require("../inputs/ShippingMethodUpdateManyWithoutPriceInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let PriceUpdateInput = class PriceUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], PriceUpdateInput.prototype, "priceInLowestDenomination", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], PriceUpdateInput.prototype, "displayPrice", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CurrencyUpdateOneRequiredWithoutPricesInput_1.CurrencyUpdateOneRequiredWithoutPricesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CurrencyUpdateOneRequiredWithoutPricesInput_1.CurrencyUpdateOneRequiredWithoutPricesInput)
], PriceUpdateInput.prototype, "currency", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShippingMethodUpdateManyWithoutPriceInput_1.ShippingMethodUpdateManyWithoutPriceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShippingMethodUpdateManyWithoutPriceInput_1.ShippingMethodUpdateManyWithoutPriceInput)
], PriceUpdateInput.prototype, "ShippingMethods", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductUpdateManyWithoutPriceInput_1.ProductUpdateManyWithoutPriceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductUpdateManyWithoutPriceInput_1.ProductUpdateManyWithoutPriceInput)
], PriceUpdateInput.prototype, "Products", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemUpdateManyWithoutLineItemPriceInput_1.OrderLineItemUpdateManyWithoutLineItemPriceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderLineItemUpdateManyWithoutLineItemPriceInput_1.OrderLineItemUpdateManyWithoutLineItemPriceInput)
], PriceUpdateInput.prototype, "OrderLineItems", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], PriceUpdateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], PriceUpdateInput.prototype, "updatedAt", void 0);
PriceUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PriceUpdateInput", {
        isAbstract: true
    })
], PriceUpdateInput);
exports.PriceUpdateInput = PriceUpdateInput;
