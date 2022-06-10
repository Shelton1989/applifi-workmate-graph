"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplyOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReplyCountOrderByAggregateInput_1 = require("../inputs/ReplyCountOrderByAggregateInput");
const ReplyMaxOrderByAggregateInput_1 = require("../inputs/ReplyMaxOrderByAggregateInput");
const ReplyMinOrderByAggregateInput_1 = require("../inputs/ReplyMinOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let ReplyOrderByWithAggregationInput = class ReplyOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReplyOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReplyOrderByWithAggregationInput.prototype, "text", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReplyOrderByWithAggregationInput.prototype, "commentId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReplyOrderByWithAggregationInput.prototype, "authorId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReplyOrderByWithAggregationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReplyOrderByWithAggregationInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReplyCountOrderByAggregateInput_1.ReplyCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReplyCountOrderByAggregateInput_1.ReplyCountOrderByAggregateInput)
], ReplyOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReplyMaxOrderByAggregateInput_1.ReplyMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReplyMaxOrderByAggregateInput_1.ReplyMaxOrderByAggregateInput)
], ReplyOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReplyMinOrderByAggregateInput_1.ReplyMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReplyMinOrderByAggregateInput_1.ReplyMinOrderByAggregateInput)
], ReplyOrderByWithAggregationInput.prototype, "_min", void 0);
ReplyOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReplyOrderByWithAggregationInput", {
        isAbstract: true
    })
], ReplyOrderByWithAggregationInput);
exports.ReplyOrderByWithAggregationInput = ReplyOrderByWithAggregationInput;
