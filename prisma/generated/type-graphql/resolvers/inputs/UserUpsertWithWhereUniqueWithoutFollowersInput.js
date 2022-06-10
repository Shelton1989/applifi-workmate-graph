"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpsertWithWhereUniqueWithoutFollowersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutFollowersInput_1 = require("../inputs/UserCreateWithoutFollowersInput");
const UserUpdateWithoutFollowersInput_1 = require("../inputs/UserUpdateWithoutFollowersInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpsertWithWhereUniqueWithoutFollowersInput = class UserUpsertWithWhereUniqueWithoutFollowersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserUpsertWithWhereUniqueWithoutFollowersInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutFollowersInput_1.UserUpdateWithoutFollowersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutFollowersInput_1.UserUpdateWithoutFollowersInput)
], UserUpsertWithWhereUniqueWithoutFollowersInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutFollowersInput_1.UserCreateWithoutFollowersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutFollowersInput_1.UserCreateWithoutFollowersInput)
], UserUpsertWithWhereUniqueWithoutFollowersInput.prototype, "create", void 0);
UserUpsertWithWhereUniqueWithoutFollowersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpsertWithWhereUniqueWithoutFollowersInput", {
        isAbstract: true
    })
], UserUpsertWithWhereUniqueWithoutFollowersInput);
exports.UserUpsertWithWhereUniqueWithoutFollowersInput = UserUpsertWithWhereUniqueWithoutFollowersInput;
