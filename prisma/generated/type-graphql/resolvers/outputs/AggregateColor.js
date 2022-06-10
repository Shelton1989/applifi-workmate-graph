"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateColor = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ColorCountAggregate_1 = require("../outputs/ColorCountAggregate");
const ColorMaxAggregate_1 = require("../outputs/ColorMaxAggregate");
const ColorMinAggregate_1 = require("../outputs/ColorMinAggregate");
let AggregateColor = class AggregateColor {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ColorCountAggregate_1.ColorCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ColorCountAggregate_1.ColorCountAggregate)
], AggregateColor.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ColorMinAggregate_1.ColorMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ColorMinAggregate_1.ColorMinAggregate)
], AggregateColor.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ColorMaxAggregate_1.ColorMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ColorMaxAggregate_1.ColorMaxAggregate)
], AggregateColor.prototype, "_max", void 0);
AggregateColor = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateColor", {
        isAbstract: true
    })
], AggregateColor);
exports.AggregateColor = AggregateColor;
