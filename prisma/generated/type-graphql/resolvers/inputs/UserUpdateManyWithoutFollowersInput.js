"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateManyWithoutFollowersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutFollowersInput_1 = require("../inputs/UserCreateOrConnectWithoutFollowersInput");
const UserCreateWithoutFollowersInput_1 = require("../inputs/UserCreateWithoutFollowersInput");
const UserScalarWhereInput_1 = require("../inputs/UserScalarWhereInput");
const UserUpdateManyWithWhereWithoutFollowersInput_1 = require("../inputs/UserUpdateManyWithWhereWithoutFollowersInput");
const UserUpdateWithWhereUniqueWithoutFollowersInput_1 = require("../inputs/UserUpdateWithWhereUniqueWithoutFollowersInput");
const UserUpsertWithWhereUniqueWithoutFollowersInput_1 = require("../inputs/UserUpsertWithWhereUniqueWithoutFollowersInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateManyWithoutFollowersInput = class UserUpdateManyWithoutFollowersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserCreateWithoutFollowersInput_1.UserCreateWithoutFollowersInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserUpdateManyWithoutFollowersInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserCreateOrConnectWithoutFollowersInput_1.UserCreateOrConnectWithoutFollowersInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserUpdateManyWithoutFollowersInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserUpsertWithWhereUniqueWithoutFollowersInput_1.UserUpsertWithWhereUniqueWithoutFollowersInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserUpdateManyWithoutFollowersInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserWhereUniqueInput_1.UserWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserUpdateManyWithoutFollowersInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserWhereUniqueInput_1.UserWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserUpdateManyWithoutFollowersInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserWhereUniqueInput_1.UserWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserUpdateManyWithoutFollowersInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserWhereUniqueInput_1.UserWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserUpdateManyWithoutFollowersInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserUpdateWithWhereUniqueWithoutFollowersInput_1.UserUpdateWithWhereUniqueWithoutFollowersInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserUpdateManyWithoutFollowersInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserUpdateManyWithWhereWithoutFollowersInput_1.UserUpdateManyWithWhereWithoutFollowersInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserUpdateManyWithoutFollowersInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserScalarWhereInput_1.UserScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserUpdateManyWithoutFollowersInput.prototype, "deleteMany", void 0);
UserUpdateManyWithoutFollowersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateManyWithoutFollowersInput", {
        isAbstract: true
    })
], UserUpdateManyWithoutFollowersInput);
exports.UserUpdateManyWithoutFollowersInput = UserUpdateManyWithoutFollowersInput;
