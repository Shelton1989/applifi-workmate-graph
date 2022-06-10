"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateNotificationSettings = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NotificationSettingsCountAggregate_1 = require("../outputs/NotificationSettingsCountAggregate");
const NotificationSettingsMaxAggregate_1 = require("../outputs/NotificationSettingsMaxAggregate");
const NotificationSettingsMinAggregate_1 = require("../outputs/NotificationSettingsMinAggregate");
let AggregateNotificationSettings = class AggregateNotificationSettings {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationSettingsCountAggregate_1.NotificationSettingsCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NotificationSettingsCountAggregate_1.NotificationSettingsCountAggregate)
], AggregateNotificationSettings.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationSettingsMinAggregate_1.NotificationSettingsMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NotificationSettingsMinAggregate_1.NotificationSettingsMinAggregate)
], AggregateNotificationSettings.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationSettingsMaxAggregate_1.NotificationSettingsMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NotificationSettingsMaxAggregate_1.NotificationSettingsMaxAggregate)
], AggregateNotificationSettings.prototype, "_max", void 0);
AggregateNotificationSettings = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateNotificationSettings", {
        isAbstract: true
    })
], AggregateNotificationSettings);
exports.AggregateNotificationSettings = AggregateNotificationSettings;
