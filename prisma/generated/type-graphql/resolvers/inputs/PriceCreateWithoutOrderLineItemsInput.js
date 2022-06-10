"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceCreateWithoutOrderLineItemsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CurrencyCreateNestedOneWithoutPricesInput_1 = require("../inputs/CurrencyCreateNestedOneWithoutPricesInput");
const ProductCreateNestedManyWithoutPriceInput_1 = require("../inputs/ProductCreateNestedManyWithoutPriceInput");
const ShippingMethodCreateNestedManyWithoutPriceInput_1 = require("../inputs/ShippingMethodCreateNestedManyWithoutPriceInput");
let PriceCreateWithoutOrderLineItemsInput = class PriceCreateWithoutOrderLineItemsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PriceCreateWithoutOrderLineItemsInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], PriceCreateWithoutOrderLineItemsInput.prototype, "priceInLowestDenomination", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], PriceCreateWithoutOrderLineItemsInput.prototype, "displayPrice", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CurrencyCreateNestedOneWithoutPricesInput_1.CurrencyCreateNestedOneWithoutPricesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CurrencyCreateNestedOneWithoutPricesInput_1.CurrencyCreateNestedOneWithoutPricesInput)
], PriceCreateWithoutOrderLineItemsInput.prototype, "currency", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShippingMethodCreateNestedManyWithoutPriceInput_1.ShippingMethodCreateNestedManyWithoutPriceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShippingMethodCreateNestedManyWithoutPriceInput_1.ShippingMethodCreateNestedManyWithoutPriceInput)
], PriceCreateWithoutOrderLineItemsInput.prototype, "ShippingMethods", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreateNestedManyWithoutPriceInput_1.ProductCreateNestedManyWithoutPriceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductCreateNestedManyWithoutPriceInput_1.ProductCreateNestedManyWithoutPriceInput)
], PriceCreateWithoutOrderLineItemsInput.prototype, "Products", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], PriceCreateWithoutOrderLineItemsInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], PriceCreateWithoutOrderLineItemsInput.prototype, "updatedAt", void 0);
PriceCreateWithoutOrderLineItemsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PriceCreateWithoutOrderLineItemsInput", {
        isAbstract: true
    })
], PriceCreateWithoutOrderLineItemsInput);
exports.PriceCreateWithoutOrderLineItemsInput = PriceCreateWithoutOrderLineItemsInput;
