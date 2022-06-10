"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceUpdateWithoutOrderLineItemsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CurrencyUpdateOneRequiredWithoutPricesInput_1 = require("../inputs/CurrencyUpdateOneRequiredWithoutPricesInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const ProductUpdateManyWithoutPriceInput_1 = require("../inputs/ProductUpdateManyWithoutPriceInput");
const ShippingMethodUpdateManyWithoutPriceInput_1 = require("../inputs/ShippingMethodUpdateManyWithoutPriceInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let PriceUpdateWithoutOrderLineItemsInput = class PriceUpdateWithoutOrderLineItemsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], PriceUpdateWithoutOrderLineItemsInput.prototype, "priceInLowestDenomination", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], PriceUpdateWithoutOrderLineItemsInput.prototype, "displayPrice", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CurrencyUpdateOneRequiredWithoutPricesInput_1.CurrencyUpdateOneRequiredWithoutPricesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CurrencyUpdateOneRequiredWithoutPricesInput_1.CurrencyUpdateOneRequiredWithoutPricesInput)
], PriceUpdateWithoutOrderLineItemsInput.prototype, "currency", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShippingMethodUpdateManyWithoutPriceInput_1.ShippingMethodUpdateManyWithoutPriceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShippingMethodUpdateManyWithoutPriceInput_1.ShippingMethodUpdateManyWithoutPriceInput)
], PriceUpdateWithoutOrderLineItemsInput.prototype, "ShippingMethods", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductUpdateManyWithoutPriceInput_1.ProductUpdateManyWithoutPriceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductUpdateManyWithoutPriceInput_1.ProductUpdateManyWithoutPriceInput)
], PriceUpdateWithoutOrderLineItemsInput.prototype, "Products", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], PriceUpdateWithoutOrderLineItemsInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], PriceUpdateWithoutOrderLineItemsInput.prototype, "updatedAt", void 0);
PriceUpdateWithoutOrderLineItemsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PriceUpdateWithoutOrderLineItemsInput", {
        isAbstract: true
    })
], PriceUpdateWithoutOrderLineItemsInput);
exports.PriceUpdateWithoutOrderLineItemsInput = PriceUpdateWithoutOrderLineItemsInput;
