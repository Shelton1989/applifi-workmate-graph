"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByBrandProductResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupByBrandProductArgs_1 = require("./args/GroupByBrandProductArgs");
const BrandProduct_1 = require("../../../models/BrandProduct");
const BrandProductGroupBy_1 = require("../../outputs/BrandProductGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByBrandProductResolver = class GroupByBrandProductResolver {
    async groupByBrandProduct(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).brandProduct.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [BrandProductGroupBy_1.BrandProductGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByBrandProductArgs_1.GroupByBrandProductArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByBrandProductResolver.prototype, "groupByBrandProduct", null);
GroupByBrandProductResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => BrandProduct_1.BrandProduct)
], GroupByBrandProductResolver);
exports.GroupByBrandProductResolver = GroupByBrandProductResolver;
