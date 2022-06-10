"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceCreateWithoutShippingMethodsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CurrencyCreateNestedOneWithoutPricesInput_1 = require("../inputs/CurrencyCreateNestedOneWithoutPricesInput");
const OrderLineItemCreateNestedManyWithoutLineItemPriceInput_1 = require("../inputs/OrderLineItemCreateNestedManyWithoutLineItemPriceInput");
const ProductCreateNestedManyWithoutPriceInput_1 = require("../inputs/ProductCreateNestedManyWithoutPriceInput");
let PriceCreateWithoutShippingMethodsInput = class PriceCreateWithoutShippingMethodsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PriceCreateWithoutShippingMethodsInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], PriceCreateWithoutShippingMethodsInput.prototype, "priceInLowestDenomination", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], PriceCreateWithoutShippingMethodsInput.prototype, "displayPrice", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CurrencyCreateNestedOneWithoutPricesInput_1.CurrencyCreateNestedOneWithoutPricesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CurrencyCreateNestedOneWithoutPricesInput_1.CurrencyCreateNestedOneWithoutPricesInput)
], PriceCreateWithoutShippingMethodsInput.prototype, "currency", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreateNestedManyWithoutPriceInput_1.ProductCreateNestedManyWithoutPriceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductCreateNestedManyWithoutPriceInput_1.ProductCreateNestedManyWithoutPriceInput)
], PriceCreateWithoutShippingMethodsInput.prototype, "Products", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemCreateNestedManyWithoutLineItemPriceInput_1.OrderLineItemCreateNestedManyWithoutLineItemPriceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderLineItemCreateNestedManyWithoutLineItemPriceInput_1.OrderLineItemCreateNestedManyWithoutLineItemPriceInput)
], PriceCreateWithoutShippingMethodsInput.prototype, "OrderLineItems", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], PriceCreateWithoutShippingMethodsInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], PriceCreateWithoutShippingMethodsInput.prototype, "updatedAt", void 0);
PriceCreateWithoutShippingMethodsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PriceCreateWithoutShippingMethodsInput", {
        isAbstract: true
    })
], PriceCreateWithoutShippingMethodsInput);
exports.PriceCreateWithoutShippingMethodsInput = PriceCreateWithoutShippingMethodsInput;
