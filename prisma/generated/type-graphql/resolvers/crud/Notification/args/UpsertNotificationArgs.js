"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertNotificationArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NotificationCreateInput_1 = require("../../../inputs/NotificationCreateInput");
const NotificationUpdateInput_1 = require("../../../inputs/NotificationUpdateInput");
const NotificationWhereUniqueInput_1 = require("../../../inputs/NotificationWhereUniqueInput");
let UpsertNotificationArgs = class UpsertNotificationArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationWhereUniqueInput_1.NotificationWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", NotificationWhereUniqueInput_1.NotificationWhereUniqueInput)
], UpsertNotificationArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationCreateInput_1.NotificationCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", NotificationCreateInput_1.NotificationCreateInput)
], UpsertNotificationArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationUpdateInput_1.NotificationUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", NotificationUpdateInput_1.NotificationUpdateInput)
], UpsertNotificationArgs.prototype, "update", void 0);
UpsertNotificationArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertNotificationArgs);
exports.UpsertNotificationArgs = UpsertNotificationArgs;
