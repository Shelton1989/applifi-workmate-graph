"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateReplyResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateReplyArgs_1 = require("./args/AggregateReplyArgs");
const Reply_1 = require("../../../models/Reply");
const AggregateReply_1 = require("../../outputs/AggregateReply");
const helpers_1 = require("../../../helpers");
let AggregateReplyResolver = class AggregateReplyResolver {
    async aggregateReply(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).reply.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateReply_1.AggregateReply, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateReplyArgs_1.AggregateReplyArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateReplyResolver.prototype, "aggregateReply", null);
AggregateReplyResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Reply_1.Reply)
], AggregateReplyResolver);
exports.AggregateReplyResolver = AggregateReplyResolver;
