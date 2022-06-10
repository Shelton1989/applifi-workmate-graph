"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateManyWithoutFollowingInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutFollowingInput_1 = require("../inputs/UserCreateOrConnectWithoutFollowingInput");
const UserCreateWithoutFollowingInput_1 = require("../inputs/UserCreateWithoutFollowingInput");
const UserScalarWhereInput_1 = require("../inputs/UserScalarWhereInput");
const UserUpdateManyWithWhereWithoutFollowingInput_1 = require("../inputs/UserUpdateManyWithWhereWithoutFollowingInput");
const UserUpdateWithWhereUniqueWithoutFollowingInput_1 = require("../inputs/UserUpdateWithWhereUniqueWithoutFollowingInput");
const UserUpsertWithWhereUniqueWithoutFollowingInput_1 = require("../inputs/UserUpsertWithWhereUniqueWithoutFollowingInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateManyWithoutFollowingInput = class UserUpdateManyWithoutFollowingInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserCreateWithoutFollowingInput_1.UserCreateWithoutFollowingInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserUpdateManyWithoutFollowingInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserCreateOrConnectWithoutFollowingInput_1.UserCreateOrConnectWithoutFollowingInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserUpdateManyWithoutFollowingInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserUpsertWithWhereUniqueWithoutFollowingInput_1.UserUpsertWithWhereUniqueWithoutFollowingInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserUpdateManyWithoutFollowingInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserWhereUniqueInput_1.UserWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserUpdateManyWithoutFollowingInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserWhereUniqueInput_1.UserWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserUpdateManyWithoutFollowingInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserWhereUniqueInput_1.UserWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserUpdateManyWithoutFollowingInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserWhereUniqueInput_1.UserWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserUpdateManyWithoutFollowingInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserUpdateWithWhereUniqueWithoutFollowingInput_1.UserUpdateWithWhereUniqueWithoutFollowingInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserUpdateManyWithoutFollowingInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserUpdateManyWithWhereWithoutFollowingInput_1.UserUpdateManyWithWhereWithoutFollowingInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserUpdateManyWithoutFollowingInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserScalarWhereInput_1.UserScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserUpdateManyWithoutFollowingInput.prototype, "deleteMany", void 0);
UserUpdateManyWithoutFollowingInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateManyWithoutFollowingInput", {
        isAbstract: true
    })
], UserUpdateManyWithoutFollowingInput);
exports.UserUpdateManyWithoutFollowingInput = UserUpdateManyWithoutFollowingInput;
