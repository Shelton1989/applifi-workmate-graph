"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteNotificationSettingsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NotificationSettingsWhereUniqueInput_1 = require("../../../inputs/NotificationSettingsWhereUniqueInput");
let DeleteNotificationSettingsArgs = class DeleteNotificationSettingsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationSettingsWhereUniqueInput_1.NotificationSettingsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", NotificationSettingsWhereUniqueInput_1.NotificationSettingsWhereUniqueInput)
], DeleteNotificationSettingsArgs.prototype, "where", void 0);
DeleteNotificationSettingsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteNotificationSettingsArgs);
exports.DeleteNotificationSettingsArgs = DeleteNotificationSettingsArgs;
