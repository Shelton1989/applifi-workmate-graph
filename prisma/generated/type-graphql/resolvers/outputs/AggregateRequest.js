"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateRequest = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RequestCountAggregate_1 = require("../outputs/RequestCountAggregate");
const RequestMaxAggregate_1 = require("../outputs/RequestMaxAggregate");
const RequestMinAggregate_1 = require("../outputs/RequestMinAggregate");
let AggregateRequest = class AggregateRequest {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RequestCountAggregate_1.RequestCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RequestCountAggregate_1.RequestCountAggregate)
], AggregateRequest.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RequestMinAggregate_1.RequestMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RequestMinAggregate_1.RequestMinAggregate)
], AggregateRequest.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RequestMaxAggregate_1.RequestMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RequestMaxAggregate_1.RequestMaxAggregate)
], AggregateRequest.prototype, "_max", void 0);
AggregateRequest = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateRequest", {
        isAbstract: true
    })
], AggregateRequest);
exports.AggregateRequest = AggregateRequest;
