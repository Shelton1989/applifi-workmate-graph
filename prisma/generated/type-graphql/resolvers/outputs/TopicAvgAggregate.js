"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopicAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TopicAvgAggregate = class TopicAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TopicAvgAggregate.prototype, "tmdbId", void 0);
TopicAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("TopicAvgAggregate", {
        isAbstract: true
    })
], TopicAvgAggregate);
exports.TopicAvgAggregate = TopicAvgAggregate;
