"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateNestedOneWithoutNotificationSettingsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutNotificationSettingsInput_1 = require("../inputs/UserCreateOrConnectWithoutNotificationSettingsInput");
const UserCreateWithoutNotificationSettingsInput_1 = require("../inputs/UserCreateWithoutNotificationSettingsInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateNestedOneWithoutNotificationSettingsInput = class UserCreateNestedOneWithoutNotificationSettingsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutNotificationSettingsInput_1.UserCreateWithoutNotificationSettingsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutNotificationSettingsInput_1.UserCreateWithoutNotificationSettingsInput)
], UserCreateNestedOneWithoutNotificationSettingsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutNotificationSettingsInput_1.UserCreateOrConnectWithoutNotificationSettingsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutNotificationSettingsInput_1.UserCreateOrConnectWithoutNotificationSettingsInput)
], UserCreateNestedOneWithoutNotificationSettingsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateNestedOneWithoutNotificationSettingsInput.prototype, "connect", void 0);
UserCreateNestedOneWithoutNotificationSettingsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateNestedOneWithoutNotificationSettingsInput", {
        isAbstract: true
    })
], UserCreateNestedOneWithoutNotificationSettingsInput);
exports.UserCreateNestedOneWithoutNotificationSettingsInput = UserCreateNestedOneWithoutNotificationSettingsInput;
