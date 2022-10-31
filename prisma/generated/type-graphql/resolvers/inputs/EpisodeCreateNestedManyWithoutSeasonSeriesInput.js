"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EpisodeCreateNestedManyWithoutSeasonSeriesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EpisodeCreateManySeasonSeriesInputEnvelope_1 = require("../inputs/EpisodeCreateManySeasonSeriesInputEnvelope");
const EpisodeCreateOrConnectWithoutSeasonSeriesInput_1 = require("../inputs/EpisodeCreateOrConnectWithoutSeasonSeriesInput");
const EpisodeCreateWithoutSeasonSeriesInput_1 = require("../inputs/EpisodeCreateWithoutSeasonSeriesInput");
const EpisodeWhereUniqueInput_1 = require("../inputs/EpisodeWhereUniqueInput");
let EpisodeCreateNestedManyWithoutSeasonSeriesInput = class EpisodeCreateNestedManyWithoutSeasonSeriesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EpisodeCreateWithoutSeasonSeriesInput_1.EpisodeCreateWithoutSeasonSeriesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EpisodeCreateNestedManyWithoutSeasonSeriesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EpisodeCreateOrConnectWithoutSeasonSeriesInput_1.EpisodeCreateOrConnectWithoutSeasonSeriesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EpisodeCreateNestedManyWithoutSeasonSeriesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EpisodeCreateManySeasonSeriesInputEnvelope_1.EpisodeCreateManySeasonSeriesInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EpisodeCreateManySeasonSeriesInputEnvelope_1.EpisodeCreateManySeasonSeriesInputEnvelope)
], EpisodeCreateNestedManyWithoutSeasonSeriesInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EpisodeWhereUniqueInput_1.EpisodeWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EpisodeCreateNestedManyWithoutSeasonSeriesInput.prototype, "connect", void 0);
EpisodeCreateNestedManyWithoutSeasonSeriesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EpisodeCreateNestedManyWithoutSeasonSeriesInput", {
        isAbstract: true
    })
], EpisodeCreateNestedManyWithoutSeasonSeriesInput);
exports.EpisodeCreateNestedManyWithoutSeasonSeriesInput = EpisodeCreateNestedManyWithoutSeasonSeriesInput;
