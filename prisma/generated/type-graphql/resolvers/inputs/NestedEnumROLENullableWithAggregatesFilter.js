"use strict";
var NestedEnumROLENullableWithAggregatesFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumROLENullableWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumROLENullableFilter_1 = require("../inputs/NestedEnumROLENullableFilter");
const NestedIntNullableFilter_1 = require("../inputs/NestedIntNullableFilter");
const ROLE_1 = require("../../enums/ROLE");
let NestedEnumROLENullableWithAggregatesFilter = NestedEnumROLENullableWithAggregatesFilter_1 = class NestedEnumROLENullableWithAggregatesFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ROLE_1.ROLE, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumROLENullableWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ROLE_1.ROLE], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumROLENullableWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ROLE_1.ROLE], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumROLENullableWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumROLENullableWithAggregatesFilter_1, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumROLENullableWithAggregatesFilter)
], NestedEnumROLENullableWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntNullableFilter_1.NestedIntNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntNullableFilter_1.NestedIntNullableFilter)
], NestedEnumROLENullableWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumROLENullableFilter_1.NestedEnumROLENullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumROLENullableFilter_1.NestedEnumROLENullableFilter)
], NestedEnumROLENullableWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumROLENullableFilter_1.NestedEnumROLENullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumROLENullableFilter_1.NestedEnumROLENullableFilter)
], NestedEnumROLENullableWithAggregatesFilter.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], NestedEnumROLENullableWithAggregatesFilter.prototype, "isSet", void 0);
NestedEnumROLENullableWithAggregatesFilter = NestedEnumROLENullableWithAggregatesFilter_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumROLENullableWithAggregatesFilter", {
        isAbstract: true
    })
], NestedEnumROLENullableWithAggregatesFilter);
exports.NestedEnumROLENullableWithAggregatesFilter = NestedEnumROLENullableWithAggregatesFilter;
