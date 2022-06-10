"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionUpdateManyWithoutCommentInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionCreateManyCommentInputEnvelope_1 = require("../inputs/ReactionCreateManyCommentInputEnvelope");
const ReactionCreateOrConnectWithoutCommentInput_1 = require("../inputs/ReactionCreateOrConnectWithoutCommentInput");
const ReactionCreateWithoutCommentInput_1 = require("../inputs/ReactionCreateWithoutCommentInput");
const ReactionScalarWhereInput_1 = require("../inputs/ReactionScalarWhereInput");
const ReactionUpdateManyWithWhereWithoutCommentInput_1 = require("../inputs/ReactionUpdateManyWithWhereWithoutCommentInput");
const ReactionUpdateWithWhereUniqueWithoutCommentInput_1 = require("../inputs/ReactionUpdateWithWhereUniqueWithoutCommentInput");
const ReactionUpsertWithWhereUniqueWithoutCommentInput_1 = require("../inputs/ReactionUpsertWithWhereUniqueWithoutCommentInput");
const ReactionWhereUniqueInput_1 = require("../inputs/ReactionWhereUniqueInput");
let ReactionUpdateManyWithoutCommentInput = class ReactionUpdateManyWithoutCommentInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionCreateWithoutCommentInput_1.ReactionCreateWithoutCommentInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionUpdateManyWithoutCommentInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionCreateOrConnectWithoutCommentInput_1.ReactionCreateOrConnectWithoutCommentInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionUpdateManyWithoutCommentInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionUpsertWithWhereUniqueWithoutCommentInput_1.ReactionUpsertWithWhereUniqueWithoutCommentInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionUpdateManyWithoutCommentInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionCreateManyCommentInputEnvelope_1.ReactionCreateManyCommentInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionCreateManyCommentInputEnvelope_1.ReactionCreateManyCommentInputEnvelope)
], ReactionUpdateManyWithoutCommentInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionWhereUniqueInput_1.ReactionWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionUpdateManyWithoutCommentInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionWhereUniqueInput_1.ReactionWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionUpdateManyWithoutCommentInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionWhereUniqueInput_1.ReactionWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionUpdateManyWithoutCommentInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionWhereUniqueInput_1.ReactionWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionUpdateManyWithoutCommentInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionUpdateWithWhereUniqueWithoutCommentInput_1.ReactionUpdateWithWhereUniqueWithoutCommentInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionUpdateManyWithoutCommentInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionUpdateManyWithWhereWithoutCommentInput_1.ReactionUpdateManyWithWhereWithoutCommentInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionUpdateManyWithoutCommentInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionScalarWhereInput_1.ReactionScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionUpdateManyWithoutCommentInput.prototype, "deleteMany", void 0);
ReactionUpdateManyWithoutCommentInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionUpdateManyWithoutCommentInput", {
        isAbstract: true
    })
], ReactionUpdateManyWithoutCommentInput);
exports.ReactionUpdateManyWithoutCommentInput = ReactionUpdateManyWithoutCommentInput;
