"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateTopic = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TopicCountAggregate_1 = require("../outputs/TopicCountAggregate");
const TopicMaxAggregate_1 = require("../outputs/TopicMaxAggregate");
const TopicMinAggregate_1 = require("../outputs/TopicMinAggregate");
let AggregateTopic = class AggregateTopic {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicCountAggregate_1.TopicCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicCountAggregate_1.TopicCountAggregate)
], AggregateTopic.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicMinAggregate_1.TopicMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicMinAggregate_1.TopicMinAggregate)
], AggregateTopic.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicMaxAggregate_1.TopicMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicMaxAggregate_1.TopicMaxAggregate)
], AggregateTopic.prototype, "_max", void 0);
AggregateTopic = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateTopic", {
        isAbstract: true
    })
], AggregateTopic);
exports.AggregateTopic = AggregateTopic;