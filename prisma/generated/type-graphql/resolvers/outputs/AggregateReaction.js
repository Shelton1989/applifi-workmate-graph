"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateReaction = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionCountAggregate_1 = require("../outputs/ReactionCountAggregate");
const ReactionMaxAggregate_1 = require("../outputs/ReactionMaxAggregate");
const ReactionMinAggregate_1 = require("../outputs/ReactionMinAggregate");
let AggregateReaction = class AggregateReaction {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionCountAggregate_1.ReactionCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionCountAggregate_1.ReactionCountAggregate)
], AggregateReaction.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionMinAggregate_1.ReactionMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionMinAggregate_1.ReactionMinAggregate)
], AggregateReaction.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionMaxAggregate_1.ReactionMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionMaxAggregate_1.ReactionMaxAggregate)
], AggregateReaction.prototype, "_max", void 0);
AggregateReaction = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateReaction", {
        isAbstract: true
    })
], AggregateReaction);
exports.AggregateReaction = AggregateReaction;
