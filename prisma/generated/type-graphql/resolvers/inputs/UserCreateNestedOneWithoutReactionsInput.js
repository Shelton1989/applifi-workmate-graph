"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateNestedOneWithoutReactionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutReactionsInput_1 = require("../inputs/UserCreateOrConnectWithoutReactionsInput");
const UserCreateWithoutReactionsInput_1 = require("../inputs/UserCreateWithoutReactionsInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateNestedOneWithoutReactionsInput = class UserCreateNestedOneWithoutReactionsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutReactionsInput_1.UserCreateWithoutReactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutReactionsInput_1.UserCreateWithoutReactionsInput)
], UserCreateNestedOneWithoutReactionsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutReactionsInput_1.UserCreateOrConnectWithoutReactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutReactionsInput_1.UserCreateOrConnectWithoutReactionsInput)
], UserCreateNestedOneWithoutReactionsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateNestedOneWithoutReactionsInput.prototype, "connect", void 0);
UserCreateNestedOneWithoutReactionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateNestedOneWithoutReactionsInput", {
        isAbstract: true
    })
], UserCreateNestedOneWithoutReactionsInput);
exports.UserCreateNestedOneWithoutReactionsInput = UserCreateNestedOneWithoutReactionsInput;
