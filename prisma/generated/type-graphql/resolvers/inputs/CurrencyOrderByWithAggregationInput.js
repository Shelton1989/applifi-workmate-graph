"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrencyOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CurrencyCountOrderByAggregateInput_1 = require("../inputs/CurrencyCountOrderByAggregateInput");
const CurrencyMaxOrderByAggregateInput_1 = require("../inputs/CurrencyMaxOrderByAggregateInput");
const CurrencyMinOrderByAggregateInput_1 = require("../inputs/CurrencyMinOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let CurrencyOrderByWithAggregationInput = class CurrencyOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CurrencyOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CurrencyOrderByWithAggregationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CurrencyOrderByWithAggregationInput.prototype, "symbol", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CurrencyOrderByWithAggregationInput.prototype, "code", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CurrencyOrderByWithAggregationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CurrencyOrderByWithAggregationInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CurrencyCountOrderByAggregateInput_1.CurrencyCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CurrencyCountOrderByAggregateInput_1.CurrencyCountOrderByAggregateInput)
], CurrencyOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CurrencyMaxOrderByAggregateInput_1.CurrencyMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CurrencyMaxOrderByAggregateInput_1.CurrencyMaxOrderByAggregateInput)
], CurrencyOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CurrencyMinOrderByAggregateInput_1.CurrencyMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CurrencyMinOrderByAggregateInput_1.CurrencyMinOrderByAggregateInput)
], CurrencyOrderByWithAggregationInput.prototype, "_min", void 0);
CurrencyOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CurrencyOrderByWithAggregationInput", {
        isAbstract: true
    })
], CurrencyOrderByWithAggregationInput);
exports.CurrencyOrderByWithAggregationInput = CurrencyOrderByWithAggregationInput;
