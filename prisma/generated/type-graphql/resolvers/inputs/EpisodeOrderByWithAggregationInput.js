"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EpisodeOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EpisodeAvgOrderByAggregateInput_1 = require("../inputs/EpisodeAvgOrderByAggregateInput");
const EpisodeCountOrderByAggregateInput_1 = require("../inputs/EpisodeCountOrderByAggregateInput");
const EpisodeMaxOrderByAggregateInput_1 = require("../inputs/EpisodeMaxOrderByAggregateInput");
const EpisodeMinOrderByAggregateInput_1 = require("../inputs/EpisodeMinOrderByAggregateInput");
const EpisodeSumOrderByAggregateInput_1 = require("../inputs/EpisodeSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let EpisodeOrderByWithAggregationInput = class EpisodeOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EpisodeOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EpisodeOrderByWithAggregationInput.prototype, "episodeNumber", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EpisodeOrderByWithAggregationInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EpisodeOrderByWithAggregationInput.prototype, "year", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EpisodeOrderByWithAggregationInput.prototype, "poster", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EpisodeOrderByWithAggregationInput.prototype, "overview", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EpisodeOrderByWithAggregationInput.prototype, "trailer", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EpisodeOrderByWithAggregationInput.prototype, "coverImage", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EpisodeOrderByWithAggregationInput.prototype, "tagline", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EpisodeOrderByWithAggregationInput.prototype, "releaseDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EpisodeOrderByWithAggregationInput.prototype, "seasonSeriesId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EpisodeOrderByWithAggregationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EpisodeOrderByWithAggregationInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EpisodeCountOrderByAggregateInput_1.EpisodeCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EpisodeCountOrderByAggregateInput_1.EpisodeCountOrderByAggregateInput)
], EpisodeOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EpisodeAvgOrderByAggregateInput_1.EpisodeAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EpisodeAvgOrderByAggregateInput_1.EpisodeAvgOrderByAggregateInput)
], EpisodeOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EpisodeMaxOrderByAggregateInput_1.EpisodeMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EpisodeMaxOrderByAggregateInput_1.EpisodeMaxOrderByAggregateInput)
], EpisodeOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EpisodeMinOrderByAggregateInput_1.EpisodeMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EpisodeMinOrderByAggregateInput_1.EpisodeMinOrderByAggregateInput)
], EpisodeOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EpisodeSumOrderByAggregateInput_1.EpisodeSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EpisodeSumOrderByAggregateInput_1.EpisodeSumOrderByAggregateInput)
], EpisodeOrderByWithAggregationInput.prototype, "_sum", void 0);
EpisodeOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EpisodeOrderByWithAggregationInput", {
        isAbstract: true
    })
], EpisodeOrderByWithAggregationInput);
exports.EpisodeOrderByWithAggregationInput = EpisodeOrderByWithAggregationInput;
