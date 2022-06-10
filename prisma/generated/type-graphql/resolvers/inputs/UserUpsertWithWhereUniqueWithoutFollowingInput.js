"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpsertWithWhereUniqueWithoutFollowingInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutFollowingInput_1 = require("../inputs/UserCreateWithoutFollowingInput");
const UserUpdateWithoutFollowingInput_1 = require("../inputs/UserUpdateWithoutFollowingInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpsertWithWhereUniqueWithoutFollowingInput = class UserUpsertWithWhereUniqueWithoutFollowingInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserUpsertWithWhereUniqueWithoutFollowingInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutFollowingInput_1.UserUpdateWithoutFollowingInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutFollowingInput_1.UserUpdateWithoutFollowingInput)
], UserUpsertWithWhereUniqueWithoutFollowingInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutFollowingInput_1.UserCreateWithoutFollowingInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutFollowingInput_1.UserCreateWithoutFollowingInput)
], UserUpsertWithWhereUniqueWithoutFollowingInput.prototype, "create", void 0);
UserUpsertWithWhereUniqueWithoutFollowingInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpsertWithWhereUniqueWithoutFollowingInput", {
        isAbstract: true
    })
], UserUpsertWithWhereUniqueWithoutFollowingInput);
exports.UserUpsertWithWhereUniqueWithoutFollowingInput = UserUpsertWithWhereUniqueWithoutFollowingInput;
