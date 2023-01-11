"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateWithWhereUniqueWithoutTenantInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserUpdateWithoutTenantInput_1 = require("../inputs/UserUpdateWithoutTenantInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateWithWhereUniqueWithoutTenantInput = class UserUpdateWithWhereUniqueWithoutTenantInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserUpdateWithWhereUniqueWithoutTenantInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutTenantInput_1.UserUpdateWithoutTenantInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutTenantInput_1.UserUpdateWithoutTenantInput)
], UserUpdateWithWhereUniqueWithoutTenantInput.prototype, "data", void 0);
UserUpdateWithWhereUniqueWithoutTenantInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateWithWhereUniqueWithoutTenantInput", {
        isAbstract: true
    })
], UserUpdateWithWhereUniqueWithoutTenantInput);
exports.UserUpdateWithWhereUniqueWithoutTenantInput = UserUpdateWithWhereUniqueWithoutTenantInput;
