"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillingRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Billing_1 = require("../../../models/Billing");
const Tenant_1 = require("../../../models/Tenant");
const helpers_1 = require("../../../helpers");
let BillingRelationsResolver = class BillingRelationsResolver {
    async Tenant(billing, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).billing.findUnique({
            where: {
                id: billing.id,
            },
        }).Tenant({});
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Tenant_1.Tenant, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Billing_1.Billing, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], BillingRelationsResolver.prototype, "Tenant", null);
BillingRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Billing_1.Billing)
], BillingRelationsResolver);
exports.BillingRelationsResolver = BillingRelationsResolver;
