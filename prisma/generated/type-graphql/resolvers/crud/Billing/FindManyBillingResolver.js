"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyBillingResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindManyBillingArgs_1 = require("./args/FindManyBillingArgs");
const Billing_1 = require("../../../models/Billing");
const helpers_1 = require("../../../helpers");
let FindManyBillingResolver = class FindManyBillingResolver {
    async billings(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).billing.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
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
], FindManyBillingResolver.prototype, "billings", null);
FindManyBillingResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Billing_1.Billing)
], FindManyBillingResolver);
exports.FindManyBillingResolver = FindManyBillingResolver;
