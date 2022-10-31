"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeasonSeriesCreateWithoutReactionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EpisodeCreateNestedManyWithoutSeasonSeriesInput_1 = require("../inputs/EpisodeCreateNestedManyWithoutSeasonSeriesInput");
const PostCreateNestedManyWithoutSeasonSeriesInput_1 = require("../inputs/PostCreateNestedManyWithoutSeasonSeriesInput");
const TopicCreateNestedOneWithoutSeasonSeriesInput_1 = require("../inputs/TopicCreateNestedOneWithoutSeasonSeriesInput");
let SeasonSeriesCreateWithoutReactionsInput = class SeasonSeriesCreateWithoutReactionsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SeasonSeriesCreateWithoutReactionsInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], SeasonSeriesCreateWithoutReactionsInput.prototype, "seasonOrSeriesNumber", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SeasonSeriesCreateWithoutReactionsInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SeasonSeriesCreateWithoutReactionsInput.prototype, "year", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SeasonSeriesCreateWithoutReactionsInput.prototype, "poster", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SeasonSeriesCreateWithoutReactionsInput.prototype, "overview", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SeasonSeriesCreateWithoutReactionsInput.prototype, "trailer", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SeasonSeriesCreateWithoutReactionsInput.prototype, "coverImage", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SeasonSeriesCreateWithoutReactionsInput.prototype, "tagline", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicCreateNestedOneWithoutSeasonSeriesInput_1.TopicCreateNestedOneWithoutSeasonSeriesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TopicCreateNestedOneWithoutSeasonSeriesInput_1.TopicCreateNestedOneWithoutSeasonSeriesInput)
], SeasonSeriesCreateWithoutReactionsInput.prototype, "Topic", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EpisodeCreateNestedManyWithoutSeasonSeriesInput_1.EpisodeCreateNestedManyWithoutSeasonSeriesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EpisodeCreateNestedManyWithoutSeasonSeriesInput_1.EpisodeCreateNestedManyWithoutSeasonSeriesInput)
], SeasonSeriesCreateWithoutReactionsInput.prototype, "Episodes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostCreateNestedManyWithoutSeasonSeriesInput_1.PostCreateNestedManyWithoutSeasonSeriesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostCreateNestedManyWithoutSeasonSeriesInput_1.PostCreateNestedManyWithoutSeasonSeriesInput)
], SeasonSeriesCreateWithoutReactionsInput.prototype, "Posts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], SeasonSeriesCreateWithoutReactionsInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], SeasonSeriesCreateWithoutReactionsInput.prototype, "updatedAt", void 0);
SeasonSeriesCreateWithoutReactionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SeasonSeriesCreateWithoutReactionsInput", {
        isAbstract: true
    })
], SeasonSeriesCreateWithoutReactionsInput);
exports.SeasonSeriesCreateWithoutReactionsInput = SeasonSeriesCreateWithoutReactionsInput;
