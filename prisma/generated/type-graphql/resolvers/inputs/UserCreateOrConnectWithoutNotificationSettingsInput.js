"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateOrConnectWithoutNotificationSettingsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutNotificationSettingsInput_1 = require("../inputs/UserCreateWithoutNotificationSettingsInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateOrConnectWithoutNotificationSettingsInput = class UserCreateOrConnectWithoutNotificationSettingsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateOrConnectWithoutNotificationSettingsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutNotificationSettingsInput_1.UserCreateWithoutNotificationSettingsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutNotificationSettingsInput_1.UserCreateWithoutNotificationSettingsInput)
], UserCreateOrConnectWithoutNotificationSettingsInput.prototype, "create", void 0);
UserCreateOrConnectWithoutNotificationSettingsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateOrConnectWithoutNotificationSettingsInput", {
        isAbstract: true
    })
], UserCreateOrConnectWithoutNotificationSettingsInput);
exports.UserCreateOrConnectWithoutNotificationSettingsInput = UserCreateOrConnectWithoutNotificationSettingsInput;
