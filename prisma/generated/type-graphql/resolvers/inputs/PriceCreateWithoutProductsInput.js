"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceCreateWithoutProductsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CurrencyCreateNestedOneWithoutPricesInput_1 = require("../inputs/CurrencyCreateNestedOneWithoutPricesInput");
const OrderLineItemCreateNestedManyWithoutLineItemPriceInput_1 = require("../inputs/OrderLineItemCreateNestedManyWithoutLineItemPriceInput");
const ShippingMethodCreateNestedManyWithoutPriceInput_1 = require("../inputs/ShippingMethodCreateNestedManyWithoutPriceInput");
let PriceCreateWithoutProductsInput = class PriceCreateWithoutProductsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PriceCreateWithoutProductsInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], PriceCreateWithoutProductsInput.prototype, "priceInLowestDenomination", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], PriceCreateWithoutProductsInput.prototype, "displayPrice", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CurrencyCreateNestedOneWithoutPricesInput_1.CurrencyCreateNestedOneWithoutPricesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CurrencyCreateNestedOneWithoutPricesInput_1.CurrencyCreateNestedOneWithoutPricesInput)
], PriceCreateWithoutProductsInput.prototype, "currency", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShippingMethodCreateNestedManyWithoutPriceInput_1.ShippingMethodCreateNestedManyWithoutPriceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShippingMethodCreateNestedManyWithoutPriceInput_1.ShippingMethodCreateNestedManyWithoutPriceInput)
], PriceCreateWithoutProductsInput.prototype, "ShippingMethods", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemCreateNestedManyWithoutLineItemPriceInput_1.OrderLineItemCreateNestedManyWithoutLineItemPriceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderLineItemCreateNestedManyWithoutLineItemPriceInput_1.OrderLineItemCreateNestedManyWithoutLineItemPriceInput)
], PriceCreateWithoutProductsInput.prototype, "OrderLineItems", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], PriceCreateWithoutProductsInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], PriceCreateWithoutProductsInput.prototype, "updatedAt", void 0);
PriceCreateWithoutProductsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PriceCreateWithoutProductsInput", {
        isAbstract: true
    })
], PriceCreateWithoutProductsInput);
exports.PriceCreateWithoutProductsInput = PriceCreateWithoutProductsInput;
