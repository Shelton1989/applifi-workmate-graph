"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillingCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateBillingArgs_1 = require("./args/AggregateBillingArgs");
const CreateBillingArgs_1 = require("./args/CreateBillingArgs");
const CreateManyBillingArgs_1 = require("./args/CreateManyBillingArgs");
const DeleteBillingArgs_1 = require("./args/DeleteBillingArgs");
const DeleteManyBillingArgs_1 = require("./args/DeleteManyBillingArgs");
const FindFirstBillingArgs_1 = require("./args/FindFirstBillingArgs");
const FindManyBillingArgs_1 = require("./args/FindManyBillingArgs");
const FindUniqueBillingArgs_1 = require("./args/FindUniqueBillingArgs");
const GroupByBillingArgs_1 = require("./args/GroupByBillingArgs");
const UpdateBillingArgs_1 = require("./args/UpdateBillingArgs");
const UpdateManyBillingArgs_1 = require("./args/UpdateManyBillingArgs");
const UpsertBillingArgs_1 = require("./args/UpsertBillingArgs");
const helpers_1 = require("../../../helpers");
const Billing_1 = require("../../../models/Billing");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateBilling_1 = require("../../outputs/AggregateBilling");
const BillingGroupBy_1 = require("../../outputs/BillingGroupBy");
let BillingCrudResolver = class BillingCrudResolver {
    async billing(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).billing.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstBilling(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).billing.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async billings(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).billing.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createBilling(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).billing.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyBilling(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).billing.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteBilling(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).billing.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateBilling(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).billing.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyBilling(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).billing.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyBilling(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).billing.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertBilling(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).billing.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateBilling(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).billing.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByBilling(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).billing.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Billing_1.Billing, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueBillingArgs_1.FindUniqueBillingArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BillingCrudResolver.prototype, "billing", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Billing_1.Billing, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstBillingArgs_1.FindFirstBillingArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BillingCrudResolver.prototype, "findFirstBilling", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Billing_1.Billing], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyBillingArgs_1.FindManyBillingArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BillingCrudResolver.prototype, "billings", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Billing_1.Billing, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateBillingArgs_1.CreateBillingArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BillingCrudResolver.prototype, "createBilling", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyBillingArgs_1.CreateManyBillingArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BillingCrudResolver.prototype, "createManyBilling", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Billing_1.Billing, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteBillingArgs_1.DeleteBillingArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BillingCrudResolver.prototype, "deleteBilling", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Billing_1.Billing, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateBillingArgs_1.UpdateBillingArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BillingCrudResolver.prototype, "updateBilling", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyBillingArgs_1.DeleteManyBillingArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BillingCrudResolver.prototype, "deleteManyBilling", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyBillingArgs_1.UpdateManyBillingArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BillingCrudResolver.prototype, "updateManyBilling", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Billing_1.Billing, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertBillingArgs_1.UpsertBillingArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BillingCrudResolver.prototype, "upsertBilling", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateBilling_1.AggregateBilling, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateBillingArgs_1.AggregateBillingArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BillingCrudResolver.prototype, "aggregateBilling", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [BillingGroupBy_1.BillingGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByBillingArgs_1.GroupByBillingArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BillingCrudResolver.prototype, "groupByBilling", null);
BillingCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Billing_1.Billing)
], BillingCrudResolver);
exports.BillingCrudResolver = BillingCrudResolver;
