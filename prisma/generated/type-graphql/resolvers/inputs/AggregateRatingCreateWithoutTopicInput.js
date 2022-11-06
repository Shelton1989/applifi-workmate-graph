"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateRatingCreateWithoutTopicInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EpisodeCreateNestedOneWithoutAggregateRatingInput_1 = require("../inputs/EpisodeCreateNestedOneWithoutAggregateRatingInput");
const SeasonSeriesCreateNestedOneWithoutAggregateRatingInput_1 = require("../inputs/SeasonSeriesCreateNestedOneWithoutAggregateRatingInput");
let AggregateRatingCreateWithoutTopicInput = class AggregateRatingCreateWithoutTopicInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AggregateRatingCreateWithoutTopicInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateRatingCreateWithoutTopicInput.prototype, "ratingValue", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateRatingCreateWithoutTopicInput.prototype, "countedPosts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateRatingCreateWithoutTopicInput.prototype, "allPosts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateRatingCreateWithoutTopicInput.prototype, "ratingCount", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SeasonSeriesCreateNestedOneWithoutAggregateRatingInput_1.SeasonSeriesCreateNestedOneWithoutAggregateRatingInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SeasonSeriesCreateNestedOneWithoutAggregateRatingInput_1.SeasonSeriesCreateNestedOneWithoutAggregateRatingInput)
], AggregateRatingCreateWithoutTopicInput.prototype, "SeasonSeries", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EpisodeCreateNestedOneWithoutAggregateRatingInput_1.EpisodeCreateNestedOneWithoutAggregateRatingInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EpisodeCreateNestedOneWithoutAggregateRatingInput_1.EpisodeCreateNestedOneWithoutAggregateRatingInput)
], AggregateRatingCreateWithoutTopicInput.prototype, "Episode", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], AggregateRatingCreateWithoutTopicInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], AggregateRatingCreateWithoutTopicInput.prototype, "updatedAt", void 0);
AggregateRatingCreateWithoutTopicInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AggregateRatingCreateWithoutTopicInput", {
        isAbstract: true
    })
], AggregateRatingCreateWithoutTopicInput);
exports.AggregateRatingCreateWithoutTopicInput = AggregateRatingCreateWithoutTopicInput;
