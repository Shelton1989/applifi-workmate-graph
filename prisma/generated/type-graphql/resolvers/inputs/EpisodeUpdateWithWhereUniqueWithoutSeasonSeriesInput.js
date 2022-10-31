"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EpisodeUpdateWithWhereUniqueWithoutSeasonSeriesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EpisodeUpdateWithoutSeasonSeriesInput_1 = require("../inputs/EpisodeUpdateWithoutSeasonSeriesInput");
const EpisodeWhereUniqueInput_1 = require("../inputs/EpisodeWhereUniqueInput");
let EpisodeUpdateWithWhereUniqueWithoutSeasonSeriesInput = class EpisodeUpdateWithWhereUniqueWithoutSeasonSeriesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EpisodeWhereUniqueInput_1.EpisodeWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EpisodeWhereUniqueInput_1.EpisodeWhereUniqueInput)
], EpisodeUpdateWithWhereUniqueWithoutSeasonSeriesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EpisodeUpdateWithoutSeasonSeriesInput_1.EpisodeUpdateWithoutSeasonSeriesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EpisodeUpdateWithoutSeasonSeriesInput_1.EpisodeUpdateWithoutSeasonSeriesInput)
], EpisodeUpdateWithWhereUniqueWithoutSeasonSeriesInput.prototype, "data", void 0);
EpisodeUpdateWithWhereUniqueWithoutSeasonSeriesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EpisodeUpdateWithWhereUniqueWithoutSeasonSeriesInput", {
        isAbstract: true
    })
], EpisodeUpdateWithWhereUniqueWithoutSeasonSeriesInput);
exports.EpisodeUpdateWithWhereUniqueWithoutSeasonSeriesInput = EpisodeUpdateWithWhereUniqueWithoutSeasonSeriesInput;
