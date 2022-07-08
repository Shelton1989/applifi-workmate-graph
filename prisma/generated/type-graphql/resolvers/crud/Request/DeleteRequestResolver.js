"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteRequestResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteRequestArgs_1 = require("./args/DeleteRequestArgs");
const Request_1 = require("../../../models/Request");
const helpers_1 = require("../../../helpers");
let DeleteRequestResolver = class DeleteRequestResolver {
    async deleteRequest(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).request.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Request_1.Request, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteRequestArgs_1.DeleteRequestArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteRequestResolver.prototype, "deleteRequest", null);
DeleteRequestResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Request_1.Request)
], DeleteRequestResolver);
exports.DeleteRequestResolver = DeleteRequestResolver;
