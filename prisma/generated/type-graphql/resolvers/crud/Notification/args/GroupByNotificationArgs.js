"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByNotificationArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NotificationOrderByWithAggregationInput_1 = require("../../../inputs/NotificationOrderByWithAggregationInput");
const NotificationScalarWhereWithAggregatesInput_1 = require("../../../inputs/NotificationScalarWhereWithAggregatesInput");
const NotificationWhereInput_1 = require("../../../inputs/NotificationWhereInput");
const NotificationScalarFieldEnum_1 = require("../../../../enums/NotificationScalarFieldEnum");
let GroupByNotificationArgs = class GroupByNotificationArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationWhereInput_1.NotificationWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NotificationWhereInput_1.NotificationWhereInput)
], GroupByNotificationArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [NotificationOrderByWithAggregationInput_1.NotificationOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByNotificationArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [NotificationScalarFieldEnum_1.NotificationScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByNotificationArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationScalarWhereWithAggregatesInput_1.NotificationScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NotificationScalarWhereWithAggregatesInput_1.NotificationScalarWhereWithAggregatesInput)
], GroupByNotificationArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByNotificationArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByNotificationArgs.prototype, "skip", void 0);
GroupByNotificationArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByNotificationArgs);
exports.GroupByNotificationArgs = GroupByNotificationArgs;
