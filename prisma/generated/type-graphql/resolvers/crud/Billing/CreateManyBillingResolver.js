"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyBillingResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const CreateManyBillingArgs_1 = require("./args/CreateManyBillingArgs");
const Billing_1 = require("../../../models/Billing");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let CreateManyBillingResolver = class CreateManyBillingResolver {
    async createManyBilling(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).billing.createMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyBillingArgs_1.CreateManyBillingArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateManyBillingResolver.prototype, "createManyBilling", null);
CreateManyBillingResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Billing_1.Billing)
], CreateManyBillingResolver);
exports.CreateManyBillingResolver = CreateManyBillingResolver;
