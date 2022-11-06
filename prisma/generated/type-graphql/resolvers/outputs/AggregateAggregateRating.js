"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateAggregateRating = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Aggregateundefined_1 = require("../outputs/Aggregateundefined");
let AggregateAggregateRating = class AggregateAggregateRating {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Aggregateundefined_1.Aggregateundefined, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Aggregateundefined_1.Aggregateundefined)
], AggregateAggregateRating.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Aggregateundefined_1.Aggregateundefined, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Aggregateundefined_1.Aggregateundefined)
], AggregateAggregateRating.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Aggregateundefined_1.Aggregateundefined, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Aggregateundefined_1.Aggregateundefined)
], AggregateAggregateRating.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Aggregateundefined_1.Aggregateundefined, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Aggregateundefined_1.Aggregateundefined)
], AggregateAggregateRating.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Aggregateundefined_1.Aggregateundefined, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Aggregateundefined_1.Aggregateundefined)
], AggregateAggregateRating.prototype, "_max", void 0);
AggregateAggregateRating = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateAggregateRating", {
        isAbstract: true
    })
], AggregateAggregateRating);
exports.AggregateAggregateRating = AggregateAggregateRating;
