"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopicListsOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TopicListsAvgOrderByAggregateInput_1 = require("../inputs/TopicListsAvgOrderByAggregateInput");
const TopicListsCountOrderByAggregateInput_1 = require("../inputs/TopicListsCountOrderByAggregateInput");
const TopicListsMaxOrderByAggregateInput_1 = require("../inputs/TopicListsMaxOrderByAggregateInput");
const TopicListsMinOrderByAggregateInput_1 = require("../inputs/TopicListsMinOrderByAggregateInput");
const TopicListsSumOrderByAggregateInput_1 = require("../inputs/TopicListsSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let TopicListsOrderByWithAggregationInput = class TopicListsOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TopicListsOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TopicListsOrderByWithAggregationInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TopicListsOrderByWithAggregationInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TopicListsOrderByWithAggregationInput.prototype, "lists", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TopicListsOrderByWithAggregationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TopicListsOrderByWithAggregationInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicListsCountOrderByAggregateInput_1.TopicListsCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicListsCountOrderByAggregateInput_1.TopicListsCountOrderByAggregateInput)
], TopicListsOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicListsAvgOrderByAggregateInput_1.TopicListsAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicListsAvgOrderByAggregateInput_1.TopicListsAvgOrderByAggregateInput)
], TopicListsOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicListsMaxOrderByAggregateInput_1.TopicListsMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicListsMaxOrderByAggregateInput_1.TopicListsMaxOrderByAggregateInput)
], TopicListsOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicListsMinOrderByAggregateInput_1.TopicListsMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicListsMinOrderByAggregateInput_1.TopicListsMinOrderByAggregateInput)
], TopicListsOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicListsSumOrderByAggregateInput_1.TopicListsSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicListsSumOrderByAggregateInput_1.TopicListsSumOrderByAggregateInput)
], TopicListsOrderByWithAggregationInput.prototype, "_sum", void 0);
TopicListsOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TopicListsOrderByWithAggregationInput", {
        isAbstract: true
    })
], TopicListsOrderByWithAggregationInput);
exports.TopicListsOrderByWithAggregationInput = TopicListsOrderByWithAggregationInput;
