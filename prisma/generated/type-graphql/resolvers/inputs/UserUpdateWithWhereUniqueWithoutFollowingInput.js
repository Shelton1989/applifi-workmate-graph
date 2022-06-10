"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateWithWhereUniqueWithoutFollowingInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserUpdateWithoutFollowingInput_1 = require("../inputs/UserUpdateWithoutFollowingInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateWithWhereUniqueWithoutFollowingInput = class UserUpdateWithWhereUniqueWithoutFollowingInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserUpdateWithWhereUniqueWithoutFollowingInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutFollowingInput_1.UserUpdateWithoutFollowingInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutFollowingInput_1.UserUpdateWithoutFollowingInput)
], UserUpdateWithWhereUniqueWithoutFollowingInput.prototype, "data", void 0);
UserUpdateWithWhereUniqueWithoutFollowingInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateWithWhereUniqueWithoutFollowingInput", {
        isAbstract: true
    })
], UserUpdateWithWhereUniqueWithoutFollowingInput);
exports.UserUpdateWithWhereUniqueWithoutFollowingInput = UserUpdateWithWhereUniqueWithoutFollowingInput;
