"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateOneWithoutAddressesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutAddressesInput_1 = require("../inputs/UserCreateOrConnectWithoutAddressesInput");
const UserCreateWithoutAddressesInput_1 = require("../inputs/UserCreateWithoutAddressesInput");
const UserUpdateWithoutAddressesInput_1 = require("../inputs/UserUpdateWithoutAddressesInput");
const UserUpsertWithoutAddressesInput_1 = require("../inputs/UserUpsertWithoutAddressesInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateOneWithoutAddressesInput = class UserUpdateOneWithoutAddressesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutAddressesInput_1.UserCreateWithoutAddressesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutAddressesInput_1.UserCreateWithoutAddressesInput)
], UserUpdateOneWithoutAddressesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutAddressesInput_1.UserCreateOrConnectWithoutAddressesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutAddressesInput_1.UserCreateOrConnectWithoutAddressesInput)
], UserUpdateOneWithoutAddressesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpsertWithoutAddressesInput_1.UserUpsertWithoutAddressesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpsertWithoutAddressesInput_1.UserUpsertWithoutAddressesInput)
], UserUpdateOneWithoutAddressesInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], UserUpdateOneWithoutAddressesInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], UserUpdateOneWithoutAddressesInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserUpdateOneWithoutAddressesInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutAddressesInput_1.UserUpdateWithoutAddressesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutAddressesInput_1.UserUpdateWithoutAddressesInput)
], UserUpdateOneWithoutAddressesInput.prototype, "update", void 0);
UserUpdateOneWithoutAddressesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateOneWithoutAddressesInput", {
        isAbstract: true
    })
], UserUpdateOneWithoutAddressesInput);
exports.UserUpdateOneWithoutAddressesInput = UserUpdateOneWithoutAddressesInput;
