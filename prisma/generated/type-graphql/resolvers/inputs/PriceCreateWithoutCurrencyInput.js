"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceCreateWithoutCurrencyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderLineItemCreateNestedManyWithoutLineItemPriceInput_1 = require("../inputs/OrderLineItemCreateNestedManyWithoutLineItemPriceInput");
const ProductCreateNestedManyWithoutPriceInput_1 = require("../inputs/ProductCreateNestedManyWithoutPriceInput");
const ShippingMethodCreateNestedManyWithoutPriceInput_1 = require("../inputs/ShippingMethodCreateNestedManyWithoutPriceInput");
let PriceCreateWithoutCurrencyInput = class PriceCreateWithoutCurrencyInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PriceCreateWithoutCurrencyInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], PriceCreateWithoutCurrencyInput.prototype, "priceInLowestDenomination", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], PriceCreateWithoutCurrencyInput.prototype, "displayPrice", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShippingMethodCreateNestedManyWithoutPriceInput_1.ShippingMethodCreateNestedManyWithoutPriceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShippingMethodCreateNestedManyWithoutPriceInput_1.ShippingMethodCreateNestedManyWithoutPriceInput)
], PriceCreateWithoutCurrencyInput.prototype, "ShippingMethods", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreateNestedManyWithoutPriceInput_1.ProductCreateNestedManyWithoutPriceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductCreateNestedManyWithoutPriceInput_1.ProductCreateNestedManyWithoutPriceInput)
], PriceCreateWithoutCurrencyInput.prototype, "Products", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemCreateNestedManyWithoutLineItemPriceInput_1.OrderLineItemCreateNestedManyWithoutLineItemPriceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderLineItemCreateNestedManyWithoutLineItemPriceInput_1.OrderLineItemCreateNestedManyWithoutLineItemPriceInput)
], PriceCreateWithoutCurrencyInput.prototype, "OrderLineItems", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], PriceCreateWithoutCurrencyInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], PriceCreateWithoutCurrencyInput.prototype, "updatedAt", void 0);
PriceCreateWithoutCurrencyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PriceCreateWithoutCurrencyInput", {
        isAbstract: true
    })
], PriceCreateWithoutCurrencyInput);
exports.PriceCreateWithoutCurrencyInput = PriceCreateWithoutCurrencyInput;
