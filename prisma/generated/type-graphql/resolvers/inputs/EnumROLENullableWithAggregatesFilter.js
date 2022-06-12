"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumROLENullableWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumROLENullableFilter_1 = require("../inputs/NestedEnumROLENullableFilter");
const NestedEnumROLENullableWithAggregatesFilter_1 = require("../inputs/NestedEnumROLENullableWithAggregatesFilter");
const NestedIntNullableFilter_1 = require("../inputs/NestedIntNullableFilter");
const ROLE_1 = require("../../enums/ROLE");
let EnumROLENullableWithAggregatesFilter = class EnumROLENullableWithAggregatesFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ROLE_1.ROLE, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumROLENullableWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ROLE_1.ROLE], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumROLENullableWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ROLE_1.ROLE], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumROLENullableWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumROLENullableWithAggregatesFilter_1.NestedEnumROLENullableWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumROLENullableWithAggregatesFilter_1.NestedEnumROLENullableWithAggregatesFilter)
], EnumROLENullableWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntNullableFilter_1.NestedIntNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntNullableFilter_1.NestedIntNullableFilter)
], EnumROLENullableWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumROLENullableFilter_1.NestedEnumROLENullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumROLENullableFilter_1.NestedEnumROLENullableFilter)
], EnumROLENullableWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumROLENullableFilter_1.NestedEnumROLENullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumROLENullableFilter_1.NestedEnumROLENullableFilter)
], EnumROLENullableWithAggregatesFilter.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], EnumROLENullableWithAggregatesFilter.prototype, "isSet", void 0);
EnumROLENullableWithAggregatesFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumROLENullableWithAggregatesFilter", {
        isAbstract: true
    })
], EnumROLENullableWithAggregatesFilter);
exports.EnumROLENullableWithAggregatesFilter = EnumROLENullableWithAggregatesFilter;
