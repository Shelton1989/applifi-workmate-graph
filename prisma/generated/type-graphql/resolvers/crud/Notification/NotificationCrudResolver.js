"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateNotificationArgs_1 = require("./args/AggregateNotificationArgs");
const CreateManyNotificationArgs_1 = require("./args/CreateManyNotificationArgs");
const CreateNotificationArgs_1 = require("./args/CreateNotificationArgs");
const DeleteManyNotificationArgs_1 = require("./args/DeleteManyNotificationArgs");
const DeleteNotificationArgs_1 = require("./args/DeleteNotificationArgs");
const FindFirstNotificationArgs_1 = require("./args/FindFirstNotificationArgs");
const FindManyNotificationArgs_1 = require("./args/FindManyNotificationArgs");
const FindUniqueNotificationArgs_1 = require("./args/FindUniqueNotificationArgs");
const GroupByNotificationArgs_1 = require("./args/GroupByNotificationArgs");
const UpdateManyNotificationArgs_1 = require("./args/UpdateManyNotificationArgs");
const UpdateNotificationArgs_1 = require("./args/UpdateNotificationArgs");
const UpsertNotificationArgs_1 = require("./args/UpsertNotificationArgs");
const helpers_1 = require("../../../helpers");
const Notification_1 = require("../../../models/Notification");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateNotification_1 = require("../../outputs/AggregateNotification");
const NotificationGroupBy_1 = require("../../outputs/NotificationGroupBy");
let NotificationCrudResolver = class NotificationCrudResolver {
    async notification(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).notification.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstNotification(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).notification.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async notifications(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).notification.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createNotification(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).notification.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyNotification(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).notification.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteNotification(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).notification.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateNotification(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).notification.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyNotification(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).notification.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyNotification(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).notification.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertNotification(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).notification.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateNotification(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).notification.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByNotification(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).notification.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueNotificationArgs_1.FindUniqueNotificationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], NotificationCrudResolver.prototype, "notification", null);
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
], NotificationCrudResolver.prototype, "findFirstNotification", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Notification_1.Notification], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyNotificationArgs_1.FindManyNotificationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], NotificationCrudResolver.prototype, "notifications", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Notification_1.Notification, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateNotificationArgs_1.CreateNotificationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], NotificationCrudResolver.prototype, "createNotification", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyNotificationArgs_1.CreateManyNotificationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], NotificationCrudResolver.prototype, "createManyNotification", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Notification_1.Notification, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteNotificationArgs_1.DeleteNotificationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], NotificationCrudResolver.prototype, "deleteNotification", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Notification_1.Notification, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateNotificationArgs_1.UpdateNotificationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], NotificationCrudResolver.prototype, "updateNotification", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyNotificationArgs_1.DeleteManyNotificationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], NotificationCrudResolver.prototype, "deleteManyNotification", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyNotificationArgs_1.UpdateManyNotificationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], NotificationCrudResolver.prototype, "updateManyNotification", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Notification_1.Notification, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertNotificationArgs_1.UpsertNotificationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], NotificationCrudResolver.prototype, "upsertNotification", null);
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
], NotificationCrudResolver.prototype, "aggregateNotification", null);
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
], NotificationCrudResolver.prototype, "groupByNotification", null);
NotificationCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Notification_1.Notification)
], NotificationCrudResolver);
exports.NotificationCrudResolver = NotificationCrudResolver;
