"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertNotificationSettingsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NotificationSettingsCreateInput_1 = require("../../../inputs/NotificationSettingsCreateInput");
const NotificationSettingsUpdateInput_1 = require("../../../inputs/NotificationSettingsUpdateInput");
const NotificationSettingsWhereUniqueInput_1 = require("../../../inputs/NotificationSettingsWhereUniqueInput");
let UpsertNotificationSettingsArgs = class UpsertNotificationSettingsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationSettingsWhereUniqueInput_1.NotificationSettingsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", NotificationSettingsWhereUniqueInput_1.NotificationSettingsWhereUniqueInput)
], UpsertNotificationSettingsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationSettingsCreateInput_1.NotificationSettingsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", NotificationSettingsCreateInput_1.NotificationSettingsCreateInput)
], UpsertNotificationSettingsArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationSettingsUpdateInput_1.NotificationSettingsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", NotificationSettingsUpdateInput_1.NotificationSettingsUpdateInput)
], UpsertNotificationSettingsArgs.prototype, "update", void 0);
UpsertNotificationSettingsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertNotificationSettingsArgs);
exports.UpsertNotificationSettingsArgs = UpsertNotificationSettingsArgs;
