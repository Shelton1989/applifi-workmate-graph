"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyNotificationSettingsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindManyNotificationSettingsArgs_1 = require("./args/FindManyNotificationSettingsArgs");
const NotificationSettings_1 = require("../../../models/NotificationSettings");
const helpers_1 = require("../../../helpers");
let FindManyNotificationSettingsResolver = class FindManyNotificationSettingsResolver {
    async findManyNotificationSettings(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).notificationSettings.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [NotificationSettings_1.NotificationSettings], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyNotificationSettingsArgs_1.FindManyNotificationSettingsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyNotificationSettingsResolver.prototype, "findManyNotificationSettings", null);
FindManyNotificationSettingsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => NotificationSettings_1.NotificationSettings)
], FindManyNotificationSettingsResolver);
exports.FindManyNotificationSettingsResolver = FindManyNotificationSettingsResolver;
