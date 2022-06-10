"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumSTATUSFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumSTATUSFilter_1 = require("../inputs/NestedEnumSTATUSFilter");
const STATUS_1 = require("../../enums/STATUS");
let EnumSTATUSFilter = class EnumSTATUSFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => STATUS_1.STATUS, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumSTATUSFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [STATUS_1.STATUS], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumSTATUSFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [STATUS_1.STATUS], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumSTATUSFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumSTATUSFilter_1.NestedEnumSTATUSFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumSTATUSFilter_1.NestedEnumSTATUSFilter)
], EnumSTATUSFilter.prototype, "not", void 0);
EnumSTATUSFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumSTATUSFilter", {
        isAbstract: true
    })
], EnumSTATUSFilter);
exports.EnumSTATUSFilter = EnumSTATUSFilter;
