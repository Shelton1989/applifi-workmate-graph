"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationUpdateManyWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NotificationCreateManyUserInputEnvelope_1 = require("../inputs/NotificationCreateManyUserInputEnvelope");
const NotificationCreateOrConnectWithoutUserInput_1 = require("../inputs/NotificationCreateOrConnectWithoutUserInput");
const NotificationCreateWithoutUserInput_1 = require("../inputs/NotificationCreateWithoutUserInput");
const NotificationScalarWhereInput_1 = require("../inputs/NotificationScalarWhereInput");
const NotificationUpdateManyWithWhereWithoutUserInput_1 = require("../inputs/NotificationUpdateManyWithWhereWithoutUserInput");
const NotificationUpdateWithWhereUniqueWithoutUserInput_1 = require("../inputs/NotificationUpdateWithWhereUniqueWithoutUserInput");
const NotificationUpsertWithWhereUniqueWithoutUserInput_1 = require("../inputs/NotificationUpsertWithWhereUniqueWithoutUserInput");
const NotificationWhereUniqueInput_1 = require("../inputs/NotificationWhereUniqueInput");
let NotificationUpdateManyWithoutUserInput = class NotificationUpdateManyWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [NotificationCreateWithoutUserInput_1.NotificationCreateWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NotificationUpdateManyWithoutUserInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [NotificationCreateOrConnectWithoutUserInput_1.NotificationCreateOrConnectWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NotificationUpdateManyWithoutUserInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [NotificationUpsertWithWhereUniqueWithoutUserInput_1.NotificationUpsertWithWhereUniqueWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NotificationUpdateManyWithoutUserInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationCreateManyUserInputEnvelope_1.NotificationCreateManyUserInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NotificationCreateManyUserInputEnvelope_1.NotificationCreateManyUserInputEnvelope)
], NotificationUpdateManyWithoutUserInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [NotificationWhereUniqueInput_1.NotificationWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NotificationUpdateManyWithoutUserInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [NotificationWhereUniqueInput_1.NotificationWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NotificationUpdateManyWithoutUserInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [NotificationWhereUniqueInput_1.NotificationWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NotificationUpdateManyWithoutUserInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [NotificationWhereUniqueInput_1.NotificationWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NotificationUpdateManyWithoutUserInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [NotificationUpdateWithWhereUniqueWithoutUserInput_1.NotificationUpdateWithWhereUniqueWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NotificationUpdateManyWithoutUserInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [NotificationUpdateManyWithWhereWithoutUserInput_1.NotificationUpdateManyWithWhereWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NotificationUpdateManyWithoutUserInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [NotificationScalarWhereInput_1.NotificationScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NotificationUpdateManyWithoutUserInput.prototype, "deleteMany", void 0);
NotificationUpdateManyWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("NotificationUpdateManyWithoutUserInput", {
        isAbstract: true
    })
], NotificationUpdateManyWithoutUserInput);
exports.NotificationUpdateManyWithoutUserInput = NotificationUpdateManyWithoutUserInput;
