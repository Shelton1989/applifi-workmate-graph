"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductKeyMinOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let ProductKeyMinOrderByAggregateInput = class ProductKeyMinOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductKeyMinOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductKeyMinOrderByAggregateInput.prototype, "billingId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductKeyMinOrderByAggregateInput.prototype, "createdBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductKeyMinOrderByAggregateInput.prototype, "key", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductKeyMinOrderByAggregateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductKeyMinOrderByAggregateInput.prototype, "updatedAt", void 0);
ProductKeyMinOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductKeyMinOrderByAggregateInput", {
        isAbstract: true
    })
], ProductKeyMinOrderByAggregateInput);
exports.ProductKeyMinOrderByAggregateInput = ProductKeyMinOrderByAggregateInput;
