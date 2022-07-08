"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpsertWithoutMyOrdersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutMyOrdersInput_1 = require("../inputs/UserCreateWithoutMyOrdersInput");
const UserUpdateWithoutMyOrdersInput_1 = require("../inputs/UserUpdateWithoutMyOrdersInput");
let UserUpsertWithoutMyOrdersInput = class UserUpsertWithoutMyOrdersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutMyOrdersInput_1.UserUpdateWithoutMyOrdersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutMyOrdersInput_1.UserUpdateWithoutMyOrdersInput)
], UserUpsertWithoutMyOrdersInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutMyOrdersInput_1.UserCreateWithoutMyOrdersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutMyOrdersInput_1.UserCreateWithoutMyOrdersInput)
], UserUpsertWithoutMyOrdersInput.prototype, "create", void 0);
UserUpsertWithoutMyOrdersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpsertWithoutMyOrdersInput", {
        isAbstract: true
    })
], UserUpsertWithoutMyOrdersInput);
exports.UserUpsertWithoutMyOrdersInput = UserUpsertWithoutMyOrdersInput;
