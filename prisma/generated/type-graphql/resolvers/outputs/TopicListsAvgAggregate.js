"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopicListsAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TopicListsAvgAggregate = class TopicListsAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TopicListsAvgAggregate.prototype, "lists", void 0);
TopicListsAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("TopicListsAvgAggregate", {
        isAbstract: true
    })
], TopicListsAvgAggregate);
exports.TopicListsAvgAggregate = TopicListsAvgAggregate;
