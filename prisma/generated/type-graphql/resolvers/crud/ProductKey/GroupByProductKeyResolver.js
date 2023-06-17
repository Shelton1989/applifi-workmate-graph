"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByProductKeyResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupByProductKeyArgs_1 = require("./args/GroupByProductKeyArgs");
const ProductKey_1 = require("../../../models/ProductKey");
const ProductKeyGroupBy_1 = require("../../outputs/ProductKeyGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByProductKeyResolver = class GroupByProductKeyResolver {
    async groupByProductKey(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).productKey.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [ProductKeyGroupBy_1.ProductKeyGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByProductKeyArgs_1.GroupByProductKeyArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByProductKeyResolver.prototype, "groupByProductKey", null);
GroupByProductKeyResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => ProductKey_1.ProductKey)
], GroupByProductKeyResolver);
exports.GroupByProductKeyResolver = GroupByProductKeyResolver;
