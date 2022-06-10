"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateNotificationSettingsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NotificationSettingsCreateInput_1 = require("../../../inputs/NotificationSettingsCreateInput");
let CreateNotificationSettingsArgs = class CreateNotificationSettingsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationSettingsCreateInput_1.NotificationSettingsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", NotificationSettingsCreateInput_1.NotificationSettingsCreateInput)
], CreateNotificationSettingsArgs.prototype, "data", void 0);
CreateNotificationSettingsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateNotificationSettingsArgs);
exports.CreateNotificationSettingsArgs = CreateNotificationSettingsArgs;
