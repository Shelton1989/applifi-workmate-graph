"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateRatingOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateRatingAvgOrderByAggregateInput_1 = require("../inputs/AggregateRatingAvgOrderByAggregateInput");
const AggregateRatingCountOrderByAggregateInput_1 = require("../inputs/AggregateRatingCountOrderByAggregateInput");
const AggregateRatingMaxOrderByAggregateInput_1 = require("../inputs/AggregateRatingMaxOrderByAggregateInput");
const AggregateRatingMinOrderByAggregateInput_1 = require("../inputs/AggregateRatingMinOrderByAggregateInput");
const AggregateRatingSumOrderByAggregateInput_1 = require("../inputs/AggregateRatingSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let AggregateRatingOrderByWithAggregationInput = class AggregateRatingOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AggregateRatingOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AggregateRatingOrderByWithAggregationInput.prototype, "ratingValue", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AggregateRatingOrderByWithAggregationInput.prototype, "countedPosts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AggregateRatingOrderByWithAggregationInput.prototype, "allPosts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AggregateRatingOrderByWithAggregationInput.prototype, "ratingCount", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AggregateRatingOrderByWithAggregationInput.prototype, "topicId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AggregateRatingOrderByWithAggregationInput.prototype, "seasonSeriesId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AggregateRatingOrderByWithAggregationInput.prototype, "episodeId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AggregateRatingOrderByWithAggregationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AggregateRatingOrderByWithAggregationInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AggregateRatingCountOrderByAggregateInput_1.AggregateRatingCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AggregateRatingCountOrderByAggregateInput_1.AggregateRatingCountOrderByAggregateInput)
], AggregateRatingOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AggregateRatingAvgOrderByAggregateInput_1.AggregateRatingAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AggregateRatingAvgOrderByAggregateInput_1.AggregateRatingAvgOrderByAggregateInput)
], AggregateRatingOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AggregateRatingMaxOrderByAggregateInput_1.AggregateRatingMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AggregateRatingMaxOrderByAggregateInput_1.AggregateRatingMaxOrderByAggregateInput)
], AggregateRatingOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AggregateRatingMinOrderByAggregateInput_1.AggregateRatingMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AggregateRatingMinOrderByAggregateInput_1.AggregateRatingMinOrderByAggregateInput)
], AggregateRatingOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AggregateRatingSumOrderByAggregateInput_1.AggregateRatingSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AggregateRatingSumOrderByAggregateInput_1.AggregateRatingSumOrderByAggregateInput)
], AggregateRatingOrderByWithAggregationInput.prototype, "_sum", void 0);
AggregateRatingOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AggregateRatingOrderByWithAggregationInput", {
        isAbstract: true
    })
], AggregateRatingOrderByWithAggregationInput);
exports.AggregateRatingOrderByWithAggregationInput = AggregateRatingOrderByWithAggregationInput;
