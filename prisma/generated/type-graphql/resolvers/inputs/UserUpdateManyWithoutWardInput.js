"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateManyWithoutWardInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateManyWardInputEnvelope_1 = require("../inputs/UserCreateManyWardInputEnvelope");
const UserCreateOrConnectWithoutWardInput_1 = require("../inputs/UserCreateOrConnectWithoutWardInput");
const UserCreateWithoutWardInput_1 = require("../inputs/UserCreateWithoutWardInput");
const UserScalarWhereInput_1 = require("../inputs/UserScalarWhereInput");
const UserUpdateManyWithWhereWithoutWardInput_1 = require("../inputs/UserUpdateManyWithWhereWithoutWardInput");
const UserUpdateWithWhereUniqueWithoutWardInput_1 = require("../inputs/UserUpdateWithWhereUniqueWithoutWardInput");
const UserUpsertWithWhereUniqueWithoutWardInput_1 = require("../inputs/UserUpsertWithWhereUniqueWithoutWardInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateManyWithoutWardInput = class UserUpdateManyWithoutWardInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserCreateWithoutWardInput_1.UserCreateWithoutWardInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserUpdateManyWithoutWardInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserCreateOrConnectWithoutWardInput_1.UserCreateOrConnectWithoutWardInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserUpdateManyWithoutWardInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserUpsertWithWhereUniqueWithoutWardInput_1.UserUpsertWithWhereUniqueWithoutWardInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserUpdateManyWithoutWardInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateManyWardInputEnvelope_1.UserCreateManyWardInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateManyWardInputEnvelope_1.UserCreateManyWardInputEnvelope)
], UserUpdateManyWithoutWardInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserWhereUniqueInput_1.UserWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserUpdateManyWithoutWardInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserWhereUniqueInput_1.UserWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserUpdateManyWithoutWardInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserWhereUniqueInput_1.UserWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserUpdateManyWithoutWardInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserWhereUniqueInput_1.UserWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserUpdateManyWithoutWardInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserUpdateWithWhereUniqueWithoutWardInput_1.UserUpdateWithWhereUniqueWithoutWardInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserUpdateManyWithoutWardInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserUpdateManyWithWhereWithoutWardInput_1.UserUpdateManyWithWhereWithoutWardInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserUpdateManyWithoutWardInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserScalarWhereInput_1.UserScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserUpdateManyWithoutWardInput.prototype, "deleteMany", void 0);
UserUpdateManyWithoutWardInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateManyWithoutWardInput", {
        isAbstract: true
    })
], UserUpdateManyWithoutWardInput);
exports.UserUpdateManyWithoutWardInput = UserUpdateManyWithoutWardInput;
