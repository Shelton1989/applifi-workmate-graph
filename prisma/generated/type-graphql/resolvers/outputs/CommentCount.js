"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let CommentCount = class CommentCount {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], CommentCount.prototype, "Replies", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], CommentCount.prototype, "Reactions", void 0);
CommentCount = tslib_1.__decorate([
    TypeGraphQL.ObjectType("CommentCount", {
        isAbstract: true
    })
], CommentCount);
exports.CommentCount = CommentCount;
