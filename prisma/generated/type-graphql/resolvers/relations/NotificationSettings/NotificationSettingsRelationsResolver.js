"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationSettingsRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NotificationSettings_1 = require("../../../models/NotificationSettings");
const User_1 = require("../../../models/User");
const helpers_1 = require("../../../helpers");
let NotificationSettingsRelationsResolver = class NotificationSettingsRelationsResolver {
    async User(notificationSettings, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).notificationSettings.findUnique({
            where: {
                id: notificationSettings.id,
            },
        }).User({});
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => User_1.User, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [NotificationSettings_1.NotificationSettings, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], NotificationSettingsRelationsResolver.prototype, "User", null);
NotificationSettingsRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => NotificationSettings_1.NotificationSettings)
], NotificationSettingsRelationsResolver);
exports.NotificationSettingsRelationsResolver = NotificationSettingsRelationsResolver;
