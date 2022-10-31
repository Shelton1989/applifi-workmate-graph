"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EpisodeCreateManySeasonSeriesInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EpisodeCreateManySeasonSeriesInput_1 = require("../inputs/EpisodeCreateManySeasonSeriesInput");
let EpisodeCreateManySeasonSeriesInputEnvelope = class EpisodeCreateManySeasonSeriesInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EpisodeCreateManySeasonSeriesInput_1.EpisodeCreateManySeasonSeriesInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], EpisodeCreateManySeasonSeriesInputEnvelope.prototype, "data", void 0);
EpisodeCreateManySeasonSeriesInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("EpisodeCreateManySeasonSeriesInputEnvelope", {
        isAbstract: true
    })
], EpisodeCreateManySeasonSeriesInputEnvelope);
exports.EpisodeCreateManySeasonSeriesInputEnvelope = EpisodeCreateManySeasonSeriesInputEnvelope;
