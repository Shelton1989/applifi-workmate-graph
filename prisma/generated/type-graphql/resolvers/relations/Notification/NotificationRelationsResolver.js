"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Notification_1 = require("../../../models/Notification");
const User_1 = require("../../../models/User");
const helpers_1 = require("../../../helpers");
let NotificationRelationsResolver = class NotificationRelationsResolver {
    async User(notification, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).notification.findUnique({
            where: {
                id: notification.id,
            },
        }).User({});
    }
    async Actor(notification, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).notification.findUnique({
            where: {
                id: notification.id,
            },
        }).Actor({});
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => User_1.User, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Notification_1.Notification, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], NotificationRelationsResolver.prototype, "User", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => User_1.User, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Notification_1.Notification, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], NotificationRelationsResolver.prototype, "Actor", null);
NotificationRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Notification_1.Notification)
], NotificationRelationsResolver);
exports.NotificationRelationsResolver = NotificationRelationsResolver;
