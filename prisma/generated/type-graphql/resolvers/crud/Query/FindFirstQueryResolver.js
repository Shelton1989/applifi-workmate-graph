"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstQueryResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindFirstQueryArgs_1 = require("./args/FindFirstQueryArgs");
const Query_1 = require("../../../models/Query");
const helpers_1 = require("../../../helpers");
let FindFirstQueryResolver = class FindFirstQueryResolver {
    async findFirstQuery(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).query.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Query_1.Query, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstQueryArgs_1.FindFirstQueryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstQueryResolver.prototype, "findFirstQuery", null);
FindFirstQueryResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Query_1.Query)
], FindFirstQueryResolver);
exports.FindFirstQueryResolver = FindFirstQueryResolver;
