"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueNotificationSettingsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NotificationSettingsWhereUniqueInput_1 = require("../../../inputs/NotificationSettingsWhereUniqueInput");
let FindUniqueNotificationSettingsArgs = class FindUniqueNotificationSettingsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationSettingsWhereUniqueInput_1.NotificationSettingsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", NotificationSettingsWhereUniqueInput_1.NotificationSettingsWhereUniqueInput)
], FindUniqueNotificationSettingsArgs.prototype, "where", void 0);
FindUniqueNotificationSettingsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueNotificationSettingsArgs);
exports.FindUniqueNotificationSettingsArgs = FindUniqueNotificationSettingsArgs;
