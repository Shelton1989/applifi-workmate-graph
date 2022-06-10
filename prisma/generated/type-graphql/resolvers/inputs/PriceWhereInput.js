"use strict";
var PriceWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CurrencyRelationFilter_1 = require("../inputs/CurrencyRelationFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const OrderLineItemListRelationFilter_1 = require("../inputs/OrderLineItemListRelationFilter");
const ProductListRelationFilter_1 = require("../inputs/ProductListRelationFilter");
const ShippingMethodListRelationFilter_1 = require("../inputs/ShippingMethodListRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let PriceWhereInput = PriceWhereInput_1 = class PriceWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PriceWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PriceWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PriceWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PriceWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PriceWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PriceWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], PriceWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], PriceWhereInput.prototype, "priceInLowestDenomination", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], PriceWhereInput.prototype, "displayPrice", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CurrencyRelationFilter_1.CurrencyRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CurrencyRelationFilter_1.CurrencyRelationFilter)
], PriceWhereInput.prototype, "currency", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], PriceWhereInput.prototype, "currencyId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShippingMethodListRelationFilter_1.ShippingMethodListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShippingMethodListRelationFilter_1.ShippingMethodListRelationFilter)
], PriceWhereInput.prototype, "ShippingMethods", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductListRelationFilter_1.ProductListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductListRelationFilter_1.ProductListRelationFilter)
], PriceWhereInput.prototype, "Products", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemListRelationFilter_1.OrderLineItemListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderLineItemListRelationFilter_1.OrderLineItemListRelationFilter)
], PriceWhereInput.prototype, "OrderLineItems", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], PriceWhereInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], PriceWhereInput.prototype, "updatedAt", void 0);
PriceWhereInput = PriceWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("PriceWhereInput", {
        isAbstract: true
    })
], PriceWhereInput);
exports.PriceWhereInput = PriceWhereInput;
