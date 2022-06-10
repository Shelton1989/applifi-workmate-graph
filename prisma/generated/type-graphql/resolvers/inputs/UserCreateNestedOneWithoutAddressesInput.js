"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateNestedOneWithoutAddressesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutAddressesInput_1 = require("../inputs/UserCreateOrConnectWithoutAddressesInput");
const UserCreateWithoutAddressesInput_1 = require("../inputs/UserCreateWithoutAddressesInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateNestedOneWithoutAddressesInput = class UserCreateNestedOneWithoutAddressesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutAddressesInput_1.UserCreateWithoutAddressesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutAddressesInput_1.UserCreateWithoutAddressesInput)
], UserCreateNestedOneWithoutAddressesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutAddressesInput_1.UserCreateOrConnectWithoutAddressesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutAddressesInput_1.UserCreateOrConnectWithoutAddressesInput)
], UserCreateNestedOneWithoutAddressesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateNestedOneWithoutAddressesInput.prototype, "connect", void 0);
UserCreateNestedOneWithoutAddressesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateNestedOneWithoutAddressesInput", {
        isAbstract: true
    })
], UserCreateNestedOneWithoutAddressesInput);
exports.UserCreateNestedOneWithoutAddressesInput = UserCreateNestedOneWithoutAddressesInput;
