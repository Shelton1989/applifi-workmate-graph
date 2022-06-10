"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let CommentMinAggregate = class CommentMinAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CommentMinAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CommentMinAggregate.prototype, "text", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CommentMinAggregate.prototype, "postId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CommentMinAggregate.prototype, "authorId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], CommentMinAggregate.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], CommentMinAggregate.prototype, "updatedAt", void 0);
CommentMinAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("CommentMinAggregate", {
        isAbstract: true
    })
], CommentMinAggregate);
exports.CommentMinAggregate = CommentMinAggregate;
