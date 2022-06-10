"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CurrencyCreateNestedOneWithoutPricesInput_1 = require("../inputs/CurrencyCreateNestedOneWithoutPricesInput");
const OrderLineItemCreateNestedManyWithoutLineItemPriceInput_1 = require("../inputs/OrderLineItemCreateNestedManyWithoutLineItemPriceInput");
const ProductCreateNestedManyWithoutPriceInput_1 = require("../inputs/ProductCreateNestedManyWithoutPriceInput");
const ShippingMethodCreateNestedManyWithoutPriceInput_1 = require("../inputs/ShippingMethodCreateNestedManyWithoutPriceInput");
let PriceCreateInput = class PriceCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PriceCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], PriceCreateInput.prototype, "priceInLowestDenomination", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], PriceCreateInput.prototype, "displayPrice", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CurrencyCreateNestedOneWithoutPricesInput_1.CurrencyCreateNestedOneWithoutPricesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CurrencyCreateNestedOneWithoutPricesInput_1.CurrencyCreateNestedOneWithoutPricesInput)
], PriceCreateInput.prototype, "currency", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShippingMethodCreateNestedManyWithoutPriceInput_1.ShippingMethodCreateNestedManyWithoutPriceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShippingMethodCreateNestedManyWithoutPriceInput_1.ShippingMethodCreateNestedManyWithoutPriceInput)
], PriceCreateInput.prototype, "ShippingMethods", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreateNestedManyWithoutPriceInput_1.ProductCreateNestedManyWithoutPriceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductCreateNestedManyWithoutPriceInput_1.ProductCreateNestedManyWithoutPriceInput)
], PriceCreateInput.prototype, "Products", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemCreateNestedManyWithoutLineItemPriceInput_1.OrderLineItemCreateNestedManyWithoutLineItemPriceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderLineItemCreateNestedManyWithoutLineItemPriceInput_1.OrderLineItemCreateNestedManyWithoutLineItemPriceInput)
], PriceCreateInput.prototype, "OrderLineItems", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], PriceCreateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], PriceCreateInput.prototype, "updatedAt", void 0);
PriceCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PriceCreateInput", {
        isAbstract: true
    })
], PriceCreateInput);
exports.PriceCreateInput = PriceCreateInput;
