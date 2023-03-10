"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionCountAggregate_1 = require("../outputs/ReactionCountAggregate");
const ReactionMaxAggregate_1 = require("../outputs/ReactionMaxAggregate");
const ReactionMinAggregate_1 = require("../outputs/ReactionMinAggregate");
const REACTION_TYPE_1 = require("../../enums/REACTION_TYPE");
let ReactionGroupBy = class ReactionGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ReactionGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => REACTION_TYPE_1.REACTION_TYPE, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ReactionGroupBy.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReactionGroupBy.prototype, "mealId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReactionGroupBy.prototype, "postId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReactionGroupBy.prototype, "commentId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReactionGroupBy.prototype, "replyId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ReactionGroupBy.prototype, "authorId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], ReactionGroupBy.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], ReactionGroupBy.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionCountAggregate_1.ReactionCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionCountAggregate_1.ReactionCountAggregate)
], ReactionGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionMinAggregate_1.ReactionMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionMinAggregate_1.ReactionMinAggregate)
], ReactionGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionMaxAggregate_1.ReactionMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionMaxAggregate_1.ReactionMaxAggregate)
], ReactionGroupBy.prototype, "_max", void 0);
ReactionGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ReactionGroupBy", {
        isAbstract: true
    })
], ReactionGroupBy);
exports.ReactionGroupBy = ReactionGroupBy;
