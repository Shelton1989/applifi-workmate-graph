"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumORDER_STATUSWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumORDER_STATUSFilter_1 = require("../inputs/NestedEnumORDER_STATUSFilter");
const NestedEnumORDER_STATUSWithAggregatesFilter_1 = require("../inputs/NestedEnumORDER_STATUSWithAggregatesFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const ORDER_STATUS_1 = require("../../enums/ORDER_STATUS");
let EnumORDER_STATUSWithAggregatesFilter = class EnumORDER_STATUSWithAggregatesFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ORDER_STATUS_1.ORDER_STATUS, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumORDER_STATUSWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ORDER_STATUS_1.ORDER_STATUS], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumORDER_STATUSWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ORDER_STATUS_1.ORDER_STATUS], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumORDER_STATUSWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumORDER_STATUSWithAggregatesFilter_1.NestedEnumORDER_STATUSWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumORDER_STATUSWithAggregatesFilter_1.NestedEnumORDER_STATUSWithAggregatesFilter)
], EnumORDER_STATUSWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], EnumORDER_STATUSWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumORDER_STATUSFilter_1.NestedEnumORDER_STATUSFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumORDER_STATUSFilter_1.NestedEnumORDER_STATUSFilter)
], EnumORDER_STATUSWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumORDER_STATUSFilter_1.NestedEnumORDER_STATUSFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumORDER_STATUSFilter_1.NestedEnumORDER_STATUSFilter)
], EnumORDER_STATUSWithAggregatesFilter.prototype, "_max", void 0);
EnumORDER_STATUSWithAggregatesFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumORDER_STATUSWithAggregatesFilter", {
        isAbstract: true
    })
], EnumORDER_STATUSWithAggregatesFilter);
exports.EnumORDER_STATUSWithAggregatesFilter = EnumORDER_STATUSWithAggregatesFilter;
