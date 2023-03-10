"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenantRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Location_1 = require("../../../models/Location");
const Meal_1 = require("../../../models/Meal");
const Order_1 = require("../../../models/Order");
const Tenant_1 = require("../../../models/Tenant");
const User_1 = require("../../../models/User");
const TenantLocationsArgs_1 = require("./args/TenantLocationsArgs");
const TenantMealsArgs_1 = require("./args/TenantMealsArgs");
const TenantOrdersArgs_1 = require("./args/TenantOrdersArgs");
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
    async Meals(tenant, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).tenant.findUnique({
            where: {
                id: tenant.id,
            },
        }).Meals(args);
    }
    async Orders(tenant, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).tenant.findUnique({
            where: {
                id: tenant.id,
            },
        }).Orders(args);
    }
    async Locations(tenant, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).tenant.findUnique({
            where: {
                id: tenant.id,
            },
        }).Locations(args);
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
    TypeGraphQL.FieldResolver(_type => [Meal_1.Meal], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Tenant_1.Tenant, Object, TenantMealsArgs_1.TenantMealsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TenantRelationsResolver.prototype, "Meals", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Order_1.Order], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Tenant_1.Tenant, Object, TenantOrdersArgs_1.TenantOrdersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TenantRelationsResolver.prototype, "Orders", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Location_1.Location], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Tenant_1.Tenant, Object, TenantLocationsArgs_1.TenantLocationsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TenantRelationsResolver.prototype, "Locations", null);
TenantRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Tenant_1.Tenant)
], TenantRelationsResolver);
exports.TenantRelationsResolver = TenantRelationsResolver;
