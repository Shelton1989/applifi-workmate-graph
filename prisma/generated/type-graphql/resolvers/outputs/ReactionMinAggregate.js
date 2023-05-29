"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const REACTION_TYPE_1 = require("../../enums/REACTION_TYPE");
let ReactionMinAggregate = class ReactionMinAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReactionMinAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => REACTION_TYPE_1.REACTION_TYPE, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReactionMinAggregate.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReactionMinAggregate.prototype, "commentId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReactionMinAggregate.prototype, "replyId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReactionMinAggregate.prototype, "authorId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ReactionMinAggregate.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ReactionMinAggregate.prototype, "updatedAt", void 0);
ReactionMinAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ReactionMinAggregate", {
        isAbstract: true
    })
], ReactionMinAggregate);
exports.ReactionMinAggregate = ReactionMinAggregate;
