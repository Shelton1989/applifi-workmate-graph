"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateNotificationResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateNotificationArgs_1 = require("./args/AggregateNotificationArgs");
const Notification_1 = require("../../../models/Notification");
const AggregateNotification_1 = require("../../outputs/AggregateNotification");
const helpers_1 = require("../../../helpers");
let AggregateNotificationResolver = class AggregateNotificationResolver {
    async aggregateNotification(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).notification.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateNotification_1.AggregateNotification, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateNotificationArgs_1.AggregateNotificationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateNotificationResolver.prototype, "aggregateNotification", null);
AggregateNotificationResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Notification_1.Notification)
], AggregateNotificationResolver);
exports.AggregateNotificationResolver = AggregateNotificationResolver;
