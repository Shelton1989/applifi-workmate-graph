"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionUpdateWithWhereUniqueWithoutSeasonSeriesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionUpdateWithoutSeasonSeriesInput_1 = require("../inputs/ReactionUpdateWithoutSeasonSeriesInput");
const ReactionWhereUniqueInput_1 = require("../inputs/ReactionWhereUniqueInput");
let ReactionUpdateWithWhereUniqueWithoutSeasonSeriesInput = class ReactionUpdateWithWhereUniqueWithoutSeasonSeriesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionWhereUniqueInput_1.ReactionWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionWhereUniqueInput_1.ReactionWhereUniqueInput)
], ReactionUpdateWithWhereUniqueWithoutSeasonSeriesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionUpdateWithoutSeasonSeriesInput_1.ReactionUpdateWithoutSeasonSeriesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionUpdateWithoutSeasonSeriesInput_1.ReactionUpdateWithoutSeasonSeriesInput)
], ReactionUpdateWithWhereUniqueWithoutSeasonSeriesInput.prototype, "data", void 0);
ReactionUpdateWithWhereUniqueWithoutSeasonSeriesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionUpdateWithWhereUniqueWithoutSeasonSeriesInput", {
        isAbstract: true
    })
], ReactionUpdateWithWhereUniqueWithoutSeasonSeriesInput);
exports.ReactionUpdateWithWhereUniqueWithoutSeasonSeriesInput = ReactionUpdateWithWhereUniqueWithoutSeasonSeriesInput;
