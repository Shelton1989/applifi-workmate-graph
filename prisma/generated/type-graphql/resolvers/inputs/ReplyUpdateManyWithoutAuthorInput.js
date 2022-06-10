"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplyUpdateManyWithoutAuthorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReplyCreateManyAuthorInputEnvelope_1 = require("../inputs/ReplyCreateManyAuthorInputEnvelope");
const ReplyCreateOrConnectWithoutAuthorInput_1 = require("../inputs/ReplyCreateOrConnectWithoutAuthorInput");
const ReplyCreateWithoutAuthorInput_1 = require("../inputs/ReplyCreateWithoutAuthorInput");
const ReplyScalarWhereInput_1 = require("../inputs/ReplyScalarWhereInput");
const ReplyUpdateManyWithWhereWithoutAuthorInput_1 = require("../inputs/ReplyUpdateManyWithWhereWithoutAuthorInput");
const ReplyUpdateWithWhereUniqueWithoutAuthorInput_1 = require("../inputs/ReplyUpdateWithWhereUniqueWithoutAuthorInput");
const ReplyUpsertWithWhereUniqueWithoutAuthorInput_1 = require("../inputs/ReplyUpsertWithWhereUniqueWithoutAuthorInput");
const ReplyWhereUniqueInput_1 = require("../inputs/ReplyWhereUniqueInput");
let ReplyUpdateManyWithoutAuthorInput = class ReplyUpdateManyWithoutAuthorInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReplyCreateWithoutAuthorInput_1.ReplyCreateWithoutAuthorInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReplyUpdateManyWithoutAuthorInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReplyCreateOrConnectWithoutAuthorInput_1.ReplyCreateOrConnectWithoutAuthorInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReplyUpdateManyWithoutAuthorInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReplyUpsertWithWhereUniqueWithoutAuthorInput_1.ReplyUpsertWithWhereUniqueWithoutAuthorInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReplyUpdateManyWithoutAuthorInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReplyCreateManyAuthorInputEnvelope_1.ReplyCreateManyAuthorInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReplyCreateManyAuthorInputEnvelope_1.ReplyCreateManyAuthorInputEnvelope)
], ReplyUpdateManyWithoutAuthorInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReplyWhereUniqueInput_1.ReplyWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReplyUpdateManyWithoutAuthorInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReplyWhereUniqueInput_1.ReplyWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReplyUpdateManyWithoutAuthorInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReplyWhereUniqueInput_1.ReplyWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReplyUpdateManyWithoutAuthorInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReplyWhereUniqueInput_1.ReplyWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReplyUpdateManyWithoutAuthorInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReplyUpdateWithWhereUniqueWithoutAuthorInput_1.ReplyUpdateWithWhereUniqueWithoutAuthorInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReplyUpdateManyWithoutAuthorInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReplyUpdateManyWithWhereWithoutAuthorInput_1.ReplyUpdateManyWithWhereWithoutAuthorInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReplyUpdateManyWithoutAuthorInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReplyScalarWhereInput_1.ReplyScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReplyUpdateManyWithoutAuthorInput.prototype, "deleteMany", void 0);
ReplyUpdateManyWithoutAuthorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReplyUpdateManyWithoutAuthorInput", {
        isAbstract: true
    })
], ReplyUpdateManyWithoutAuthorInput);
exports.ReplyUpdateManyWithoutAuthorInput = ReplyUpdateManyWithoutAuthorInput;
