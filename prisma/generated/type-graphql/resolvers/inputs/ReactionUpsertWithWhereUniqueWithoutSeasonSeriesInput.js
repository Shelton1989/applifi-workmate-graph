"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionUpsertWithWhereUniqueWithoutSeasonSeriesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionCreateWithoutSeasonSeriesInput_1 = require("../inputs/ReactionCreateWithoutSeasonSeriesInput");
const ReactionUpdateWithoutSeasonSeriesInput_1 = require("../inputs/ReactionUpdateWithoutSeasonSeriesInput");
const ReactionWhereUniqueInput_1 = require("../inputs/ReactionWhereUniqueInput");
let ReactionUpsertWithWhereUniqueWithoutSeasonSeriesInput = class ReactionUpsertWithWhereUniqueWithoutSeasonSeriesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionWhereUniqueInput_1.ReactionWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionWhereUniqueInput_1.ReactionWhereUniqueInput)
], ReactionUpsertWithWhereUniqueWithoutSeasonSeriesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionUpdateWithoutSeasonSeriesInput_1.ReactionUpdateWithoutSeasonSeriesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionUpdateWithoutSeasonSeriesInput_1.ReactionUpdateWithoutSeasonSeriesInput)
], ReactionUpsertWithWhereUniqueWithoutSeasonSeriesInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionCreateWithoutSeasonSeriesInput_1.ReactionCreateWithoutSeasonSeriesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionCreateWithoutSeasonSeriesInput_1.ReactionCreateWithoutSeasonSeriesInput)
], ReactionUpsertWithWhereUniqueWithoutSeasonSeriesInput.prototype, "create", void 0);
ReactionUpsertWithWhereUniqueWithoutSeasonSeriesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionUpsertWithWhereUniqueWithoutSeasonSeriesInput", {
        isAbstract: true
    })
], ReactionUpsertWithWhereUniqueWithoutSeasonSeriesInput);
exports.ReactionUpsertWithWhereUniqueWithoutSeasonSeriesInput = ReactionUpsertWithWhereUniqueWithoutSeasonSeriesInput;
