"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LLMQueryRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LLMQuery_1 = require("../../../models/LLMQuery");
const Tenant_1 = require("../../../models/Tenant");
const User_1 = require("../../../models/User");
const helpers_1 = require("../../../helpers");
let LLMQueryRelationsResolver = class LLMQueryRelationsResolver {
    async Tenant(lLMQuery, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).lLMQuery.findUnique({
            where: {
                id: lLMQuery.id,
            },
        }).Tenant({});
    }
    async User(lLMQuery, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).lLMQuery.findUnique({
            where: {
                id: lLMQuery.id,
            },
        }).User({});
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Tenant_1.Tenant, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [LLMQuery_1.LLMQuery, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], LLMQueryRelationsResolver.prototype, "Tenant", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => User_1.User, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [LLMQuery_1.LLMQuery, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], LLMQueryRelationsResolver.prototype, "User", null);
LLMQueryRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => LLMQuery_1.LLMQuery)
], LLMQueryRelationsResolver);
exports.LLMQueryRelationsResolver = LLMQueryRelationsResolver;
