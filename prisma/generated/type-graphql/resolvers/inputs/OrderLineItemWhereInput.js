"use strict";
var OrderLineItemWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderLineItemWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ArtworkRelationFilter_1 = require("../inputs/ArtworkRelationFilter");
const ColorRelationFilter_1 = require("../inputs/ColorRelationFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const OrderRelationFilter_1 = require("../inputs/OrderRelationFilter");
const PriceRelationFilter_1 = require("../inputs/PriceRelationFilter");
const ProductRelationFilter_1 = require("../inputs/ProductRelationFilter");
const SizeRelationFilter_1 = require("../inputs/SizeRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let OrderLineItemWhereInput = OrderLineItemWhereInput_1 = class OrderLineItemWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderLineItemWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderLineItemWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderLineItemWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], OrderLineItemWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceRelationFilter_1.PriceRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriceRelationFilter_1.PriceRelationFilter)
], OrderLineItemWhereInput.prototype, "lineItemPrice", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], OrderLineItemWhereInput.prototype, "priceId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductRelationFilter_1.ProductRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductRelationFilter_1.ProductRelationFilter)
], OrderLineItemWhereInput.prototype, "SelectedProduct", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], OrderLineItemWhereInput.prototype, "selectedProductId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ColorRelationFilter_1.ColorRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ColorRelationFilter_1.ColorRelationFilter)
], OrderLineItemWhereInput.prototype, "SelectedColor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], OrderLineItemWhereInput.prototype, "selectedColorId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArtworkRelationFilter_1.ArtworkRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ArtworkRelationFilter_1.ArtworkRelationFilter)
], OrderLineItemWhereInput.prototype, "SelectedArtwork", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], OrderLineItemWhereInput.prototype, "selectedArtworkId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SizeRelationFilter_1.SizeRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SizeRelationFilter_1.SizeRelationFilter)
], OrderLineItemWhereInput.prototype, "SelectedSize", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], OrderLineItemWhereInput.prototype, "selectedSizeId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderRelationFilter_1.OrderRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderRelationFilter_1.OrderRelationFilter)
], OrderLineItemWhereInput.prototype, "Order", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], OrderLineItemWhereInput.prototype, "orderId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], OrderLineItemWhereInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], OrderLineItemWhereInput.prototype, "updatedAt", void 0);
OrderLineItemWhereInput = OrderLineItemWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderLineItemWhereInput", {
        isAbstract: true
    })
], OrderLineItemWhereInput);
exports.OrderLineItemWhereInput = OrderLineItemWhereInput;