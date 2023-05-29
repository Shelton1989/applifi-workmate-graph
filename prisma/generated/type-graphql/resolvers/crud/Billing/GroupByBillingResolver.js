"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByBillingResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupByBillingArgs_1 = require("./args/GroupByBillingArgs");
const Billing_1 = require("../../../models/Billing");
const BillingGroupBy_1 = require("../../outputs/BillingGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByBillingResolver = class GroupByBillingResolver {
    async groupByBilling(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).billing.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
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
], GroupByBillingResolver.prototype, "groupByBilling", null);
GroupByBillingResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Billing_1.Billing)
], GroupByBillingResolver);
exports.GroupByBillingResolver = GroupByBillingResolver;
