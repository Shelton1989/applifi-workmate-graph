"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentCommentsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentOrderByWithRelationInput_1 = require("../../../inputs/CommentOrderByWithRelationInput");
const CommentWhereInput_1 = require("../../../inputs/CommentWhereInput");
const CommentWhereUniqueInput_1 = require("../../../inputs/CommentWhereUniqueInput");
const CommentScalarFieldEnum_1 = require("../../../../enums/CommentScalarFieldEnum");
let DocumentCommentsArgs = class DocumentCommentsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentWhereInput_1.CommentWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentWhereInput_1.CommentWhereInput)
], DocumentCommentsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentOrderByWithRelationInput_1.CommentOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], DocumentCommentsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentWhereUniqueInput_1.CommentWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentWhereUniqueInput_1.CommentWhereUniqueInput)
], DocumentCommentsArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], DocumentCommentsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], DocumentCommentsArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentScalarFieldEnum_1.CommentScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], DocumentCommentsArgs.prototype, "distinct", void 0);
DocumentCommentsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DocumentCommentsArgs);
exports.DocumentCommentsArgs = DocumentCommentsArgs;
