"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateSize = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SizeCountAggregate_1 = require("../outputs/SizeCountAggregate");
const SizeMaxAggregate_1 = require("../outputs/SizeMaxAggregate");
const SizeMinAggregate_1 = require("../outputs/SizeMinAggregate");
let AggregateSize = class AggregateSize {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SizeCountAggregate_1.SizeCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SizeCountAggregate_1.SizeCountAggregate)
], AggregateSize.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SizeMinAggregate_1.SizeMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SizeMinAggregate_1.SizeMinAggregate)
], AggregateSize.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SizeMaxAggregate_1.SizeMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SizeMaxAggregate_1.SizeMaxAggregate)
], AggregateSize.prototype, "_max", void 0);
AggregateSize = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateSize", {
        isAbstract: true
    })
], AggregateSize);
exports.AggregateSize = AggregateSize;
