"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstBillingResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindFirstBillingArgs_1 = require("./args/FindFirstBillingArgs");
const Billing_1 = require("../../../models/Billing");
const helpers_1 = require("../../../helpers");
let FindFirstBillingResolver = class FindFirstBillingResolver {
    async findFirstBilling(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).billing.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstBillingArgs_1.FindFirstBillingArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstBillingResolver.prototype, "findFirstBilling", null);
FindFirstBillingResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Billing_1.Billing)
], FindFirstBillingResolver);
exports.FindFirstBillingResolver = FindFirstBillingResolver;
