"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopicListsSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let TopicListsSumOrderByAggregateInput = class TopicListsSumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TopicListsSumOrderByAggregateInput.prototype, "lists", void 0);
TopicListsSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TopicListsSumOrderByAggregateInput", {
        isAbstract: true
    })
], TopicListsSumOrderByAggregateInput);
exports.TopicListsSumOrderByAggregateInput = TopicListsSumOrderByAggregateInput;
