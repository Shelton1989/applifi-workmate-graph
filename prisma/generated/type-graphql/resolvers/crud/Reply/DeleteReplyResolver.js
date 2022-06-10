"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteReplyResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteReplyArgs_1 = require("./args/DeleteReplyArgs");
const Reply_1 = require("../../../models/Reply");
const helpers_1 = require("../../../helpers");
let DeleteReplyResolver = class DeleteReplyResolver {
    async deleteReply(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).reply.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Reply_1.Reply, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteReplyArgs_1.DeleteReplyArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteReplyResolver.prototype, "deleteReply", null);
DeleteReplyResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Reply_1.Reply)
], DeleteReplyResolver);
exports.DeleteReplyResolver = DeleteReplyResolver;
