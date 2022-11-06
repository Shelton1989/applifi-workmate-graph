"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeasonSeriesOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SeasonSeriesAvgOrderByAggregateInput_1 = require("../inputs/SeasonSeriesAvgOrderByAggregateInput");
const SeasonSeriesCountOrderByAggregateInput_1 = require("../inputs/SeasonSeriesCountOrderByAggregateInput");
const SeasonSeriesMaxOrderByAggregateInput_1 = require("../inputs/SeasonSeriesMaxOrderByAggregateInput");
const SeasonSeriesMinOrderByAggregateInput_1 = require("../inputs/SeasonSeriesMinOrderByAggregateInput");
const SeasonSeriesSumOrderByAggregateInput_1 = require("../inputs/SeasonSeriesSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let SeasonSeriesOrderByWithAggregationInput = class SeasonSeriesOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SeasonSeriesOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SeasonSeriesOrderByWithAggregationInput.prototype, "seasonOrSeriesNumber", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SeasonSeriesOrderByWithAggregationInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SeasonSeriesOrderByWithAggregationInput.prototype, "year", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SeasonSeriesOrderByWithAggregationInput.prototype, "poster", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SeasonSeriesOrderByWithAggregationInput.prototype, "overview", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SeasonSeriesOrderByWithAggregationInput.prototype, "trailer", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SeasonSeriesOrderByWithAggregationInput.prototype, "coverImage", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SeasonSeriesOrderByWithAggregationInput.prototype, "tagline", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SeasonSeriesOrderByWithAggregationInput.prototype, "releaseDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SeasonSeriesOrderByWithAggregationInput.prototype, "topicId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SeasonSeriesOrderByWithAggregationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SeasonSeriesOrderByWithAggregationInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SeasonSeriesCountOrderByAggregateInput_1.SeasonSeriesCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SeasonSeriesCountOrderByAggregateInput_1.SeasonSeriesCountOrderByAggregateInput)
], SeasonSeriesOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SeasonSeriesAvgOrderByAggregateInput_1.SeasonSeriesAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SeasonSeriesAvgOrderByAggregateInput_1.SeasonSeriesAvgOrderByAggregateInput)
], SeasonSeriesOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SeasonSeriesMaxOrderByAggregateInput_1.SeasonSeriesMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SeasonSeriesMaxOrderByAggregateInput_1.SeasonSeriesMaxOrderByAggregateInput)
], SeasonSeriesOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SeasonSeriesMinOrderByAggregateInput_1.SeasonSeriesMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SeasonSeriesMinOrderByAggregateInput_1.SeasonSeriesMinOrderByAggregateInput)
], SeasonSeriesOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SeasonSeriesSumOrderByAggregateInput_1.SeasonSeriesSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SeasonSeriesSumOrderByAggregateInput_1.SeasonSeriesSumOrderByAggregateInput)
], SeasonSeriesOrderByWithAggregationInput.prototype, "_sum", void 0);
SeasonSeriesOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SeasonSeriesOrderByWithAggregationInput", {
        isAbstract: true
    })
], SeasonSeriesOrderByWithAggregationInput);
exports.SeasonSeriesOrderByWithAggregationInput = SeasonSeriesOrderByWithAggregationInput;
