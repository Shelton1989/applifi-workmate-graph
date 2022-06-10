"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByReplyResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupByReplyArgs_1 = require("./args/GroupByReplyArgs");
const Reply_1 = require("../../../models/Reply");
const ReplyGroupBy_1 = require("../../outputs/ReplyGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByReplyResolver = class GroupByReplyResolver {
    async groupByReply(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).reply.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [ReplyGroupBy_1.ReplyGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByReplyArgs_1.GroupByReplyArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByReplyResolver.prototype, "groupByReply", null);
GroupByReplyResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Reply_1.Reply)
], GroupByReplyResolver);
exports.GroupByReplyResolver = GroupByReplyResolver;
