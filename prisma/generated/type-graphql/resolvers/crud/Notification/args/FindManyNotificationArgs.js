"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyNotificationArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NotificationOrderByWithRelationInput_1 = require("../../../inputs/NotificationOrderByWithRelationInput");
const NotificationWhereInput_1 = require("../../../inputs/NotificationWhereInput");
const NotificationWhereUniqueInput_1 = require("../../../inputs/NotificationWhereUniqueInput");
const NotificationScalarFieldEnum_1 = require("../../../../enums/NotificationScalarFieldEnum");
let FindManyNotificationArgs = class FindManyNotificationArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationWhereInput_1.NotificationWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NotificationWhereInput_1.NotificationWhereInput)
], FindManyNotificationArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [NotificationOrderByWithRelationInput_1.NotificationOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyNotificationArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationWhereUniqueInput_1.NotificationWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NotificationWhereUniqueInput_1.NotificationWhereUniqueInput)
], FindManyNotificationArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyNotificationArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyNotificationArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [NotificationScalarFieldEnum_1.NotificationScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyNotificationArgs.prototype, "distinct", void 0);
FindManyNotificationArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyNotificationArgs);
exports.FindManyNotificationArgs = FindManyNotificationArgs;
