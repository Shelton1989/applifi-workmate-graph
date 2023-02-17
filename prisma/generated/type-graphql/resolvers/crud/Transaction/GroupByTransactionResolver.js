"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByTransactionResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupByTransactionArgs_1 = require("./args/GroupByTransactionArgs");
const Transaction_1 = require("../../../models/Transaction");
const TransactionGroupBy_1 = require("../../outputs/TransactionGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByTransactionResolver = class GroupByTransactionResolver {
    async groupByTransaction(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).transaction.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [TransactionGroupBy_1.TransactionGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByTransactionArgs_1.GroupByTransactionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByTransactionResolver.prototype, "groupByTransaction", null);
GroupByTransactionResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Transaction_1.Transaction)
], GroupByTransactionResolver);
exports.GroupByTransactionResolver = GroupByTransactionResolver;
