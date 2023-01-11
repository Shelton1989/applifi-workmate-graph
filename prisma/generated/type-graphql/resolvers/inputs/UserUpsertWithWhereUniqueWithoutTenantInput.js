"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpsertWithWhereUniqueWithoutTenantInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutTenantInput_1 = require("../inputs/UserCreateWithoutTenantInput");
const UserUpdateWithoutTenantInput_1 = require("../inputs/UserUpdateWithoutTenantInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpsertWithWhereUniqueWithoutTenantInput = class UserUpsertWithWhereUniqueWithoutTenantInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserUpsertWithWhereUniqueWithoutTenantInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutTenantInput_1.UserUpdateWithoutTenantInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutTenantInput_1.UserUpdateWithoutTenantInput)
], UserUpsertWithWhereUniqueWithoutTenantInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutTenantInput_1.UserCreateWithoutTenantInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutTenantInput_1.UserCreateWithoutTenantInput)
], UserUpsertWithWhereUniqueWithoutTenantInput.prototype, "create", void 0);
UserUpsertWithWhereUniqueWithoutTenantInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpsertWithWhereUniqueWithoutTenantInput", {
        isAbstract: true
    })
], UserUpsertWithWhereUniqueWithoutTenantInput);
exports.UserUpsertWithWhereUniqueWithoutTenantInput = UserUpsertWithWhereUniqueWithoutTenantInput;
