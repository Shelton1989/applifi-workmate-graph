"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WardOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WardAvgOrderByAggregateInput_1 = require("../inputs/WardAvgOrderByAggregateInput");
const WardCountOrderByAggregateInput_1 = require("../inputs/WardCountOrderByAggregateInput");
const WardMaxOrderByAggregateInput_1 = require("../inputs/WardMaxOrderByAggregateInput");
const WardMinOrderByAggregateInput_1 = require("../inputs/WardMinOrderByAggregateInput");
const WardSumOrderByAggregateInput_1 = require("../inputs/WardSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let WardOrderByWithAggregationInput = class WardOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WardOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WardOrderByWithAggregationInput.prototype, "number", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WardOrderByWithAggregationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WardOrderByWithAggregationInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WardOrderByWithAggregationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WardOrderByWithAggregationInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WardCountOrderByAggregateInput_1.WardCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WardCountOrderByAggregateInput_1.WardCountOrderByAggregateInput)
], WardOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WardAvgOrderByAggregateInput_1.WardAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WardAvgOrderByAggregateInput_1.WardAvgOrderByAggregateInput)
], WardOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WardMaxOrderByAggregateInput_1.WardMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WardMaxOrderByAggregateInput_1.WardMaxOrderByAggregateInput)
], WardOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WardMinOrderByAggregateInput_1.WardMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WardMinOrderByAggregateInput_1.WardMinOrderByAggregateInput)
], WardOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WardSumOrderByAggregateInput_1.WardSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WardSumOrderByAggregateInput_1.WardSumOrderByAggregateInput)
], WardOrderByWithAggregationInput.prototype, "_sum", void 0);
WardOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("WardOrderByWithAggregationInput", {
        isAbstract: true
    })
], WardOrderByWithAggregationInput);
exports.WardOrderByWithAggregationInput = WardOrderByWithAggregationInput;
