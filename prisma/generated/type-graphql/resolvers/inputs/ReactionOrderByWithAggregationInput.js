"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionCountOrderByAggregateInput_1 = require("../inputs/ReactionCountOrderByAggregateInput");
const ReactionMaxOrderByAggregateInput_1 = require("../inputs/ReactionMaxOrderByAggregateInput");
const ReactionMinOrderByAggregateInput_1 = require("../inputs/ReactionMinOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let ReactionOrderByWithAggregationInput = class ReactionOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOrderByWithAggregationInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOrderByWithAggregationInput.prototype, "postId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOrderByWithAggregationInput.prototype, "commentId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOrderByWithAggregationInput.prototype, "replyId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOrderByWithAggregationInput.prototype, "authorId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOrderByWithAggregationInput.prototype, "topicId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOrderByWithAggregationInput.prototype, "seasonSeriesId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOrderByWithAggregationInput.prototype, "episodeId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOrderByWithAggregationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOrderByWithAggregationInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionCountOrderByAggregateInput_1.ReactionCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionCountOrderByAggregateInput_1.ReactionCountOrderByAggregateInput)
], ReactionOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionMaxOrderByAggregateInput_1.ReactionMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionMaxOrderByAggregateInput_1.ReactionMaxOrderByAggregateInput)
], ReactionOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionMinOrderByAggregateInput_1.ReactionMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionMinOrderByAggregateInput_1.ReactionMinOrderByAggregateInput)
], ReactionOrderByWithAggregationInput.prototype, "_min", void 0);
ReactionOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionOrderByWithAggregationInput", {
        isAbstract: true
    })
], ReactionOrderByWithAggregationInput);
exports.ReactionOrderByWithAggregationInput = ReactionOrderByWithAggregationInput;
