"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionUpdateManyWithoutEpisodeInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionCreateManyEpisodeInputEnvelope_1 = require("../inputs/ReactionCreateManyEpisodeInputEnvelope");
const ReactionCreateOrConnectWithoutEpisodeInput_1 = require("../inputs/ReactionCreateOrConnectWithoutEpisodeInput");
const ReactionCreateWithoutEpisodeInput_1 = require("../inputs/ReactionCreateWithoutEpisodeInput");
const ReactionScalarWhereInput_1 = require("../inputs/ReactionScalarWhereInput");
const ReactionUpdateManyWithWhereWithoutEpisodeInput_1 = require("../inputs/ReactionUpdateManyWithWhereWithoutEpisodeInput");
const ReactionUpdateWithWhereUniqueWithoutEpisodeInput_1 = require("../inputs/ReactionUpdateWithWhereUniqueWithoutEpisodeInput");
const ReactionUpsertWithWhereUniqueWithoutEpisodeInput_1 = require("../inputs/ReactionUpsertWithWhereUniqueWithoutEpisodeInput");
const ReactionWhereUniqueInput_1 = require("../inputs/ReactionWhereUniqueInput");
let ReactionUpdateManyWithoutEpisodeInput = class ReactionUpdateManyWithoutEpisodeInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionCreateWithoutEpisodeInput_1.ReactionCreateWithoutEpisodeInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionUpdateManyWithoutEpisodeInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionCreateOrConnectWithoutEpisodeInput_1.ReactionCreateOrConnectWithoutEpisodeInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionUpdateManyWithoutEpisodeInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionUpsertWithWhereUniqueWithoutEpisodeInput_1.ReactionUpsertWithWhereUniqueWithoutEpisodeInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionUpdateManyWithoutEpisodeInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionCreateManyEpisodeInputEnvelope_1.ReactionCreateManyEpisodeInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionCreateManyEpisodeInputEnvelope_1.ReactionCreateManyEpisodeInputEnvelope)
], ReactionUpdateManyWithoutEpisodeInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionWhereUniqueInput_1.ReactionWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionUpdateManyWithoutEpisodeInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionWhereUniqueInput_1.ReactionWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionUpdateManyWithoutEpisodeInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionWhereUniqueInput_1.ReactionWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionUpdateManyWithoutEpisodeInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionWhereUniqueInput_1.ReactionWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionUpdateManyWithoutEpisodeInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionUpdateWithWhereUniqueWithoutEpisodeInput_1.ReactionUpdateWithWhereUniqueWithoutEpisodeInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionUpdateManyWithoutEpisodeInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionUpdateManyWithWhereWithoutEpisodeInput_1.ReactionUpdateManyWithWhereWithoutEpisodeInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionUpdateManyWithoutEpisodeInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionScalarWhereInput_1.ReactionScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionUpdateManyWithoutEpisodeInput.prototype, "deleteMany", void 0);
ReactionUpdateManyWithoutEpisodeInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionUpdateManyWithoutEpisodeInput", {
        isAbstract: true
    })
], ReactionUpdateManyWithoutEpisodeInput);
exports.ReactionUpdateManyWithoutEpisodeInput = ReactionUpdateManyWithoutEpisodeInput;
