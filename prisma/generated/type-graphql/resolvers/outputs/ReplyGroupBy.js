"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplyGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReplyCountAggregate_1 = require("../outputs/ReplyCountAggregate");
const ReplyMaxAggregate_1 = require("../outputs/ReplyMaxAggregate");
const ReplyMinAggregate_1 = require("../outputs/ReplyMinAggregate");
let ReplyGroupBy = class ReplyGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ReplyGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ReplyGroupBy.prototype, "text", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ReplyGroupBy.prototype, "commentId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ReplyGroupBy.prototype, "authorId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], ReplyGroupBy.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], ReplyGroupBy.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReplyCountAggregate_1.ReplyCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReplyCountAggregate_1.ReplyCountAggregate)
], ReplyGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReplyMinAggregate_1.ReplyMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReplyMinAggregate_1.ReplyMinAggregate)
], ReplyGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReplyMaxAggregate_1.ReplyMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReplyMaxAggregate_1.ReplyMaxAggregate)
], ReplyGroupBy.prototype, "_max", void 0);
ReplyGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ReplyGroupBy", {
        isAbstract: true
    })
], ReplyGroupBy);
exports.ReplyGroupBy = ReplyGroupBy;
