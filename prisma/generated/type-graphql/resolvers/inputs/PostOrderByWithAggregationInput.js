"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PostCountOrderByAggregateInput_1 = require("../inputs/PostCountOrderByAggregateInput");
const PostMaxOrderByAggregateInput_1 = require("../inputs/PostMaxOrderByAggregateInput");
const PostMinOrderByAggregateInput_1 = require("../inputs/PostMinOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let PostOrderByWithAggregationInput = class PostOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PostOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PostOrderByWithAggregationInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PostOrderByWithAggregationInput.prototype, "caption", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PostOrderByWithAggregationInput.prototype, "mediaUrl", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PostOrderByWithAggregationInput.prototype, "isCommentsEnabled", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PostOrderByWithAggregationInput.prototype, "authorId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PostOrderByWithAggregationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PostOrderByWithAggregationInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostCountOrderByAggregateInput_1.PostCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostCountOrderByAggregateInput_1.PostCountOrderByAggregateInput)
], PostOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostMaxOrderByAggregateInput_1.PostMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostMaxOrderByAggregateInput_1.PostMaxOrderByAggregateInput)
], PostOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostMinOrderByAggregateInput_1.PostMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostMinOrderByAggregateInput_1.PostMinOrderByAggregateInput)
], PostOrderByWithAggregationInput.prototype, "_min", void 0);
PostOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PostOrderByWithAggregationInput", {
        isAbstract: true
    })
], PostOrderByWithAggregationInput);
exports.PostOrderByWithAggregationInput = PostOrderByWithAggregationInput;
