"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstNotificationArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NotificationOrderByWithRelationInput_1 = require("../../../inputs/NotificationOrderByWithRelationInput");
const NotificationWhereInput_1 = require("../../../inputs/NotificationWhereInput");
const NotificationWhereUniqueInput_1 = require("../../../inputs/NotificationWhereUniqueInput");
const NotificationScalarFieldEnum_1 = require("../../../../enums/NotificationScalarFieldEnum");
let FindFirstNotificationArgs = class FindFirstNotificationArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationWhereInput_1.NotificationWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NotificationWhereInput_1.NotificationWhereInput)
], FindFirstNotificationArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [NotificationOrderByWithRelationInput_1.NotificationOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstNotificationArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationWhereUniqueInput_1.NotificationWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NotificationWhereUniqueInput_1.NotificationWhereUniqueInput)
], FindFirstNotificationArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstNotificationArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstNotificationArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [NotificationScalarFieldEnum_1.NotificationScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstNotificationArgs.prototype, "distinct", void 0);
FindFirstNotificationArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstNotificationArgs);
exports.FindFirstNotificationArgs = FindFirstNotificationArgs;
