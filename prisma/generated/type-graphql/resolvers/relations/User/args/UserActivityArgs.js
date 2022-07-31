"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserActivityArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NotificationOrderByWithRelationInput_1 = require("../../../inputs/NotificationOrderByWithRelationInput");
const NotificationWhereInput_1 = require("../../../inputs/NotificationWhereInput");
const NotificationWhereUniqueInput_1 = require("../../../inputs/NotificationWhereUniqueInput");
const NotificationScalarFieldEnum_1 = require("../../../../enums/NotificationScalarFieldEnum");
let UserActivityArgs = class UserActivityArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationWhereInput_1.NotificationWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NotificationWhereInput_1.NotificationWhereInput)
], UserActivityArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [NotificationOrderByWithRelationInput_1.NotificationOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserActivityArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationWhereUniqueInput_1.NotificationWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NotificationWhereUniqueInput_1.NotificationWhereUniqueInput)
], UserActivityArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], UserActivityArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], UserActivityArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [NotificationScalarFieldEnum_1.NotificationScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserActivityArgs.prototype, "distinct", void 0);
UserActivityArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UserActivityArgs);
exports.UserActivityArgs = UserActivityArgs;
