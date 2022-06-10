"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentWhereInput_1 = require("../inputs/CommentWhereInput");
let CommentRelationFilter = class CommentRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentWhereInput_1.CommentWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentWhereInput_1.CommentWhereInput)
], CommentRelationFilter.prototype, "is", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentWhereInput_1.CommentWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentWhereInput_1.CommentWhereInput)
], CommentRelationFilter.prototype, "isNot", void 0);
CommentRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("CommentRelationFilter", {
        isAbstract: true
    })
], CommentRelationFilter);
exports.CommentRelationFilter = CommentRelationFilter;
