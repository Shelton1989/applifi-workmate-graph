"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LLMQueryOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LLMQueryCountOrderByAggregateInput_1 = require("../inputs/LLMQueryCountOrderByAggregateInput");
const LLMQueryMaxOrderByAggregateInput_1 = require("../inputs/LLMQueryMaxOrderByAggregateInput");
const LLMQueryMinOrderByAggregateInput_1 = require("../inputs/LLMQueryMinOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let LLMQueryOrderByWithAggregationInput = class LLMQueryOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LLMQueryOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LLMQueryOrderByWithAggregationInput.prototype, "tenantId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LLMQueryOrderByWithAggregationInput.prototype, "queryLink", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LLMQueryOrderByWithAggregationInput.prototype, "queryText", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LLMQueryOrderByWithAggregationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LLMQueryOrderByWithAggregationInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LLMQueryOrderByWithAggregationInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LLMQueryCountOrderByAggregateInput_1.LLMQueryCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LLMQueryCountOrderByAggregateInput_1.LLMQueryCountOrderByAggregateInput)
], LLMQueryOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LLMQueryMaxOrderByAggregateInput_1.LLMQueryMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LLMQueryMaxOrderByAggregateInput_1.LLMQueryMaxOrderByAggregateInput)
], LLMQueryOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LLMQueryMinOrderByAggregateInput_1.LLMQueryMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LLMQueryMinOrderByAggregateInput_1.LLMQueryMinOrderByAggregateInput)
], LLMQueryOrderByWithAggregationInput.prototype, "_min", void 0);
LLMQueryOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LLMQueryOrderByWithAggregationInput", {
        isAbstract: true
    })
], LLMQueryOrderByWithAggregationInput);
exports.LLMQueryOrderByWithAggregationInput = LLMQueryOrderByWithAggregationInput;
