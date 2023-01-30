"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeaturesOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FeaturesCountOrderByAggregateInput_1 = require("../inputs/FeaturesCountOrderByAggregateInput");
const FeaturesMaxOrderByAggregateInput_1 = require("../inputs/FeaturesMaxOrderByAggregateInput");
const FeaturesMinOrderByAggregateInput_1 = require("../inputs/FeaturesMinOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let FeaturesOrderByWithAggregationInput = class FeaturesOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FeaturesOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FeaturesOrderByWithAggregationInput.prototype, "experienceId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FeaturesOrderByWithAggregationInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FeaturesOrderByWithAggregationInput.prototype, "shortDescription", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FeaturesOrderByWithAggregationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FeaturesOrderByWithAggregationInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FeaturesCountOrderByAggregateInput_1.FeaturesCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FeaturesCountOrderByAggregateInput_1.FeaturesCountOrderByAggregateInput)
], FeaturesOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FeaturesMaxOrderByAggregateInput_1.FeaturesMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FeaturesMaxOrderByAggregateInput_1.FeaturesMaxOrderByAggregateInput)
], FeaturesOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FeaturesMinOrderByAggregateInput_1.FeaturesMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FeaturesMinOrderByAggregateInput_1.FeaturesMinOrderByAggregateInput)
], FeaturesOrderByWithAggregationInput.prototype, "_min", void 0);
FeaturesOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FeaturesOrderByWithAggregationInput", {
        isAbstract: true
    })
], FeaturesOrderByWithAggregationInput);
exports.FeaturesOrderByWithAggregationInput = FeaturesOrderByWithAggregationInput;
