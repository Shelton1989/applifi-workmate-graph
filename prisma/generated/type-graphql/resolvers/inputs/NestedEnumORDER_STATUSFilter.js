"use strict";
var NestedEnumORDER_STATUSFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumORDER_STATUSFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ORDER_STATUS_1 = require("../../enums/ORDER_STATUS");
let NestedEnumORDER_STATUSFilter = NestedEnumORDER_STATUSFilter_1 = class NestedEnumORDER_STATUSFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ORDER_STATUS_1.ORDER_STATUS, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumORDER_STATUSFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ORDER_STATUS_1.ORDER_STATUS], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumORDER_STATUSFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ORDER_STATUS_1.ORDER_STATUS], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumORDER_STATUSFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumORDER_STATUSFilter_1, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumORDER_STATUSFilter)
], NestedEnumORDER_STATUSFilter.prototype, "not", void 0);
NestedEnumORDER_STATUSFilter = NestedEnumORDER_STATUSFilter_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumORDER_STATUSFilter", {
        isAbstract: true
    })
], NestedEnumORDER_STATUSFilter);
exports.NestedEnumORDER_STATUSFilter = NestedEnumORDER_STATUSFilter;
