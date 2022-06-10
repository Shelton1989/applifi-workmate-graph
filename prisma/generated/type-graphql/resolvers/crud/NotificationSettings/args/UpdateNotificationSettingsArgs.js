"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateNotificationSettingsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NotificationSettingsUpdateInput_1 = require("../../../inputs/NotificationSettingsUpdateInput");
const NotificationSettingsWhereUniqueInput_1 = require("../../../inputs/NotificationSettingsWhereUniqueInput");
let UpdateNotificationSettingsArgs = class UpdateNotificationSettingsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationSettingsUpdateInput_1.NotificationSettingsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", NotificationSettingsUpdateInput_1.NotificationSettingsUpdateInput)
], UpdateNotificationSettingsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationSettingsWhereUniqueInput_1.NotificationSettingsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", NotificationSettingsWhereUniqueInput_1.NotificationSettingsWhereUniqueInput)
], UpdateNotificationSettingsArgs.prototype, "where", void 0);
UpdateNotificationSettingsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateNotificationSettingsArgs);
exports.UpdateNotificationSettingsArgs = UpdateNotificationSettingsArgs;
