"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateOrConnectWithoutRepliesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutRepliesInput_1 = require("../inputs/UserCreateWithoutRepliesInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateOrConnectWithoutRepliesInput = class UserCreateOrConnectWithoutRepliesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateOrConnectWithoutRepliesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutRepliesInput_1.UserCreateWithoutRepliesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutRepliesInput_1.UserCreateWithoutRepliesInput)
], UserCreateOrConnectWithoutRepliesInput.prototype, "create", void 0);
UserCreateOrConnectWithoutRepliesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateOrConnectWithoutRepliesInput", {
        isAbstract: true
    })
], UserCreateOrConnectWithoutRepliesInput);
exports.UserCreateOrConnectWithoutRepliesInput = UserCreateOrConnectWithoutRepliesInput;
