"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateTransactionResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateTransactionArgs_1 = require("./args/AggregateTransactionArgs");
const Transaction_1 = require("../../../models/Transaction");
const AggregateTransaction_1 = require("../../outputs/AggregateTransaction");
const helpers_1 = require("../../../helpers");
let AggregateTransactionResolver = class AggregateTransactionResolver {
    async aggregateTransaction(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).transaction.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateTransaction_1.AggregateTransaction, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateTransactionArgs_1.AggregateTransactionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateTransactionResolver.prototype, "aggregateTransaction", null);
AggregateTransactionResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Transaction_1.Transaction)
], AggregateTransactionResolver);
exports.AggregateTransactionResolver = AggregateTransactionResolver;
