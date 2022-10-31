"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionCreateManySeasonSeriesInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionCreateManySeasonSeriesInput_1 = require("../inputs/ReactionCreateManySeasonSeriesInput");
let ReactionCreateManySeasonSeriesInputEnvelope = class ReactionCreateManySeasonSeriesInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionCreateManySeasonSeriesInput_1.ReactionCreateManySeasonSeriesInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionCreateManySeasonSeriesInputEnvelope.prototype, "data", void 0);
ReactionCreateManySeasonSeriesInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionCreateManySeasonSeriesInputEnvelope", {
        isAbstract: true
    })
], ReactionCreateManySeasonSeriesInputEnvelope);
exports.ReactionCreateManySeasonSeriesInputEnvelope = ReactionCreateManySeasonSeriesInputEnvelope;
