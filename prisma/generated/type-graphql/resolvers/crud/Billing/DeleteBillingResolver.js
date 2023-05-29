"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteBillingResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteBillingArgs_1 = require("./args/DeleteBillingArgs");
const Billing_1 = require("../../../models/Billing");
const helpers_1 = require("../../../helpers");
let DeleteBillingResolver = class DeleteBillingResolver {
    async deleteBilling(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).billing.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
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
], DeleteBillingResolver.prototype, "deleteBilling", null);
DeleteBillingResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Billing_1.Billing)
], DeleteBillingResolver);
exports.DeleteBillingResolver = DeleteBillingResolver;
