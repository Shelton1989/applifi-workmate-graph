"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyBillingResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteManyBillingArgs_1 = require("./args/DeleteManyBillingArgs");
const Billing_1 = require("../../../models/Billing");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyBillingResolver = class DeleteManyBillingResolver {
    async deleteManyBilling(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).billing.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyBillingArgs_1.DeleteManyBillingArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteManyBillingResolver.prototype, "deleteManyBilling", null);
DeleteManyBillingResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Billing_1.Billing)
], DeleteManyBillingResolver);
exports.DeleteManyBillingResolver = DeleteManyBillingResolver;
