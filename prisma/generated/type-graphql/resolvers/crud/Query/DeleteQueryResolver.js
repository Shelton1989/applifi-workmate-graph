"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteQueryResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteQueryArgs_1 = require("./args/DeleteQueryArgs");
const Query_1 = require("../../../models/Query");
const helpers_1 = require("../../../helpers");
let DeleteQueryResolver = class DeleteQueryResolver {
    async deleteQuery(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).query.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Query_1.Query, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteQueryArgs_1.DeleteQueryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteQueryResolver.prototype, "deleteQuery", null);
DeleteQueryResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Query_1.Query)
], DeleteQueryResolver);
exports.DeleteQueryResolver = DeleteQueryResolver;
