"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyNotificationSettingsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NotificationSettingsCreateManyInput_1 = require("../../../inputs/NotificationSettingsCreateManyInput");
let CreateManyNotificationSettingsArgs = class CreateManyNotificationSettingsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [NotificationSettingsCreateManyInput_1.NotificationSettingsCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyNotificationSettingsArgs.prototype, "data", void 0);
CreateManyNotificationSettingsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyNotificationSettingsArgs);
exports.CreateManyNotificationSettingsArgs = CreateManyNotificationSettingsArgs;
