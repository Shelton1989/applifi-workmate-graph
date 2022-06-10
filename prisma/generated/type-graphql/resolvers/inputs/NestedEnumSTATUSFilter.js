"use strict";
var NestedEnumSTATUSFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumSTATUSFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const STATUS_1 = require("../../enums/STATUS");
let NestedEnumSTATUSFilter = NestedEnumSTATUSFilter_1 = class NestedEnumSTATUSFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => STATUS_1.STATUS, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumSTATUSFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [STATUS_1.STATUS], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumSTATUSFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [STATUS_1.STATUS], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumSTATUSFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumSTATUSFilter_1, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumSTATUSFilter)
], NestedEnumSTATUSFilter.prototype, "not", void 0);
NestedEnumSTATUSFilter = NestedEnumSTATUSFilter_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumSTATUSFilter", {
        isAbstract: true
    })
], NestedEnumSTATUSFilter);
exports.NestedEnumSTATUSFilter = NestedEnumSTATUSFilter;
