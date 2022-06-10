"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateOrConnectWithoutAddressesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutAddressesInput_1 = require("../inputs/UserCreateWithoutAddressesInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateOrConnectWithoutAddressesInput = class UserCreateOrConnectWithoutAddressesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateOrConnectWithoutAddressesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutAddressesInput_1.UserCreateWithoutAddressesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutAddressesInput_1.UserCreateWithoutAddressesInput)
], UserCreateOrConnectWithoutAddressesInput.prototype, "create", void 0);
UserCreateOrConnectWithoutAddressesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateOrConnectWithoutAddressesInput", {
        isAbstract: true
    })
], UserCreateOrConnectWithoutAddressesInput);
exports.UserCreateOrConnectWithoutAddressesInput = UserCreateOrConnectWithoutAddressesInput;
