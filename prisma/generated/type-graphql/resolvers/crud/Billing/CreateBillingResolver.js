"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateBillingResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const CreateBillingArgs_1 = require("./args/CreateBillingArgs");
const Billing_1 = require("../../../models/Billing");
const helpers_1 = require("../../../helpers");
let CreateBillingResolver = class CreateBillingResolver {
    async createBilling(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).billing.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Billing_1.Billing, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateBillingArgs_1.CreateBillingArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateBillingResolver.prototype, "createBilling", null);
CreateBillingResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Billing_1.Billing)
], CreateBillingResolver);
exports.CreateBillingResolver = CreateBillingResolver;
