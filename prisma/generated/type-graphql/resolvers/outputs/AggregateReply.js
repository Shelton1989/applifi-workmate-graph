"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateReply = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReplyCountAggregate_1 = require("../outputs/ReplyCountAggregate");
const ReplyMaxAggregate_1 = require("../outputs/ReplyMaxAggregate");
const ReplyMinAggregate_1 = require("../outputs/ReplyMinAggregate");
let AggregateReply = class AggregateReply {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReplyCountAggregate_1.ReplyCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReplyCountAggregate_1.ReplyCountAggregate)
], AggregateReply.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReplyMinAggregate_1.ReplyMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReplyMinAggregate_1.ReplyMinAggregate)
], AggregateReply.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReplyMaxAggregate_1.ReplyMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReplyMaxAggregate_1.ReplyMaxAggregate)
], AggregateReply.prototype, "_max", void 0);
AggregateReply = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateReply", {
        isAbstract: true
    })
], AggregateReply);
exports.AggregateReply = AggregateReply;
