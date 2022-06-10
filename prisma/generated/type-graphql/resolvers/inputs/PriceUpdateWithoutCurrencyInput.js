"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceUpdateWithoutCurrencyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const OrderLineItemUpdateManyWithoutLineItemPriceInput_1 = require("../inputs/OrderLineItemUpdateManyWithoutLineItemPriceInput");
const ProductUpdateManyWithoutPriceInput_1 = require("../inputs/ProductUpdateManyWithoutPriceInput");
const ShippingMethodUpdateManyWithoutPriceInput_1 = require("../inputs/ShippingMethodUpdateManyWithoutPriceInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let PriceUpdateWithoutCurrencyInput = class PriceUpdateWithoutCurrencyInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], PriceUpdateWithoutCurrencyInput.prototype, "priceInLowestDenomination", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], PriceUpdateWithoutCurrencyInput.prototype, "displayPrice", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShippingMethodUpdateManyWithoutPriceInput_1.ShippingMethodUpdateManyWithoutPriceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShippingMethodUpdateManyWithoutPriceInput_1.ShippingMethodUpdateManyWithoutPriceInput)
], PriceUpdateWithoutCurrencyInput.prototype, "ShippingMethods", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductUpdateManyWithoutPriceInput_1.ProductUpdateManyWithoutPriceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductUpdateManyWithoutPriceInput_1.ProductUpdateManyWithoutPriceInput)
], PriceUpdateWithoutCurrencyInput.prototype, "Products", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemUpdateManyWithoutLineItemPriceInput_1.OrderLineItemUpdateManyWithoutLineItemPriceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderLineItemUpdateManyWithoutLineItemPriceInput_1.OrderLineItemUpdateManyWithoutLineItemPriceInput)
], PriceUpdateWithoutCurrencyInput.prototype, "OrderLineItems", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], PriceUpdateWithoutCurrencyInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], PriceUpdateWithoutCurrencyInput.prototype, "updatedAt", void 0);
PriceUpdateWithoutCurrencyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PriceUpdateWithoutCurrencyInput", {
        isAbstract: true
    })
], PriceUpdateWithoutCurrencyInput);
exports.PriceUpdateWithoutCurrencyInput = PriceUpdateWithoutCurrencyInput;
