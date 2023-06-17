"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductKeyOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductKeyCountOrderByAggregateInput_1 = require("../inputs/ProductKeyCountOrderByAggregateInput");
const ProductKeyMaxOrderByAggregateInput_1 = require("../inputs/ProductKeyMaxOrderByAggregateInput");
const ProductKeyMinOrderByAggregateInput_1 = require("../inputs/ProductKeyMinOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let ProductKeyOrderByWithAggregationInput = class ProductKeyOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductKeyOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductKeyOrderByWithAggregationInput.prototype, "billingId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductKeyOrderByWithAggregationInput.prototype, "createdBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductKeyOrderByWithAggregationInput.prototype, "key", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductKeyOrderByWithAggregationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductKeyOrderByWithAggregationInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductKeyCountOrderByAggregateInput_1.ProductKeyCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductKeyCountOrderByAggregateInput_1.ProductKeyCountOrderByAggregateInput)
], ProductKeyOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductKeyMaxOrderByAggregateInput_1.ProductKeyMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductKeyMaxOrderByAggregateInput_1.ProductKeyMaxOrderByAggregateInput)
], ProductKeyOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductKeyMinOrderByAggregateInput_1.ProductKeyMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductKeyMinOrderByAggregateInput_1.ProductKeyMinOrderByAggregateInput)
], ProductKeyOrderByWithAggregationInput.prototype, "_min", void 0);
ProductKeyOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductKeyOrderByWithAggregationInput", {
        isAbstract: true
    })
], ProductKeyOrderByWithAggregationInput);
exports.ProductKeyOrderByWithAggregationInput = ProductKeyOrderByWithAggregationInput;
