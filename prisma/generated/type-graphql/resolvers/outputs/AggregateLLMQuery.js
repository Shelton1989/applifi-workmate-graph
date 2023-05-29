"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateLLMQuery = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LLMQueryCountAggregate_1 = require("../outputs/LLMQueryCountAggregate");
const LLMQueryMaxAggregate_1 = require("../outputs/LLMQueryMaxAggregate");
const LLMQueryMinAggregate_1 = require("../outputs/LLMQueryMinAggregate");
let AggregateLLMQuery = class AggregateLLMQuery {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LLMQueryCountAggregate_1.LLMQueryCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LLMQueryCountAggregate_1.LLMQueryCountAggregate)
], AggregateLLMQuery.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LLMQueryMinAggregate_1.LLMQueryMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LLMQueryMinAggregate_1.LLMQueryMinAggregate)
], AggregateLLMQuery.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LLMQueryMaxAggregate_1.LLMQueryMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LLMQueryMaxAggregate_1.LLMQueryMaxAggregate)
], AggregateLLMQuery.prototype, "_max", void 0);
AggregateLLMQuery = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateLLMQuery", {
        isAbstract: true
    })
], AggregateLLMQuery);
exports.AggregateLLMQuery = AggregateLLMQuery;
