"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionUpdateManyWithoutSeasonSeriesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionCreateManySeasonSeriesInputEnvelope_1 = require("../inputs/ReactionCreateManySeasonSeriesInputEnvelope");
const ReactionCreateOrConnectWithoutSeasonSeriesInput_1 = require("../inputs/ReactionCreateOrConnectWithoutSeasonSeriesInput");
const ReactionCreateWithoutSeasonSeriesInput_1 = require("../inputs/ReactionCreateWithoutSeasonSeriesInput");
const ReactionScalarWhereInput_1 = require("../inputs/ReactionScalarWhereInput");
const ReactionUpdateManyWithWhereWithoutSeasonSeriesInput_1 = require("../inputs/ReactionUpdateManyWithWhereWithoutSeasonSeriesInput");
const ReactionUpdateWithWhereUniqueWithoutSeasonSeriesInput_1 = require("../inputs/ReactionUpdateWithWhereUniqueWithoutSeasonSeriesInput");
const ReactionUpsertWithWhereUniqueWithoutSeasonSeriesInput_1 = require("../inputs/ReactionUpsertWithWhereUniqueWithoutSeasonSeriesInput");
const ReactionWhereUniqueInput_1 = require("../inputs/ReactionWhereUniqueInput");
let ReactionUpdateManyWithoutSeasonSeriesInput = class ReactionUpdateManyWithoutSeasonSeriesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionCreateWithoutSeasonSeriesInput_1.ReactionCreateWithoutSeasonSeriesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionUpdateManyWithoutSeasonSeriesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionCreateOrConnectWithoutSeasonSeriesInput_1.ReactionCreateOrConnectWithoutSeasonSeriesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionUpdateManyWithoutSeasonSeriesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionUpsertWithWhereUniqueWithoutSeasonSeriesInput_1.ReactionUpsertWithWhereUniqueWithoutSeasonSeriesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionUpdateManyWithoutSeasonSeriesInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionCreateManySeasonSeriesInputEnvelope_1.ReactionCreateManySeasonSeriesInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionCreateManySeasonSeriesInputEnvelope_1.ReactionCreateManySeasonSeriesInputEnvelope)
], ReactionUpdateManyWithoutSeasonSeriesInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionWhereUniqueInput_1.ReactionWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionUpdateManyWithoutSeasonSeriesInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionWhereUniqueInput_1.ReactionWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionUpdateManyWithoutSeasonSeriesInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionWhereUniqueInput_1.ReactionWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionUpdateManyWithoutSeasonSeriesInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionWhereUniqueInput_1.ReactionWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionUpdateManyWithoutSeasonSeriesInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionUpdateWithWhereUniqueWithoutSeasonSeriesInput_1.ReactionUpdateWithWhereUniqueWithoutSeasonSeriesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionUpdateManyWithoutSeasonSeriesInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionUpdateManyWithWhereWithoutSeasonSeriesInput_1.ReactionUpdateManyWithWhereWithoutSeasonSeriesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionUpdateManyWithoutSeasonSeriesInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionScalarWhereInput_1.ReactionScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionUpdateManyWithoutSeasonSeriesInput.prototype, "deleteMany", void 0);
ReactionUpdateManyWithoutSeasonSeriesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionUpdateManyWithoutSeasonSeriesInput", {
        isAbstract: true
    })
], ReactionUpdateManyWithoutSeasonSeriesInput);
exports.ReactionUpdateManyWithoutSeasonSeriesInput = ReactionUpdateManyWithoutSeasonSeriesInput;
