"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyNotificationSettingsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NotificationSettingsOrderByWithRelationInput_1 = require("../../../inputs/NotificationSettingsOrderByWithRelationInput");
const NotificationSettingsWhereInput_1 = require("../../../inputs/NotificationSettingsWhereInput");
const NotificationSettingsWhereUniqueInput_1 = require("../../../inputs/NotificationSettingsWhereUniqueInput");
const NotificationSettingsScalarFieldEnum_1 = require("../../../../enums/NotificationSettingsScalarFieldEnum");
let FindManyNotificationSettingsArgs = class FindManyNotificationSettingsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationSettingsWhereInput_1.NotificationSettingsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NotificationSettingsWhereInput_1.NotificationSettingsWhereInput)
], FindManyNotificationSettingsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [NotificationSettingsOrderByWithRelationInput_1.NotificationSettingsOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyNotificationSettingsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationSettingsWhereUniqueInput_1.NotificationSettingsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NotificationSettingsWhereUniqueInput_1.NotificationSettingsWhereUniqueInput)
], FindManyNotificationSettingsArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyNotificationSettingsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyNotificationSettingsArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [NotificationSettingsScalarFieldEnum_1.NotificationSettingsScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyNotificationSettingsArgs.prototype, "distinct", void 0);
FindManyNotificationSettingsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyNotificationSettingsArgs);
exports.FindManyNotificationSettingsArgs = FindManyNotificationSettingsArgs;
