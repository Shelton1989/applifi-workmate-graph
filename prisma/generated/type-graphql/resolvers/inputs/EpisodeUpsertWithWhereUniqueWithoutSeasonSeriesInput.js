"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EpisodeUpsertWithWhereUniqueWithoutSeasonSeriesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EpisodeCreateWithoutSeasonSeriesInput_1 = require("../inputs/EpisodeCreateWithoutSeasonSeriesInput");
const EpisodeUpdateWithoutSeasonSeriesInput_1 = require("../inputs/EpisodeUpdateWithoutSeasonSeriesInput");
const EpisodeWhereUniqueInput_1 = require("../inputs/EpisodeWhereUniqueInput");
let EpisodeUpsertWithWhereUniqueWithoutSeasonSeriesInput = class EpisodeUpsertWithWhereUniqueWithoutSeasonSeriesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EpisodeWhereUniqueInput_1.EpisodeWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EpisodeWhereUniqueInput_1.EpisodeWhereUniqueInput)
], EpisodeUpsertWithWhereUniqueWithoutSeasonSeriesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EpisodeUpdateWithoutSeasonSeriesInput_1.EpisodeUpdateWithoutSeasonSeriesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EpisodeUpdateWithoutSeasonSeriesInput_1.EpisodeUpdateWithoutSeasonSeriesInput)
], EpisodeUpsertWithWhereUniqueWithoutSeasonSeriesInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EpisodeCreateWithoutSeasonSeriesInput_1.EpisodeCreateWithoutSeasonSeriesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EpisodeCreateWithoutSeasonSeriesInput_1.EpisodeCreateWithoutSeasonSeriesInput)
], EpisodeUpsertWithWhereUniqueWithoutSeasonSeriesInput.prototype, "create", void 0);
EpisodeUpsertWithWhereUniqueWithoutSeasonSeriesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EpisodeUpsertWithWhereUniqueWithoutSeasonSeriesInput", {
        isAbstract: true
    })
], EpisodeUpsertWithWhereUniqueWithoutSeasonSeriesInput);
exports.EpisodeUpsertWithWhereUniqueWithoutSeasonSeriesInput = EpisodeUpsertWithWhereUniqueWithoutSeasonSeriesInput;
