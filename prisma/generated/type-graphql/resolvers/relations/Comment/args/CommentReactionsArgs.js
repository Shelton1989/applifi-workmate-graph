"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentReactionsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionOrderByWithRelationInput_1 = require("../../../inputs/ReactionOrderByWithRelationInput");
const ReactionWhereInput_1 = require("../../../inputs/ReactionWhereInput");
const ReactionWhereUniqueInput_1 = require("../../../inputs/ReactionWhereUniqueInput");
const ReactionScalarFieldEnum_1 = require("../../../../enums/ReactionScalarFieldEnum");
let CommentReactionsArgs = class CommentReactionsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionWhereInput_1.ReactionWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionWhereInput_1.ReactionWhereInput)
], CommentReactionsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionOrderByWithRelationInput_1.ReactionOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentReactionsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionWhereUniqueInput_1.ReactionWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionWhereUniqueInput_1.ReactionWhereUniqueInput)
], CommentReactionsArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], CommentReactionsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], CommentReactionsArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionScalarFieldEnum_1.ReactionScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentReactionsArgs.prototype, "distinct", void 0);
CommentReactionsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CommentReactionsArgs);
exports.CommentReactionsArgs = CommentReactionsArgs;
