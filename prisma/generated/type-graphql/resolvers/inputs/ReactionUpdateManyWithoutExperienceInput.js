"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionUpdateManyWithoutExperienceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionCreateManyExperienceInputEnvelope_1 = require("../inputs/ReactionCreateManyExperienceInputEnvelope");
const ReactionCreateOrConnectWithoutExperienceInput_1 = require("../inputs/ReactionCreateOrConnectWithoutExperienceInput");
const ReactionCreateWithoutExperienceInput_1 = require("../inputs/ReactionCreateWithoutExperienceInput");
const ReactionScalarWhereInput_1 = require("../inputs/ReactionScalarWhereInput");
const ReactionUpdateManyWithWhereWithoutExperienceInput_1 = require("../inputs/ReactionUpdateManyWithWhereWithoutExperienceInput");
const ReactionUpdateWithWhereUniqueWithoutExperienceInput_1 = require("../inputs/ReactionUpdateWithWhereUniqueWithoutExperienceInput");
const ReactionUpsertWithWhereUniqueWithoutExperienceInput_1 = require("../inputs/ReactionUpsertWithWhereUniqueWithoutExperienceInput");
const ReactionWhereUniqueInput_1 = require("../inputs/ReactionWhereUniqueInput");
let ReactionUpdateManyWithoutExperienceInput = class ReactionUpdateManyWithoutExperienceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionCreateWithoutExperienceInput_1.ReactionCreateWithoutExperienceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionUpdateManyWithoutExperienceInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionCreateOrConnectWithoutExperienceInput_1.ReactionCreateOrConnectWithoutExperienceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionUpdateManyWithoutExperienceInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionUpsertWithWhereUniqueWithoutExperienceInput_1.ReactionUpsertWithWhereUniqueWithoutExperienceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionUpdateManyWithoutExperienceInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionCreateManyExperienceInputEnvelope_1.ReactionCreateManyExperienceInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionCreateManyExperienceInputEnvelope_1.ReactionCreateManyExperienceInputEnvelope)
], ReactionUpdateManyWithoutExperienceInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionWhereUniqueInput_1.ReactionWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionUpdateManyWithoutExperienceInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionWhereUniqueInput_1.ReactionWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionUpdateManyWithoutExperienceInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionWhereUniqueInput_1.ReactionWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionUpdateManyWithoutExperienceInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionWhereUniqueInput_1.ReactionWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionUpdateManyWithoutExperienceInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionUpdateWithWhereUniqueWithoutExperienceInput_1.ReactionUpdateWithWhereUniqueWithoutExperienceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionUpdateManyWithoutExperienceInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionUpdateManyWithWhereWithoutExperienceInput_1.ReactionUpdateManyWithWhereWithoutExperienceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionUpdateManyWithoutExperienceInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionScalarWhereInput_1.ReactionScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionUpdateManyWithoutExperienceInput.prototype, "deleteMany", void 0);
ReactionUpdateManyWithoutExperienceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionUpdateManyWithoutExperienceInput", {
        isAbstract: true
    })
], ReactionUpdateManyWithoutExperienceInput);
exports.ReactionUpdateManyWithoutExperienceInput = ReactionUpdateManyWithoutExperienceInput;
