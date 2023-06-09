"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByLLMQueryResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupByLLMQueryArgs_1 = require("./args/GroupByLLMQueryArgs");
const LLMQuery_1 = require("../../../models/LLMQuery");
const LLMQueryGroupBy_1 = require("../../outputs/LLMQueryGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByLLMQueryResolver = class GroupByLLMQueryResolver {
    async groupByLLMQuery(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).lLMQuery.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [LLMQueryGroupBy_1.LLMQueryGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByLLMQueryArgs_1.GroupByLLMQueryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByLLMQueryResolver.prototype, "groupByLLMQuery", null);
GroupByLLMQueryResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => LLMQuery_1.LLMQuery)
], GroupByLLMQueryResolver);
exports.GroupByLLMQueryResolver = GroupByLLMQueryResolver;
