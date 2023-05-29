"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenantRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Billing_1 = require("../../../models/Billing");
const Document_1 = require("../../../models/Document");
const LLMQuery_1 = require("../../../models/LLMQuery");
const Tenant_1 = require("../../../models/Tenant");
const User_1 = require("../../../models/User");
const TenantDocumentsArgs_1 = require("./args/TenantDocumentsArgs");
const TenantQueriesArgs_1 = require("./args/TenantQueriesArgs");
const TenantUsersArgs_1 = require("./args/TenantUsersArgs");
const helpers_1 = require("../../../helpers");
let TenantRelationsResolver = class TenantRelationsResolver {
    async Users(tenant, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).tenant.findUnique({
            where: {
                id: tenant.id,
            },
        }).Users(args);
    }
    async Queries(tenant, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).tenant.findUnique({
            where: {
                id: tenant.id,
            },
        }).Queries(args);
    }
    async Documents(tenant, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).tenant.findUnique({
            where: {
                id: tenant.id,
            },
        }).Documents(args);
    }
    async Billing(tenant, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).tenant.findUnique({
            where: {
                id: tenant.id,
            },
        }).Billing({});
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [User_1.User], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Tenant_1.Tenant, Object, TenantUsersArgs_1.TenantUsersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TenantRelationsResolver.prototype, "Users", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [LLMQuery_1.LLMQuery], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Tenant_1.Tenant, Object, TenantQueriesArgs_1.TenantQueriesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TenantRelationsResolver.prototype, "Queries", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Document_1.Document], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Tenant_1.Tenant, Object, TenantDocumentsArgs_1.TenantDocumentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TenantRelationsResolver.prototype, "Documents", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Billing_1.Billing, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Tenant_1.Tenant, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TenantRelationsResolver.prototype, "Billing", null);
TenantRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Tenant_1.Tenant)
], TenantRelationsResolver);
exports.TenantRelationsResolver = TenantRelationsResolver;
