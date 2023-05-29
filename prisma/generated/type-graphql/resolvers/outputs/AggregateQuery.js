"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateQuery = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const QueryCountAggregate_1 = require("../outputs/QueryCountAggregate");
const QueryMaxAggregate_1 = require("../outputs/QueryMaxAggregate");
const QueryMinAggregate_1 = require("../outputs/QueryMinAggregate");
let AggregateQuery = class AggregateQuery {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QueryCountAggregate_1.QueryCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QueryCountAggregate_1.QueryCountAggregate)
], AggregateQuery.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QueryMinAggregate_1.QueryMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QueryMinAggregate_1.QueryMinAggregate)
], AggregateQuery.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QueryMaxAggregate_1.QueryMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QueryMaxAggregate_1.QueryMaxAggregate)
], AggregateQuery.prototype, "_max", void 0);
AggregateQuery = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateQuery", {
        isAbstract: true
    })
], AggregateQuery);
exports.AggregateQuery = AggregateQuery;
