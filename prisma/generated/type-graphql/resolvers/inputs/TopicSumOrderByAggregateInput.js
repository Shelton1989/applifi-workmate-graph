"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopicSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let TopicSumOrderByAggregateInput = class TopicSumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TopicSumOrderByAggregateInput.prototype, "tmdbId", void 0);
TopicSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TopicSumOrderByAggregateInput", {
        isAbstract: true
    })
], TopicSumOrderByAggregateInput);
exports.TopicSumOrderByAggregateInput = TopicSumOrderByAggregateInput;
