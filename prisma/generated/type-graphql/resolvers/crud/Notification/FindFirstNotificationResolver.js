"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstNotificationResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindFirstNotificationArgs_1 = require("./args/FindFirstNotificationArgs");
const Notification_1 = require("../../../models/Notification");
const helpers_1 = require("../../../helpers");
let FindFirstNotificationResolver = class FindFirstNotificationResolver {
    async findFirstNotification(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).notification.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Notification_1.Notification, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstNotificationArgs_1.FindFirstNotificationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstNotificationResolver.prototype, "findFirstNotification", null);
FindFirstNotificationResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Notification_1.Notification)
], FindFirstNotificationResolver);
exports.FindFirstNotificationResolver = FindFirstNotificationResolver;
