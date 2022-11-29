"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopicListsSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TopicListsSumAggregate = class TopicListsSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TypeGraphQL.Int], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TopicListsSumAggregate.prototype, "lists", void 0);
TopicListsSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("TopicListsSumAggregate", {
        isAbstract: true
    })
], TopicListsSumAggregate);
exports.TopicListsSumAggregate = TopicListsSumAggregate;
