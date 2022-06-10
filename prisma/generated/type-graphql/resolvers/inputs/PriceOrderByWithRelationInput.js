"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CurrencyOrderByWithRelationInput_1 = require("../inputs/CurrencyOrderByWithRelationInput");
const OrderLineItemOrderByRelationAggregateInput_1 = require("../inputs/OrderLineItemOrderByRelationAggregateInput");
const ProductOrderByRelationAggregateInput_1 = require("../inputs/ProductOrderByRelationAggregateInput");
const ShippingMethodOrderByRelationAggregateInput_1 = require("../inputs/ShippingMethodOrderByRelationAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let PriceOrderByWithRelationInput = class PriceOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PriceOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PriceOrderByWithRelationInput.prototype, "priceInLowestDenomination", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PriceOrderByWithRelationInput.prototype, "displayPrice", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CurrencyOrderByWithRelationInput_1.CurrencyOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CurrencyOrderByWithRelationInput_1.CurrencyOrderByWithRelationInput)
], PriceOrderByWithRelationInput.prototype, "currency", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PriceOrderByWithRelationInput.prototype, "currencyId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShippingMethodOrderByRelationAggregateInput_1.ShippingMethodOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShippingMethodOrderByRelationAggregateInput_1.ShippingMethodOrderByRelationAggregateInput)
], PriceOrderByWithRelationInput.prototype, "ShippingMethods", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductOrderByRelationAggregateInput_1.ProductOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductOrderByRelationAggregateInput_1.ProductOrderByRelationAggregateInput)
], PriceOrderByWithRelationInput.prototype, "Products", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemOrderByRelationAggregateInput_1.OrderLineItemOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderLineItemOrderByRelationAggregateInput_1.OrderLineItemOrderByRelationAggregateInput)
], PriceOrderByWithRelationInput.prototype, "OrderLineItems", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PriceOrderByWithRelationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PriceOrderByWithRelationInput.prototype, "updatedAt", void 0);
PriceOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PriceOrderByWithRelationInput", {
        isAbstract: true
    })
], PriceOrderByWithRelationInput);
exports.PriceOrderByWithRelationInput = PriceOrderByWithRelationInput;
