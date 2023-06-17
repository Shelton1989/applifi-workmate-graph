"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductKeyMaxOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let ProductKeyMaxOrderByAggregateInput = class ProductKeyMaxOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductKeyMaxOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductKeyMaxOrderByAggregateInput.prototype, "billingId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductKeyMaxOrderByAggregateInput.prototype, "key", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductKeyMaxOrderByAggregateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductKeyMaxOrderByAggregateInput.prototype, "updatedAt", void 0);
ProductKeyMaxOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductKeyMaxOrderByAggregateInput", {
        isAbstract: true
    })
], ProductKeyMaxOrderByAggregateInput);
exports.ProductKeyMaxOrderByAggregateInput = ProductKeyMaxOrderByAggregateInput;
