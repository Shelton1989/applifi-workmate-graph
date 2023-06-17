"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductKeyCountOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let ProductKeyCountOrderByAggregateInput = class ProductKeyCountOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductKeyCountOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductKeyCountOrderByAggregateInput.prototype, "billingId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductKeyCountOrderByAggregateInput.prototype, "key", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductKeyCountOrderByAggregateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductKeyCountOrderByAggregateInput.prototype, "updatedAt", void 0);
ProductKeyCountOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductKeyCountOrderByAggregateInput", {
        isAbstract: true
    })
], ProductKeyCountOrderByAggregateInput);
exports.ProductKeyCountOrderByAggregateInput = ProductKeyCountOrderByAggregateInput;
