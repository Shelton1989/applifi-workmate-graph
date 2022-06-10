"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderLineItemOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ArtworkOrderByWithRelationInput_1 = require("../inputs/ArtworkOrderByWithRelationInput");
const ColorOrderByWithRelationInput_1 = require("../inputs/ColorOrderByWithRelationInput");
const OrderOrderByWithRelationInput_1 = require("../inputs/OrderOrderByWithRelationInput");
const PriceOrderByWithRelationInput_1 = require("../inputs/PriceOrderByWithRelationInput");
const ProductOrderByWithRelationInput_1 = require("../inputs/ProductOrderByWithRelationInput");
const SizeOrderByWithRelationInput_1 = require("../inputs/SizeOrderByWithRelationInput");
const SortOrder_1 = require("../../enums/SortOrder");
let OrderLineItemOrderByWithRelationInput = class OrderLineItemOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderLineItemOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceOrderByWithRelationInput_1.PriceOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriceOrderByWithRelationInput_1.PriceOrderByWithRelationInput)
], OrderLineItemOrderByWithRelationInput.prototype, "lineItemPrice", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderLineItemOrderByWithRelationInput.prototype, "priceId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductOrderByWithRelationInput_1.ProductOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductOrderByWithRelationInput_1.ProductOrderByWithRelationInput)
], OrderLineItemOrderByWithRelationInput.prototype, "SelectedProduct", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderLineItemOrderByWithRelationInput.prototype, "selectedProductId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ColorOrderByWithRelationInput_1.ColorOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ColorOrderByWithRelationInput_1.ColorOrderByWithRelationInput)
], OrderLineItemOrderByWithRelationInput.prototype, "SelectedColor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderLineItemOrderByWithRelationInput.prototype, "selectedColorId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArtworkOrderByWithRelationInput_1.ArtworkOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ArtworkOrderByWithRelationInput_1.ArtworkOrderByWithRelationInput)
], OrderLineItemOrderByWithRelationInput.prototype, "SelectedArtwork", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderLineItemOrderByWithRelationInput.prototype, "selectedArtworkId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SizeOrderByWithRelationInput_1.SizeOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SizeOrderByWithRelationInput_1.SizeOrderByWithRelationInput)
], OrderLineItemOrderByWithRelationInput.prototype, "SelectedSize", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderLineItemOrderByWithRelationInput.prototype, "selectedSizeId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderOrderByWithRelationInput_1.OrderOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderOrderByWithRelationInput_1.OrderOrderByWithRelationInput)
], OrderLineItemOrderByWithRelationInput.prototype, "Order", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderLineItemOrderByWithRelationInput.prototype, "orderId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderLineItemOrderByWithRelationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderLineItemOrderByWithRelationInput.prototype, "updatedAt", void 0);
OrderLineItemOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderLineItemOrderByWithRelationInput", {
        isAbstract: true
    })
], OrderLineItemOrderByWithRelationInput);
exports.OrderLineItemOrderByWithRelationInput = OrderLineItemOrderByWithRelationInput;
