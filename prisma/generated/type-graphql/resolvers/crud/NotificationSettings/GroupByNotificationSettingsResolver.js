"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByNotificationSettingsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupByNotificationSettingsArgs_1 = require("./args/GroupByNotificationSettingsArgs");
const NotificationSettings_1 = require("../../../models/NotificationSettings");
const NotificationSettingsGroupBy_1 = require("../../outputs/NotificationSettingsGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByNotificationSettingsResolver = class GroupByNotificationSettingsResolver {
    async groupByNotificationSettings(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).notificationSettings.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [NotificationSettingsGroupBy_1.NotificationSettingsGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByNotificationSettingsArgs_1.GroupByNotificationSettingsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByNotificationSettingsResolver.prototype, "groupByNotificationSettings", null);
GroupByNotificationSettingsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => NotificationSettings_1.NotificationSettings)
], GroupByNotificationSettingsResolver);
exports.GroupByNotificationSettingsResolver = GroupByNotificationSettingsResolver;
