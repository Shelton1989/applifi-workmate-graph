"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyReplyResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindManyReplyArgs_1 = require("./args/FindManyReplyArgs");
const Reply_1 = require("../../../models/Reply");
const helpers_1 = require("../../../helpers");
let FindManyReplyResolver = class FindManyReplyResolver {
    async replies(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).reply.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Reply_1.Reply], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyReplyArgs_1.FindManyReplyArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyReplyResolver.prototype, "replies", null);
FindManyReplyResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Reply_1.Reply)
], FindManyReplyResolver);
exports.FindManyReplyResolver = FindManyReplyResolver;
