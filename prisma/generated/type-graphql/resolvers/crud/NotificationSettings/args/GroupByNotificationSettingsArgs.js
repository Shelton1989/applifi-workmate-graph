"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByNotificationSettingsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NotificationSettingsOrderByWithAggregationInput_1 = require("../../../inputs/NotificationSettingsOrderByWithAggregationInput");
const NotificationSettingsScalarWhereWithAggregatesInput_1 = require("../../../inputs/NotificationSettingsScalarWhereWithAggregatesInput");
const NotificationSettingsWhereInput_1 = require("../../../inputs/NotificationSettingsWhereInput");
const NotificationSettingsScalarFieldEnum_1 = require("../../../../enums/NotificationSettingsScalarFieldEnum");
let GroupByNotificationSettingsArgs = class GroupByNotificationSettingsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationSettingsWhereInput_1.NotificationSettingsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NotificationSettingsWhereInput_1.NotificationSettingsWhereInput)
], GroupByNotificationSettingsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [NotificationSettingsOrderByWithAggregationInput_1.NotificationSettingsOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByNotificationSettingsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [NotificationSettingsScalarFieldEnum_1.NotificationSettingsScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByNotificationSettingsArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationSettingsScalarWhereWithAggregatesInput_1.NotificationSettingsScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NotificationSettingsScalarWhereWithAggregatesInput_1.NotificationSettingsScalarWhereWithAggregatesInput)
], GroupByNotificationSettingsArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByNotificationSettingsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByNotificationSettingsArgs.prototype, "skip", void 0);
GroupByNotificationSettingsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByNotificationSettingsArgs);
exports.GroupByNotificationSettingsArgs = GroupByNotificationSettingsArgs;
