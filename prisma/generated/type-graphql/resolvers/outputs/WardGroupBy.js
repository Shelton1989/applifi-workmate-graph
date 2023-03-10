"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WardGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WardAvgAggregate_1 = require("../outputs/WardAvgAggregate");
const WardCountAggregate_1 = require("../outputs/WardCountAggregate");
const WardMaxAggregate_1 = require("../outputs/WardMaxAggregate");
const WardMinAggregate_1 = require("../outputs/WardMinAggregate");
const WardSumAggregate_1 = require("../outputs/WardSumAggregate");
let WardGroupBy = class WardGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], WardGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], WardGroupBy.prototype, "number", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], WardGroupBy.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WardGroupBy.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], WardGroupBy.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], WardGroupBy.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WardCountAggregate_1.WardCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WardCountAggregate_1.WardCountAggregate)
], WardGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WardAvgAggregate_1.WardAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WardAvgAggregate_1.WardAvgAggregate)
], WardGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WardSumAggregate_1.WardSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WardSumAggregate_1.WardSumAggregate)
], WardGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WardMinAggregate_1.WardMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WardMinAggregate_1.WardMinAggregate)
], WardGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WardMaxAggregate_1.WardMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WardMaxAggregate_1.WardMaxAggregate)
], WardGroupBy.prototype, "_max", void 0);
WardGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("WardGroupBy", {
        isAbstract: true
    })
], WardGroupBy);
exports.WardGroupBy = WardGroupBy;
