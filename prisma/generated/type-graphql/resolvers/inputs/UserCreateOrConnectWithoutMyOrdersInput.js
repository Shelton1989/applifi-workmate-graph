"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateOrConnectWithoutMyOrdersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutMyOrdersInput_1 = require("../inputs/UserCreateWithoutMyOrdersInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateOrConnectWithoutMyOrdersInput = class UserCreateOrConnectWithoutMyOrdersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateOrConnectWithoutMyOrdersInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutMyOrdersInput_1.UserCreateWithoutMyOrdersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutMyOrdersInput_1.UserCreateWithoutMyOrdersInput)
], UserCreateOrConnectWithoutMyOrdersInput.prototype, "create", void 0);
UserCreateOrConnectWithoutMyOrdersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateOrConnectWithoutMyOrdersInput", {
        isAbstract: true
    })
], UserCreateOrConnectWithoutMyOrdersInput);
exports.UserCreateOrConnectWithoutMyOrdersInput = UserCreateOrConnectWithoutMyOrdersInput;
