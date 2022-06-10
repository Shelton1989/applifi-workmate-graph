"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateOrConnectWithoutReactionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutReactionsInput_1 = require("../inputs/UserCreateWithoutReactionsInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateOrConnectWithoutReactionsInput = class UserCreateOrConnectWithoutReactionsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateOrConnectWithoutReactionsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutReactionsInput_1.UserCreateWithoutReactionsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutReactionsInput_1.UserCreateWithoutReactionsInput)
], UserCreateOrConnectWithoutReactionsInput.prototype, "create", void 0);
UserCreateOrConnectWithoutReactionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateOrConnectWithoutReactionsInput", {
        isAbstract: true
    })
], UserCreateOrConnectWithoutReactionsInput);
exports.UserCreateOrConnectWithoutReactionsInput = UserCreateOrConnectWithoutReactionsInput;
