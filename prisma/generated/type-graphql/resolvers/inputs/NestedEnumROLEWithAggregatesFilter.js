"use strict";
var NestedEnumROLEWithAggregatesFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumROLEWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumROLEFilter_1 = require("../inputs/NestedEnumROLEFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const ROLE_1 = require("../../enums/ROLE");
let NestedEnumROLEWithAggregatesFilter = NestedEnumROLEWithAggregatesFilter_1 = class NestedEnumROLEWithAggregatesFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ROLE_1.ROLE, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumROLEWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ROLE_1.ROLE], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumROLEWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ROLE_1.ROLE], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumROLEWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumROLEWithAggregatesFilter_1, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumROLEWithAggregatesFilter)
], NestedEnumROLEWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], NestedEnumROLEWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumROLEFilter_1.NestedEnumROLEFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumROLEFilter_1.NestedEnumROLEFilter)
], NestedEnumROLEWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumROLEFilter_1.NestedEnumROLEFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumROLEFilter_1.NestedEnumROLEFilter)
], NestedEnumROLEWithAggregatesFilter.prototype, "_max", void 0);
NestedEnumROLEWithAggregatesFilter = NestedEnumROLEWithAggregatesFilter_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumROLEWithAggregatesFilter", {
        isAbstract: true
    })
], NestedEnumROLEWithAggregatesFilter);
exports.NestedEnumROLEWithAggregatesFilter = NestedEnumROLEWithAggregatesFilter;
