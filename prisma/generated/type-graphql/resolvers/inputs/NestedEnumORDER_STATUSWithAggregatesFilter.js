"use strict";
var NestedEnumORDER_STATUSWithAggregatesFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumORDER_STATUSWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumORDER_STATUSFilter_1 = require("../inputs/NestedEnumORDER_STATUSFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const ORDER_STATUS_1 = require("../../enums/ORDER_STATUS");
let NestedEnumORDER_STATUSWithAggregatesFilter = NestedEnumORDER_STATUSWithAggregatesFilter_1 = class NestedEnumORDER_STATUSWithAggregatesFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ORDER_STATUS_1.ORDER_STATUS, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumORDER_STATUSWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ORDER_STATUS_1.ORDER_STATUS], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumORDER_STATUSWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ORDER_STATUS_1.ORDER_STATUS], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumORDER_STATUSWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumORDER_STATUSWithAggregatesFilter_1, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumORDER_STATUSWithAggregatesFilter)
], NestedEnumORDER_STATUSWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], NestedEnumORDER_STATUSWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumORDER_STATUSFilter_1.NestedEnumORDER_STATUSFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumORDER_STATUSFilter_1.NestedEnumORDER_STATUSFilter)
], NestedEnumORDER_STATUSWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumORDER_STATUSFilter_1.NestedEnumORDER_STATUSFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumORDER_STATUSFilter_1.NestedEnumORDER_STATUSFilter)
], NestedEnumORDER_STATUSWithAggregatesFilter.prototype, "_max", void 0);
NestedEnumORDER_STATUSWithAggregatesFilter = NestedEnumORDER_STATUSWithAggregatesFilter_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumORDER_STATUSWithAggregatesFilter", {
        isAbstract: true
    })
], NestedEnumORDER_STATUSWithAggregatesFilter);
exports.NestedEnumORDER_STATUSWithAggregatesFilter = NestedEnumORDER_STATUSWithAggregatesFilter;
