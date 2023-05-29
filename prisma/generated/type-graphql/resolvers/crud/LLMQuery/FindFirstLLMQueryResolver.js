"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstLLMQueryResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindFirstLLMQueryArgs_1 = require("./args/FindFirstLLMQueryArgs");
const LLMQuery_1 = require("../../../models/LLMQuery");
const helpers_1 = require("../../../helpers");
let FindFirstLLMQueryResolver = class FindFirstLLMQueryResolver {
    async findFirstLLMQuery(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).lLMQuery.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => LLMQuery_1.LLMQuery, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstLLMQueryArgs_1.FindFirstLLMQueryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstLLMQueryResolver.prototype, "findFirstLLMQuery", null);
FindFirstLLMQueryResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => LLMQuery_1.LLMQuery)
], FindFirstLLMQueryResolver);
exports.FindFirstLLMQueryResolver = FindFirstLLMQueryResolver;
