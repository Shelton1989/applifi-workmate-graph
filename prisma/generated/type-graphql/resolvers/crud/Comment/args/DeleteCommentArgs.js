"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteCommentArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentWhereUniqueInput_1 = require("../../../inputs/CommentWhereUniqueInput");
let DeleteCommentArgs = class DeleteCommentArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentWhereUniqueInput_1.CommentWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CommentWhereUniqueInput_1.CommentWhereUniqueInput)
], DeleteCommentArgs.prototype, "where", void 0);
DeleteCommentArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteCommentArgs);
exports.DeleteCommentArgs = DeleteCommentArgs;
