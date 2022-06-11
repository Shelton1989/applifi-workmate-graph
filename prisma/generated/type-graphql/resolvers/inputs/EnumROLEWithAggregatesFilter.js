"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumROLEWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumROLEFilter_1 = require("../inputs/NestedEnumROLEFilter");
const NestedEnumROLEWithAggregatesFilter_1 = require("../inputs/NestedEnumROLEWithAggregatesFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const ROLE_1 = require("../../enums/ROLE");
let EnumROLEWithAggregatesFilter = class EnumROLEWithAggregatesFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ROLE_1.ROLE, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumROLEWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ROLE_1.ROLE], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumROLEWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ROLE_1.ROLE], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumROLEWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumROLEWithAggregatesFilter_1.NestedEnumROLEWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumROLEWithAggregatesFilter_1.NestedEnumROLEWithAggregatesFilter)
], EnumROLEWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], EnumROLEWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumROLEFilter_1.NestedEnumROLEFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumROLEFilter_1.NestedEnumROLEFilter)
], EnumROLEWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumROLEFilter_1.NestedEnumROLEFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumROLEFilter_1.NestedEnumROLEFilter)
], EnumROLEWithAggregatesFilter.prototype, "_max", void 0);
EnumROLEWithAggregatesFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumROLEWithAggregatesFilter", {
        isAbstract: true
    })
], EnumROLEWithAggregatesFilter);
exports.EnumROLEWithAggregatesFilter = EnumROLEWithAggregatesFilter;
