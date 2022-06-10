"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateOrConnectWithoutFollowingInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutFollowingInput_1 = require("../inputs/UserCreateWithoutFollowingInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateOrConnectWithoutFollowingInput = class UserCreateOrConnectWithoutFollowingInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateOrConnectWithoutFollowingInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutFollowingInput_1.UserCreateWithoutFollowingInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutFollowingInput_1.UserCreateWithoutFollowingInput)
], UserCreateOrConnectWithoutFollowingInput.prototype, "create", void 0);
UserCreateOrConnectWithoutFollowingInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateOrConnectWithoutFollowingInput", {
        isAbstract: true
    })
], UserCreateOrConnectWithoutFollowingInput);
exports.UserCreateOrConnectWithoutFollowingInput = UserCreateOrConnectWithoutFollowingInput;
