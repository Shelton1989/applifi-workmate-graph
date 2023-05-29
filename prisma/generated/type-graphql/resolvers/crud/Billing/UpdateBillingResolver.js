"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBillingResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateBillingArgs_1 = require("./args/UpdateBillingArgs");
const Billing_1 = require("../../../models/Billing");
const helpers_1 = require("../../../helpers");
let UpdateBillingResolver = class UpdateBillingResolver {
    async updateBilling(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).billing.update({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateBillingArgs_1.UpdateBillingArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateBillingResolver.prototype, "updateBilling", null);
UpdateBillingResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Billing_1.Billing)
], UpdateBillingResolver);
exports.UpdateBillingResolver = UpdateBillingResolver;
