"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Comment_1 = require("../../../models/Comment");
const Document_1 = require("../../../models/Document");
const Reaction_1 = require("../../../models/Reaction");
const Reply_1 = require("../../../models/Reply");
const User_1 = require("../../../models/User");
const CommentReactionsArgs_1 = require("./args/CommentReactionsArgs");
const CommentRepliesArgs_1 = require("./args/CommentRepliesArgs");
const helpers_1 = require("../../../helpers");
let CommentRelationsResolver = class CommentRelationsResolver {
    async Document(comment, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).comment.findUnique({
            where: {
                id: comment.id,
            },
        }).Document({});
    }
    async Author(comment, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).comment.findUnique({
            where: {
                id: comment.id,
            },
        }).Author({});
    }
    async Replies(comment, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).comment.findUnique({
            where: {
                id: comment.id,
            },
        }).Replies(args);
    }
    async Reactions(comment, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).comment.findUnique({
            where: {
                id: comment.id,
            },
        }).Reactions(args);
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Document_1.Document, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Comment_1.Comment, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CommentRelationsResolver.prototype, "Document", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => User_1.User, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Comment_1.Comment, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CommentRelationsResolver.prototype, "Author", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Reply_1.Reply], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Comment_1.Comment, Object, CommentRepliesArgs_1.CommentRepliesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CommentRelationsResolver.prototype, "Replies", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Reaction_1.Reaction], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Comment_1.Comment, Object, CommentReactionsArgs_1.CommentReactionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CommentRelationsResolver.prototype, "Reactions", null);
CommentRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Comment_1.Comment)
], CommentRelationsResolver);
exports.CommentRelationsResolver = CommentRelationsResolver;
