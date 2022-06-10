"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtworkOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InventoryOrderByWithRelationInput_1 = require("../inputs/InventoryOrderByWithRelationInput");
const OrderLineItemOrderByRelationAggregateInput_1 = require("../inputs/OrderLineItemOrderByRelationAggregateInput");
const ProductOrderByRelationAggregateInput_1 = require("../inputs/ProductOrderByRelationAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let ArtworkOrderByWithRelationInput = class ArtworkOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ArtworkOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ArtworkOrderByWithRelationInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ArtworkOrderByWithRelationInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ArtworkOrderByWithRelationInput.prototype, "caption", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ArtworkOrderByWithRelationInput.prototype, "url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductOrderByRelationAggregateInput_1.ProductOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductOrderByRelationAggregateInput_1.ProductOrderByRelationAggregateInput)
], ArtworkOrderByWithRelationInput.prototype, "Products", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ArtworkOrderByWithRelationInput.prototype, "productIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryOrderByWithRelationInput_1.InventoryOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InventoryOrderByWithRelationInput_1.InventoryOrderByWithRelationInput)
], ArtworkOrderByWithRelationInput.prototype, "Inventory", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ArtworkOrderByWithRelationInput.prototype, "inventoryId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemOrderByRelationAggregateInput_1.OrderLineItemOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderLineItemOrderByRelationAggregateInput_1.OrderLineItemOrderByRelationAggregateInput)
], ArtworkOrderByWithRelationInput.prototype, "OrderLineItems", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ArtworkOrderByWithRelationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ArtworkOrderByWithRelationInput.prototype, "updatedAt", void 0);
ArtworkOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ArtworkOrderByWithRelationInput", {
        isAbstract: true
    })
], ArtworkOrderByWithRelationInput);
exports.ArtworkOrderByWithRelationInput = ArtworkOrderByWithRelationInput;
