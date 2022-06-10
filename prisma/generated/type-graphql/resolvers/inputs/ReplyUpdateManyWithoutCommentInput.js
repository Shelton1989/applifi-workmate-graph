"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplyUpdateManyWithoutCommentInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReplyCreateManyCommentInputEnvelope_1 = require("../inputs/ReplyCreateManyCommentInputEnvelope");
const ReplyCreateOrConnectWithoutCommentInput_1 = require("../inputs/ReplyCreateOrConnectWithoutCommentInput");
const ReplyCreateWithoutCommentInput_1 = require("../inputs/ReplyCreateWithoutCommentInput");
const ReplyScalarWhereInput_1 = require("../inputs/ReplyScalarWhereInput");
const ReplyUpdateManyWithWhereWithoutCommentInput_1 = require("../inputs/ReplyUpdateManyWithWhereWithoutCommentInput");
const ReplyUpdateWithWhereUniqueWithoutCommentInput_1 = require("../inputs/ReplyUpdateWithWhereUniqueWithoutCommentInput");
const ReplyUpsertWithWhereUniqueWithoutCommentInput_1 = require("../inputs/ReplyUpsertWithWhereUniqueWithoutCommentInput");
const ReplyWhereUniqueInput_1 = require("../inputs/ReplyWhereUniqueInput");
let ReplyUpdateManyWithoutCommentInput = class ReplyUpdateManyWithoutCommentInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReplyCreateWithoutCommentInput_1.ReplyCreateWithoutCommentInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReplyUpdateManyWithoutCommentInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReplyCreateOrConnectWithoutCommentInput_1.ReplyCreateOrConnectWithoutCommentInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReplyUpdateManyWithoutCommentInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReplyUpsertWithWhereUniqueWithoutCommentInput_1.ReplyUpsertWithWhereUniqueWithoutCommentInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReplyUpdateManyWithoutCommentInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReplyCreateManyCommentInputEnvelope_1.ReplyCreateManyCommentInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReplyCreateManyCommentInputEnvelope_1.ReplyCreateManyCommentInputEnvelope)
], ReplyUpdateManyWithoutCommentInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReplyWhereUniqueInput_1.ReplyWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReplyUpdateManyWithoutCommentInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReplyWhereUniqueInput_1.ReplyWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReplyUpdateManyWithoutCommentInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReplyWhereUniqueInput_1.ReplyWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReplyUpdateManyWithoutCommentInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReplyWhereUniqueInput_1.ReplyWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReplyUpdateManyWithoutCommentInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReplyUpdateWithWhereUniqueWithoutCommentInput_1.ReplyUpdateWithWhereUniqueWithoutCommentInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReplyUpdateManyWithoutCommentInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReplyUpdateManyWithWhereWithoutCommentInput_1.ReplyUpdateManyWithWhereWithoutCommentInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReplyUpdateManyWithoutCommentInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReplyScalarWhereInput_1.ReplyScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReplyUpdateManyWithoutCommentInput.prototype, "deleteMany", void 0);
ReplyUpdateManyWithoutCommentInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReplyUpdateManyWithoutCommentInput", {
        isAbstract: true
    })
], ReplyUpdateManyWithoutCommentInput);
exports.ReplyUpdateManyWithoutCommentInput = ReplyUpdateManyWithoutCommentInput;
