"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateFeatures = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FeaturesCountAggregate_1 = require("../outputs/FeaturesCountAggregate");
const FeaturesMaxAggregate_1 = require("../outputs/FeaturesMaxAggregate");
const FeaturesMinAggregate_1 = require("../outputs/FeaturesMinAggregate");
let AggregateFeatures = class AggregateFeatures {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FeaturesCountAggregate_1.FeaturesCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FeaturesCountAggregate_1.FeaturesCountAggregate)
], AggregateFeatures.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FeaturesMinAggregate_1.FeaturesMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FeaturesMinAggregate_1.FeaturesMinAggregate)
], AggregateFeatures.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FeaturesMaxAggregate_1.FeaturesMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FeaturesMaxAggregate_1.FeaturesMaxAggregate)
], AggregateFeatures.prototype, "_max", void 0);
AggregateFeatures = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateFeatures", {
        isAbstract: true
    })
], AggregateFeatures);
exports.AggregateFeatures = AggregateFeatures;
