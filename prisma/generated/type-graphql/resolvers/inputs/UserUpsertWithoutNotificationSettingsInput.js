"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpsertWithoutNotificationSettingsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutNotificationSettingsInput_1 = require("../inputs/UserCreateWithoutNotificationSettingsInput");
const UserUpdateWithoutNotificationSettingsInput_1 = require("../inputs/UserUpdateWithoutNotificationSettingsInput");
let UserUpsertWithoutNotificationSettingsInput = class UserUpsertWithoutNotificationSettingsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutNotificationSettingsInput_1.UserUpdateWithoutNotificationSettingsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutNotificationSettingsInput_1.UserUpdateWithoutNotificationSettingsInput)
], UserUpsertWithoutNotificationSettingsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutNotificationSettingsInput_1.UserCreateWithoutNotificationSettingsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutNotificationSettingsInput_1.UserCreateWithoutNotificationSettingsInput)
], UserUpsertWithoutNotificationSettingsInput.prototype, "create", void 0);
UserUpsertWithoutNotificationSettingsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpsertWithoutNotificationSettingsInput", {
        isAbstract: true
    })
], UserUpsertWithoutNotificationSettingsInput);
exports.UserUpsertWithoutNotificationSettingsInput = UserUpsertWithoutNotificationSettingsInput;
