"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyNotificationSettingsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NotificationSettingsWhereInput_1 = require("../../../inputs/NotificationSettingsWhereInput");
let DeleteManyNotificationSettingsArgs = class DeleteManyNotificationSettingsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationSettingsWhereInput_1.NotificationSettingsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NotificationSettingsWhereInput_1.NotificationSettingsWhereInput)
], DeleteManyNotificationSettingsArgs.prototype, "where", void 0);
DeleteManyNotificationSettingsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyNotificationSettingsArgs);
exports.DeleteManyNotificationSettingsArgs = DeleteManyNotificationSettingsArgs;
