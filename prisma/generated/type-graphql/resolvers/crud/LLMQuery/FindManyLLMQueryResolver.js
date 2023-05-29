"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyLLMQueryResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindManyLLMQueryArgs_1 = require("./args/FindManyLLMQueryArgs");
const LLMQuery_1 = require("../../../models/LLMQuery");
const helpers_1 = require("../../../helpers");
let FindManyLLMQueryResolver = class FindManyLLMQueryResolver {
    async lLMQueries(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).lLMQuery.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [LLMQuery_1.LLMQuery], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyLLMQueryArgs_1.FindManyLLMQueryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyLLMQueryResolver.prototype, "lLMQueries", null);
FindManyLLMQueryResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => LLMQuery_1.LLMQuery)
], FindManyLLMQueryResolver);
exports.FindManyLLMQueryResolver = FindManyLLMQueryResolver;
