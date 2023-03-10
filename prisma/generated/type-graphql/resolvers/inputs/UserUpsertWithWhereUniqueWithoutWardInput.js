"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpsertWithWhereUniqueWithoutWardInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutWardInput_1 = require("../inputs/UserCreateWithoutWardInput");
const UserUpdateWithoutWardInput_1 = require("../inputs/UserUpdateWithoutWardInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpsertWithWhereUniqueWithoutWardInput = class UserUpsertWithWhereUniqueWithoutWardInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserUpsertWithWhereUniqueWithoutWardInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutWardInput_1.UserUpdateWithoutWardInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutWardInput_1.UserUpdateWithoutWardInput)
], UserUpsertWithWhereUniqueWithoutWardInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutWardInput_1.UserCreateWithoutWardInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutWardInput_1.UserCreateWithoutWardInput)
], UserUpsertWithWhereUniqueWithoutWardInput.prototype, "create", void 0);
UserUpsertWithWhereUniqueWithoutWardInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpsertWithWhereUniqueWithoutWardInput", {
        isAbstract: true
    })
], UserUpsertWithWhereUniqueWithoutWardInput);
exports.UserUpsertWithWhereUniqueWithoutWardInput = UserUpsertWithWhereUniqueWithoutWardInput;
