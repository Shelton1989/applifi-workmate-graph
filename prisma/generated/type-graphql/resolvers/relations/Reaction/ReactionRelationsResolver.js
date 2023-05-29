"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Comment_1 = require("../../../models/Comment");
const Reaction_1 = require("../../../models/Reaction");
const Reply_1 = require("../../../models/Reply");
const User_1 = require("../../../models/User");
const helpers_1 = require("../../../helpers");
let ReactionRelationsResolver = class ReactionRelationsResolver {
    async Comment(reaction, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).reaction.findUnique({
            where: {
                id: reaction.id,
            },
        }).Comment({});
    }
    async Reply(reaction, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).reaction.findUnique({
            where: {
                id: reaction.id,
            },
        }).Reply({});
    }
    async Author(reaction, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).reaction.findUnique({
            where: {
                id: reaction.id,
            },
        }).Author({});
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Comment_1.Comment, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Reaction_1.Reaction, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ReactionRelationsResolver.prototype, "Comment", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Reply_1.Reply, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Reaction_1.Reaction, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ReactionRelationsResolver.prototype, "Reply", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => User_1.User, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Reaction_1.Reaction, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ReactionRelationsResolver.prototype, "Author", null);
ReactionRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Reaction_1.Reaction)
], ReactionRelationsResolver);
exports.ReactionRelationsResolver = ReactionRelationsResolver;
