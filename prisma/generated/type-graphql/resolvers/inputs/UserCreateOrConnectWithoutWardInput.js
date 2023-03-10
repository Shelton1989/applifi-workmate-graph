"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateOrConnectWithoutWardInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutWardInput_1 = require("../inputs/UserCreateWithoutWardInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateOrConnectWithoutWardInput = class UserCreateOrConnectWithoutWardInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateOrConnectWithoutWardInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutWardInput_1.UserCreateWithoutWardInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutWardInput_1.UserCreateWithoutWardInput)
], UserCreateOrConnectWithoutWardInput.prototype, "create", void 0);
UserCreateOrConnectWithoutWardInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateOrConnectWithoutWardInput", {
        isAbstract: true
    })
], UserCreateOrConnectWithoutWardInput);
exports.UserCreateOrConnectWithoutWardInput = UserCreateOrConnectWithoutWardInput;
