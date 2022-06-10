"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationSettingsCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateNotificationSettingsArgs_1 = require("./args/AggregateNotificationSettingsArgs");
const CreateManyNotificationSettingsArgs_1 = require("./args/CreateManyNotificationSettingsArgs");
const CreateNotificationSettingsArgs_1 = require("./args/CreateNotificationSettingsArgs");
const DeleteManyNotificationSettingsArgs_1 = require("./args/DeleteManyNotificationSettingsArgs");
const DeleteNotificationSettingsArgs_1 = require("./args/DeleteNotificationSettingsArgs");
const FindFirstNotificationSettingsArgs_1 = require("./args/FindFirstNotificationSettingsArgs");
const FindManyNotificationSettingsArgs_1 = require("./args/FindManyNotificationSettingsArgs");
const FindUniqueNotificationSettingsArgs_1 = require("./args/FindUniqueNotificationSettingsArgs");
const GroupByNotificationSettingsArgs_1 = require("./args/GroupByNotificationSettingsArgs");
const UpdateManyNotificationSettingsArgs_1 = require("./args/UpdateManyNotificationSettingsArgs");
const UpdateNotificationSettingsArgs_1 = require("./args/UpdateNotificationSettingsArgs");
const UpsertNotificationSettingsArgs_1 = require("./args/UpsertNotificationSettingsArgs");
const helpers_1 = require("../../../helpers");
const NotificationSettings_1 = require("../../../models/NotificationSettings");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateNotificationSettings_1 = require("../../outputs/AggregateNotificationSettings");
const NotificationSettingsGroupBy_1 = require("../../outputs/NotificationSettingsGroupBy");
let NotificationSettingsCrudResolver = class NotificationSettingsCrudResolver {
    async findUniqueNotificationSettings(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).notificationSettings.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstNotificationSettings(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).notificationSettings.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManyNotificationSettings(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).notificationSettings.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createNotificationSettings(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).notificationSettings.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyNotificationSettings(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).notificationSettings.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteNotificationSettings(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).notificationSettings.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateNotificationSettings(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).notificationSettings.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyNotificationSettings(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).notificationSettings.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyNotificationSettings(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).notificationSettings.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertNotificationSettings(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).notificationSettings.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateNotificationSettings(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).notificationSettings.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByNotificationSettings(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).notificationSettings.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => NotificationSettings_1.NotificationSettings, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueNotificationSettingsArgs_1.FindUniqueNotificationSettingsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], NotificationSettingsCrudResolver.prototype, "findUniqueNotificationSettings", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => NotificationSettings_1.NotificationSettings, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstNotificationSettingsArgs_1.FindFirstNotificationSettingsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], NotificationSettingsCrudResolver.prototype, "findFirstNotificationSettings", null);
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
], NotificationSettingsCrudResolver.prototype, "findManyNotificationSettings", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => NotificationSettings_1.NotificationSettings, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateNotificationSettingsArgs_1.CreateNotificationSettingsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], NotificationSettingsCrudResolver.prototype, "createNotificationSettings", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyNotificationSettingsArgs_1.CreateManyNotificationSettingsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], NotificationSettingsCrudResolver.prototype, "createManyNotificationSettings", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => NotificationSettings_1.NotificationSettings, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteNotificationSettingsArgs_1.DeleteNotificationSettingsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], NotificationSettingsCrudResolver.prototype, "deleteNotificationSettings", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => NotificationSettings_1.NotificationSettings, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateNotificationSettingsArgs_1.UpdateNotificationSettingsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], NotificationSettingsCrudResolver.prototype, "updateNotificationSettings", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyNotificationSettingsArgs_1.DeleteManyNotificationSettingsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], NotificationSettingsCrudResolver.prototype, "deleteManyNotificationSettings", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyNotificationSettingsArgs_1.UpdateManyNotificationSettingsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], NotificationSettingsCrudResolver.prototype, "updateManyNotificationSettings", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => NotificationSettings_1.NotificationSettings, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertNotificationSettingsArgs_1.UpsertNotificationSettingsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], NotificationSettingsCrudResolver.prototype, "upsertNotificationSettings", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateNotificationSettings_1.AggregateNotificationSettings, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateNotificationSettingsArgs_1.AggregateNotificationSettingsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], NotificationSettingsCrudResolver.prototype, "aggregateNotificationSettings", null);
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
], NotificationSettingsCrudResolver.prototype, "groupByNotificationSettings", null);
NotificationSettingsCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => NotificationSettings_1.NotificationSettings)
], NotificationSettingsCrudResolver);
exports.NotificationSettingsCrudResolver = NotificationSettingsCrudResolver;
