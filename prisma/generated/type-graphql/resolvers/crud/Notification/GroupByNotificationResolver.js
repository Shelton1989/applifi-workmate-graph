"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByNotificationResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupByNotificationArgs_1 = require("./args/GroupByNotificationArgs");
const Notification_1 = require("../../../models/Notification");
const NotificationGroupBy_1 = require("../../outputs/NotificationGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByNotificationResolver = class GroupByNotificationResolver {
    async groupByNotification(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).notification.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [NotificationGroupBy_1.NotificationGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByNotificationArgs_1.GroupByNotificationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByNotificationResolver.prototype, "groupByNotification", null);
GroupByNotificationResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Notification_1.Notification)
], GroupByNotificationResolver);
exports.GroupByNotificationResolver = GroupByNotificationResolver;
