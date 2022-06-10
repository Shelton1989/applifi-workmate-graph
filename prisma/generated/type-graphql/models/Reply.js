"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reply = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReplyCount_1 = require("../resolvers/outputs/ReplyCount");
let Reply = class Reply {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Reply.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Reply.prototype, "text", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Reply.prototype, "commentId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Reply.prototype, "authorId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], Reply.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], Reply.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReplyCount_1.ReplyCount, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReplyCount_1.ReplyCount)
], Reply.prototype, "_count", void 0);
Reply = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Reply", {
        isAbstract: true
    })
], Reply);
exports.Reply = Reply;
