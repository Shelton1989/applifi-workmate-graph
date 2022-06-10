"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SizeOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SizeCountOrderByAggregateInput_1 = require("../inputs/SizeCountOrderByAggregateInput");
const SizeMaxOrderByAggregateInput_1 = require("../inputs/SizeMaxOrderByAggregateInput");
const SizeMinOrderByAggregateInput_1 = require("../inputs/SizeMinOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let SizeOrderByWithAggregationInput = class SizeOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SizeOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SizeOrderByWithAggregationInput.prototype, "value", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SizeOrderByWithAggregationInput.prototype, "region", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SizeOrderByWithAggregationInput.prototype, "productIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SizeOrderByWithAggregationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SizeOrderByWithAggregationInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SizeCountOrderByAggregateInput_1.SizeCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SizeCountOrderByAggregateInput_1.SizeCountOrderByAggregateInput)
], SizeOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SizeMaxOrderByAggregateInput_1.SizeMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SizeMaxOrderByAggregateInput_1.SizeMaxOrderByAggregateInput)
], SizeOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SizeMinOrderByAggregateInput_1.SizeMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SizeMinOrderByAggregateInput_1.SizeMinOrderByAggregateInput)
], SizeOrderByWithAggregationInput.prototype, "_min", void 0);
SizeOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SizeOrderByWithAggregationInput", {
        isAbstract: true
    })
], SizeOrderByWithAggregationInput);
exports.SizeOrderByWithAggregationInput = SizeOrderByWithAggregationInput;
