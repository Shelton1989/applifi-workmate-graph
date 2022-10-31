"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeasonSeriesCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EpisodeCreateNestedManyWithoutSeasonSeriesInput_1 = require("../inputs/EpisodeCreateNestedManyWithoutSeasonSeriesInput");
const PostCreateNestedManyWithoutSeasonSeriesInput_1 = require("../inputs/PostCreateNestedManyWithoutSeasonSeriesInput");
const ReactionCreateNestedManyWithoutSeasonSeriesInput_1 = require("../inputs/ReactionCreateNestedManyWithoutSeasonSeriesInput");
const TopicCreateNestedOneWithoutSeasonSeriesInput_1 = require("../inputs/TopicCreateNestedOneWithoutSeasonSeriesInput");
let SeasonSeriesCreateInput = class SeasonSeriesCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SeasonSeriesCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], SeasonSeriesCreateInput.prototype, "seasonOrSeriesNumber", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SeasonSeriesCreateInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SeasonSeriesCreateInput.prototype, "year", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SeasonSeriesCreateInput.prototype, "poster", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SeasonSeriesCreateInput.prototype, "overview", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SeasonSeriesCreateInput.prototype, "trailer", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SeasonSeriesCreateInput.prototype, "coverImage", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SeasonSeriesCreateInput.prototype, "tagline", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicCreateNestedOneWithoutSeasonSeriesInput_1.TopicCreateNestedOneWithoutSeasonSeriesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TopicCreateNestedOneWithoutSeasonSeriesInput_1.TopicCreateNestedOneWithoutSeasonSeriesInput)
], SeasonSeriesCreateInput.prototype, "Topic", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionCreateNestedManyWithoutSeasonSeriesInput_1.ReactionCreateNestedManyWithoutSeasonSeriesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionCreateNestedManyWithoutSeasonSeriesInput_1.ReactionCreateNestedManyWithoutSeasonSeriesInput)
], SeasonSeriesCreateInput.prototype, "Reactions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EpisodeCreateNestedManyWithoutSeasonSeriesInput_1.EpisodeCreateNestedManyWithoutSeasonSeriesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EpisodeCreateNestedManyWithoutSeasonSeriesInput_1.EpisodeCreateNestedManyWithoutSeasonSeriesInput)
], SeasonSeriesCreateInput.prototype, "Episodes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostCreateNestedManyWithoutSeasonSeriesInput_1.PostCreateNestedManyWithoutSeasonSeriesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostCreateNestedManyWithoutSeasonSeriesInput_1.PostCreateNestedManyWithoutSeasonSeriesInput)
], SeasonSeriesCreateInput.prototype, "Posts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], SeasonSeriesCreateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], SeasonSeriesCreateInput.prototype, "updatedAt", void 0);
SeasonSeriesCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SeasonSeriesCreateInput", {
        isAbstract: true
    })
], SeasonSeriesCreateInput);
exports.SeasonSeriesCreateInput = SeasonSeriesCreateInput;
