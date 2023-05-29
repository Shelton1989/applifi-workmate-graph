"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteLLMQueryResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteLLMQueryArgs_1 = require("./args/DeleteLLMQueryArgs");
const LLMQuery_1 = require("../../../models/LLMQuery");
const helpers_1 = require("../../../helpers");
let DeleteLLMQueryResolver = class DeleteLLMQueryResolver {
    async deleteLLMQuery(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).lLMQuery.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => LLMQuery_1.LLMQuery, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteLLMQueryArgs_1.DeleteLLMQueryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteLLMQueryResolver.prototype, "deleteLLMQuery", null);
DeleteLLMQueryResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => LLMQuery_1.LLMQuery)
], DeleteLLMQueryResolver);
exports.DeleteLLMQueryResolver = DeleteLLMQueryResolver;
