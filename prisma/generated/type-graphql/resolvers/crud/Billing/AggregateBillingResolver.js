"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateBillingResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateBillingArgs_1 = require("./args/AggregateBillingArgs");
const Billing_1 = require("../../../models/Billing");
const AggregateBilling_1 = require("../../outputs/AggregateBilling");
const helpers_1 = require("../../../helpers");
let AggregateBillingResolver = class AggregateBillingResolver {
    async aggregateBilling(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).billing.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
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
], AggregateBillingResolver.prototype, "aggregateBilling", null);
AggregateBillingResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Billing_1.Billing)
], AggregateBillingResolver);
exports.AggregateBillingResolver = AggregateBillingResolver;
