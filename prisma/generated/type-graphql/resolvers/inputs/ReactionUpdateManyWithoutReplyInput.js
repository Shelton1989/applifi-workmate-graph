"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionUpdateManyWithoutReplyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionCreateManyReplyInputEnvelope_1 = require("../inputs/ReactionCreateManyReplyInputEnvelope");
const ReactionCreateOrConnectWithoutReplyInput_1 = require("../inputs/ReactionCreateOrConnectWithoutReplyInput");
const ReactionCreateWithoutReplyInput_1 = require("../inputs/ReactionCreateWithoutReplyInput");
const ReactionScalarWhereInput_1 = require("../inputs/ReactionScalarWhereInput");
const ReactionUpdateManyWithWhereWithoutReplyInput_1 = require("../inputs/ReactionUpdateManyWithWhereWithoutReplyInput");
const ReactionUpdateWithWhereUniqueWithoutReplyInput_1 = require("../inputs/ReactionUpdateWithWhereUniqueWithoutReplyInput");
const ReactionUpsertWithWhereUniqueWithoutReplyInput_1 = require("../inputs/ReactionUpsertWithWhereUniqueWithoutReplyInput");
const ReactionWhereUniqueInput_1 = require("../inputs/ReactionWhereUniqueInput");
let ReactionUpdateManyWithoutReplyInput = class ReactionUpdateManyWithoutReplyInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionCreateWithoutReplyInput_1.ReactionCreateWithoutReplyInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionUpdateManyWithoutReplyInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionCreateOrConnectWithoutReplyInput_1.ReactionCreateOrConnectWithoutReplyInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionUpdateManyWithoutReplyInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionUpsertWithWhereUniqueWithoutReplyInput_1.ReactionUpsertWithWhereUniqueWithoutReplyInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionUpdateManyWithoutReplyInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionCreateManyReplyInputEnvelope_1.ReactionCreateManyReplyInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionCreateManyReplyInputEnvelope_1.ReactionCreateManyReplyInputEnvelope)
], ReactionUpdateManyWithoutReplyInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionWhereUniqueInput_1.ReactionWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionUpdateManyWithoutReplyInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionWhereUniqueInput_1.ReactionWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionUpdateManyWithoutReplyInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionWhereUniqueInput_1.ReactionWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionUpdateManyWithoutReplyInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionWhereUniqueInput_1.ReactionWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionUpdateManyWithoutReplyInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionUpdateWithWhereUniqueWithoutReplyInput_1.ReactionUpdateWithWhereUniqueWithoutReplyInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionUpdateManyWithoutReplyInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionUpdateManyWithWhereWithoutReplyInput_1.ReactionUpdateManyWithWhereWithoutReplyInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionUpdateManyWithoutReplyInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionScalarWhereInput_1.ReactionScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionUpdateManyWithoutReplyInput.prototype, "deleteMany", void 0);
ReactionUpdateManyWithoutReplyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionUpdateManyWithoutReplyInput", {
        isAbstract: true
    })
], ReactionUpdateManyWithoutReplyInput);
exports.ReactionUpdateManyWithoutReplyInput = ReactionUpdateManyWithoutReplyInput;
