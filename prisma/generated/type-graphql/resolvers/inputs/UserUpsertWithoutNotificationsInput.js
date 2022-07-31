"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpsertWithoutNotificationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutNotificationsInput_1 = require("../inputs/UserCreateWithoutNotificationsInput");
const UserUpdateWithoutNotificationsInput_1 = require("../inputs/UserUpdateWithoutNotificationsInput");
let UserUpsertWithoutNotificationsInput = class UserUpsertWithoutNotificationsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutNotificationsInput_1.UserUpdateWithoutNotificationsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutNotificationsInput_1.UserUpdateWithoutNotificationsInput)
], UserUpsertWithoutNotificationsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutNotificationsInput_1.UserCreateWithoutNotificationsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutNotificationsInput_1.UserCreateWithoutNotificationsInput)
], UserUpsertWithoutNotificationsInput.prototype, "create", void 0);
UserUpsertWithoutNotificationsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpsertWithoutNotificationsInput", {
        isAbstract: true
    })
], UserUpsertWithoutNotificationsInput);
exports.UserUpsertWithoutNotificationsInput = UserUpsertWithoutNotificationsInput;
