"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByQueryResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupByQueryArgs_1 = require("./args/GroupByQueryArgs");
const Query_1 = require("../../../models/Query");
const QueryGroupBy_1 = require("../../outputs/QueryGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByQueryResolver = class GroupByQueryResolver {
    async groupByQuery(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).query.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [QueryGroupBy_1.QueryGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByQueryArgs_1.GroupByQueryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByQueryResolver.prototype, "groupByQuery", null);
GroupByQueryResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Query_1.Query)
], GroupByQueryResolver);
exports.GroupByQueryResolver = GroupByQueryResolver;
