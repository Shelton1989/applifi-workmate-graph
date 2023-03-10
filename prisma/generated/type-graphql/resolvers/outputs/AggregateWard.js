"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateWard = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WardAvgAggregate_1 = require("../outputs/WardAvgAggregate");
const WardCountAggregate_1 = require("../outputs/WardCountAggregate");
const WardMaxAggregate_1 = require("../outputs/WardMaxAggregate");
const WardMinAggregate_1 = require("../outputs/WardMinAggregate");
const WardSumAggregate_1 = require("../outputs/WardSumAggregate");
let AggregateWard = class AggregateWard {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WardCountAggregate_1.WardCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WardCountAggregate_1.WardCountAggregate)
], AggregateWard.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WardAvgAggregate_1.WardAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WardAvgAggregate_1.WardAvgAggregate)
], AggregateWard.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WardSumAggregate_1.WardSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WardSumAggregate_1.WardSumAggregate)
], AggregateWard.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WardMinAggregate_1.WardMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WardMinAggregate_1.WardMinAggregate)
], AggregateWard.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WardMaxAggregate_1.WardMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WardMaxAggregate_1.WardMaxAggregate)
], AggregateWard.prototype, "_max", void 0);
AggregateWard = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateWard", {
        isAbstract: true
    })
], AggregateWard);
exports.AggregateWard = AggregateWard;
