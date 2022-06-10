"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateOneWithoutNotificationSettingsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutNotificationSettingsInput_1 = require("../inputs/UserCreateOrConnectWithoutNotificationSettingsInput");
const UserCreateWithoutNotificationSettingsInput_1 = require("../inputs/UserCreateWithoutNotificationSettingsInput");
const UserUpdateWithoutNotificationSettingsInput_1 = require("../inputs/UserUpdateWithoutNotificationSettingsInput");
const UserUpsertWithoutNotificationSettingsInput_1 = require("../inputs/UserUpsertWithoutNotificationSettingsInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateOneWithoutNotificationSettingsInput = class UserUpdateOneWithoutNotificationSettingsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutNotificationSettingsInput_1.UserCreateWithoutNotificationSettingsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutNotificationSettingsInput_1.UserCreateWithoutNotificationSettingsInput)
], UserUpdateOneWithoutNotificationSettingsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutNotificationSettingsInput_1.UserCreateOrConnectWithoutNotificationSettingsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutNotificationSettingsInput_1.UserCreateOrConnectWithoutNotificationSettingsInput)
], UserUpdateOneWithoutNotificationSettingsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpsertWithoutNotificationSettingsInput_1.UserUpsertWithoutNotificationSettingsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpsertWithoutNotificationSettingsInput_1.UserUpsertWithoutNotificationSettingsInput)
], UserUpdateOneWithoutNotificationSettingsInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], UserUpdateOneWithoutNotificationSettingsInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], UserUpdateOneWithoutNotificationSettingsInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserUpdateOneWithoutNotificationSettingsInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutNotificationSettingsInput_1.UserUpdateWithoutNotificationSettingsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutNotificationSettingsInput_1.UserUpdateWithoutNotificationSettingsInput)
], UserUpdateOneWithoutNotificationSettingsInput.prototype, "update", void 0);
UserUpdateOneWithoutNotificationSettingsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateOneWithoutNotificationSettingsInput", {
        isAbstract: true
    })
], UserUpdateOneWithoutNotificationSettingsInput);
exports.UserUpdateOneWithoutNotificationSettingsInput = UserUpdateOneWithoutNotificationSettingsInput;
