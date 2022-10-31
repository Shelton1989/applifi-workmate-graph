"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EpisodeUpdateManyWithoutSeasonSeriesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EpisodeCreateManySeasonSeriesInputEnvelope_1 = require("../inputs/EpisodeCreateManySeasonSeriesInputEnvelope");
const EpisodeCreateOrConnectWithoutSeasonSeriesInput_1 = require("../inputs/EpisodeCreateOrConnectWithoutSeasonSeriesInput");
const EpisodeCreateWithoutSeasonSeriesInput_1 = require("../inputs/EpisodeCreateWithoutSeasonSeriesInput");
const EpisodeScalarWhereInput_1 = require("../inputs/EpisodeScalarWhereInput");
const EpisodeUpdateManyWithWhereWithoutSeasonSeriesInput_1 = require("../inputs/EpisodeUpdateManyWithWhereWithoutSeasonSeriesInput");
const EpisodeUpdateWithWhereUniqueWithoutSeasonSeriesInput_1 = require("../inputs/EpisodeUpdateWithWhereUniqueWithoutSeasonSeriesInput");
const EpisodeUpsertWithWhereUniqueWithoutSeasonSeriesInput_1 = require("../inputs/EpisodeUpsertWithWhereUniqueWithoutSeasonSeriesInput");
const EpisodeWhereUniqueInput_1 = require("../inputs/EpisodeWhereUniqueInput");
let EpisodeUpdateManyWithoutSeasonSeriesInput = class EpisodeUpdateManyWithoutSeasonSeriesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EpisodeCreateWithoutSeasonSeriesInput_1.EpisodeCreateWithoutSeasonSeriesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EpisodeUpdateManyWithoutSeasonSeriesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EpisodeCreateOrConnectWithoutSeasonSeriesInput_1.EpisodeCreateOrConnectWithoutSeasonSeriesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EpisodeUpdateManyWithoutSeasonSeriesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EpisodeUpsertWithWhereUniqueWithoutSeasonSeriesInput_1.EpisodeUpsertWithWhereUniqueWithoutSeasonSeriesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EpisodeUpdateManyWithoutSeasonSeriesInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EpisodeCreateManySeasonSeriesInputEnvelope_1.EpisodeCreateManySeasonSeriesInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EpisodeCreateManySeasonSeriesInputEnvelope_1.EpisodeCreateManySeasonSeriesInputEnvelope)
], EpisodeUpdateManyWithoutSeasonSeriesInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EpisodeWhereUniqueInput_1.EpisodeWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EpisodeUpdateManyWithoutSeasonSeriesInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EpisodeWhereUniqueInput_1.EpisodeWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EpisodeUpdateManyWithoutSeasonSeriesInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EpisodeWhereUniqueInput_1.EpisodeWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EpisodeUpdateManyWithoutSeasonSeriesInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EpisodeWhereUniqueInput_1.EpisodeWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EpisodeUpdateManyWithoutSeasonSeriesInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EpisodeUpdateWithWhereUniqueWithoutSeasonSeriesInput_1.EpisodeUpdateWithWhereUniqueWithoutSeasonSeriesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EpisodeUpdateManyWithoutSeasonSeriesInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EpisodeUpdateManyWithWhereWithoutSeasonSeriesInput_1.EpisodeUpdateManyWithWhereWithoutSeasonSeriesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EpisodeUpdateManyWithoutSeasonSeriesInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EpisodeScalarWhereInput_1.EpisodeScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EpisodeUpdateManyWithoutSeasonSeriesInput.prototype, "deleteMany", void 0);
EpisodeUpdateManyWithoutSeasonSeriesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EpisodeUpdateManyWithoutSeasonSeriesInput", {
        isAbstract: true
    })
], EpisodeUpdateManyWithoutSeasonSeriesInput);
exports.EpisodeUpdateManyWithoutSeasonSeriesInput = EpisodeUpdateManyWithoutSeasonSeriesInput;
