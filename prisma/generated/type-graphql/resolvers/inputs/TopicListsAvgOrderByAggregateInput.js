"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopicListsAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let TopicListsAvgOrderByAggregateInput = class TopicListsAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TopicListsAvgOrderByAggregateInput.prototype, "lists", void 0);
TopicListsAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TopicListsAvgOrderByAggregateInput", {
        isAbstract: true
    })
], TopicListsAvgOrderByAggregateInput);
exports.TopicListsAvgOrderByAggregateInput = TopicListsAvgOrderByAggregateInput;
