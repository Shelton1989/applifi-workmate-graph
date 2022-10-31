"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EpisodeCreateOrConnectWithoutSeasonSeriesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EpisodeCreateWithoutSeasonSeriesInput_1 = require("../inputs/EpisodeCreateWithoutSeasonSeriesInput");
const EpisodeWhereUniqueInput_1 = require("../inputs/EpisodeWhereUniqueInput");
let EpisodeCreateOrConnectWithoutSeasonSeriesInput = class EpisodeCreateOrConnectWithoutSeasonSeriesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EpisodeWhereUniqueInput_1.EpisodeWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EpisodeWhereUniqueInput_1.EpisodeWhereUniqueInput)
], EpisodeCreateOrConnectWithoutSeasonSeriesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EpisodeCreateWithoutSeasonSeriesInput_1.EpisodeCreateWithoutSeasonSeriesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EpisodeCreateWithoutSeasonSeriesInput_1.EpisodeCreateWithoutSeasonSeriesInput)
], EpisodeCreateOrConnectWithoutSeasonSeriesInput.prototype, "create", void 0);
EpisodeCreateOrConnectWithoutSeasonSeriesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EpisodeCreateOrConnectWithoutSeasonSeriesInput", {
        isAbstract: true
    })
], EpisodeCreateOrConnectWithoutSeasonSeriesInput);
exports.EpisodeCreateOrConnectWithoutSeasonSeriesInput = EpisodeCreateOrConnectWithoutSeasonSeriesInput;
