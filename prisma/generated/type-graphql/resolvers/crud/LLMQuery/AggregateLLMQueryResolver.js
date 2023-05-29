"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateLLMQueryResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateLLMQueryArgs_1 = require("./args/AggregateLLMQueryArgs");
const LLMQuery_1 = require("../../../models/LLMQuery");
const AggregateLLMQuery_1 = require("../../outputs/AggregateLLMQuery");
const helpers_1 = require("../../../helpers");
let AggregateLLMQueryResolver = class AggregateLLMQueryResolver {
    async aggregateLLMQuery(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).lLMQuery.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateLLMQuery_1.AggregateLLMQuery, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateLLMQueryArgs_1.AggregateLLMQueryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateLLMQueryResolver.prototype, "aggregateLLMQuery", null);
AggregateLLMQueryResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => LLMQuery_1.LLMQuery)
], AggregateLLMQueryResolver);
exports.AggregateLLMQueryResolver = AggregateLLMQueryResolver;
