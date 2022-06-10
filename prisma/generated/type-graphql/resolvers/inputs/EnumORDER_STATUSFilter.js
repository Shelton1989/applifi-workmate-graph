"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumORDER_STATUSFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumORDER_STATUSFilter_1 = require("../inputs/NestedEnumORDER_STATUSFilter");
const ORDER_STATUS_1 = require("../../enums/ORDER_STATUS");
let EnumORDER_STATUSFilter = class EnumORDER_STATUSFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ORDER_STATUS_1.ORDER_STATUS, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumORDER_STATUSFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ORDER_STATUS_1.ORDER_STATUS], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumORDER_STATUSFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ORDER_STATUS_1.ORDER_STATUS], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumORDER_STATUSFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumORDER_STATUSFilter_1.NestedEnumORDER_STATUSFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumORDER_STATUSFilter_1.NestedEnumORDER_STATUSFilter)
], EnumORDER_STATUSFilter.prototype, "not", void 0);
EnumORDER_STATUSFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumORDER_STATUSFilter", {
        isAbstract: true
    })
], EnumORDER_STATUSFilter);
exports.EnumORDER_STATUSFilter = EnumORDER_STATUSFilter;
