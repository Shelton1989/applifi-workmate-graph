"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateWithWhereUniqueWithoutFollowersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserUpdateWithoutFollowersInput_1 = require("../inputs/UserUpdateWithoutFollowersInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateWithWhereUniqueWithoutFollowersInput = class UserUpdateWithWhereUniqueWithoutFollowersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserUpdateWithWhereUniqueWithoutFollowersInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutFollowersInput_1.UserUpdateWithoutFollowersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutFollowersInput_1.UserUpdateWithoutFollowersInput)
], UserUpdateWithWhereUniqueWithoutFollowersInput.prototype, "data", void 0);
UserUpdateWithWhereUniqueWithoutFollowersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateWithWhereUniqueWithoutFollowersInput", {
        isAbstract: true
    })
], UserUpdateWithWhereUniqueWithoutFollowersInput);
exports.UserUpdateWithWhereUniqueWithoutFollowersInput = UserUpdateWithWhereUniqueWithoutFollowersInput;
