"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopicListsMinOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let TopicListsMinOrderByAggregateInput = class TopicListsMinOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TopicListsMinOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TopicListsMinOrderByAggregateInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TopicListsMinOrderByAggregateInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TopicListsMinOrderByAggregateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TopicListsMinOrderByAggregateInput.prototype, "updatedAt", void 0);
TopicListsMinOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TopicListsMinOrderByAggregateInput", {
        isAbstract: true
    })
], TopicListsMinOrderByAggregateInput);
exports.TopicListsMinOrderByAggregateInput = TopicListsMinOrderByAggregateInput;
