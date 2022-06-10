"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentCountAggregate_1 = require("../outputs/CommentCountAggregate");
const CommentMaxAggregate_1 = require("../outputs/CommentMaxAggregate");
const CommentMinAggregate_1 = require("../outputs/CommentMinAggregate");
let CommentGroupBy = class CommentGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CommentGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CommentGroupBy.prototype, "text", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CommentGroupBy.prototype, "postId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CommentGroupBy.prototype, "authorId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], CommentGroupBy.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], CommentGroupBy.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentCountAggregate_1.CommentCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentCountAggregate_1.CommentCountAggregate)
], CommentGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentMinAggregate_1.CommentMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentMinAggregate_1.CommentMinAggregate)
], CommentGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentMaxAggregate_1.CommentMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentMaxAggregate_1.CommentMaxAggregate)
], CommentGroupBy.prototype, "_max", void 0);
CommentGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("CommentGroupBy", {
        isAbstract: true
    })
], CommentGroupBy);
exports.CommentGroupBy = CommentGroupBy;
