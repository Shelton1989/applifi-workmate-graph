"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplyRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Comment_1 = require("../../../models/Comment");
const Reaction_1 = require("../../../models/Reaction");
const Reply_1 = require("../../../models/Reply");
const User_1 = require("../../../models/User");
const ReplyReactionsArgs_1 = require("./args/ReplyReactionsArgs");
const helpers_1 = require("../../../helpers");
let ReplyRelationsResolver = class ReplyRelationsResolver {
    async Comment(reply, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).reply.findUnique({
            where: {
                id: reply.id,
            },
        }).Comment({});
    }
    async Author(reply, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).reply.findUnique({
            where: {
                id: reply.id,
            },
        }).Author({});
    }
    async Reactions(reply, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).reply.findUnique({
            where: {
                id: reply.id,
            },
        }).Reactions(args);
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Comment_1.Comment, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Reply_1.Reply, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ReplyRelationsResolver.prototype, "Comment", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => User_1.User, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Reply_1.Reply, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ReplyRelationsResolver.prototype, "Author", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Reaction_1.Reaction], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Reply_1.Reply, Object, ReplyReactionsArgs_1.ReplyReactionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReplyRelationsResolver.prototype, "Reactions", null);
ReplyRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Reply_1.Reply)
], ReplyRelationsResolver);
exports.ReplyRelationsResolver = ReplyRelationsResolver;
