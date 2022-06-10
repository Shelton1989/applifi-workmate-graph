"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyNotificationSettingsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NotificationSettingsUpdateManyMutationInput_1 = require("../../../inputs/NotificationSettingsUpdateManyMutationInput");
const NotificationSettingsWhereInput_1 = require("../../../inputs/NotificationSettingsWhereInput");
let UpdateManyNotificationSettingsArgs = class UpdateManyNotificationSettingsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationSettingsUpdateManyMutationInput_1.NotificationSettingsUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", NotificationSettingsUpdateManyMutationInput_1.NotificationSettingsUpdateManyMutationInput)
], UpdateManyNotificationSettingsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationSettingsWhereInput_1.NotificationSettingsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NotificationSettingsWhereInput_1.NotificationSettingsWhereInput)
], UpdateManyNotificationSettingsArgs.prototype, "where", void 0);
UpdateManyNotificationSettingsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyNotificationSettingsArgs);
exports.UpdateManyNotificationSettingsArgs = UpdateManyNotificationSettingsArgs;
