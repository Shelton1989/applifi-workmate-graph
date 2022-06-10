"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpsertWithoutAddressesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutAddressesInput_1 = require("../inputs/UserCreateWithoutAddressesInput");
const UserUpdateWithoutAddressesInput_1 = require("../inputs/UserUpdateWithoutAddressesInput");
let UserUpsertWithoutAddressesInput = class UserUpsertWithoutAddressesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutAddressesInput_1.UserUpdateWithoutAddressesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutAddressesInput_1.UserUpdateWithoutAddressesInput)
], UserUpsertWithoutAddressesInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutAddressesInput_1.UserCreateWithoutAddressesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutAddressesInput_1.UserCreateWithoutAddressesInput)
], UserUpsertWithoutAddressesInput.prototype, "create", void 0);
UserUpsertWithoutAddressesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpsertWithoutAddressesInput", {
        isAbstract: true
    })
], UserUpsertWithoutAddressesInput);
exports.UserUpsertWithoutAddressesInput = UserUpsertWithoutAddressesInput;
