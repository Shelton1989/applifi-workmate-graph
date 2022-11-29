"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopicSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TopicSumAggregate = class TopicSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TopicSumAggregate.prototype, "tmdbId", void 0);
TopicSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("TopicSumAggregate", {
        isAbstract: true
    })
], TopicSumAggregate);
exports.TopicSumAggregate = TopicSumAggregate;
