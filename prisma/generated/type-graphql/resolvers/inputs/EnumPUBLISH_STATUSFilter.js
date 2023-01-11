"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumPUBLISH_STATUSFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumPUBLISH_STATUSFilter_1 = require("../inputs/NestedEnumPUBLISH_STATUSFilter");
const PUBLISH_STATUS_1 = require("../../enums/PUBLISH_STATUS");
let EnumPUBLISH_STATUSFilter = class EnumPUBLISH_STATUSFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PUBLISH_STATUS_1.PUBLISH_STATUS, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumPUBLISH_STATUSFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PUBLISH_STATUS_1.PUBLISH_STATUS], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumPUBLISH_STATUSFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PUBLISH_STATUS_1.PUBLISH_STATUS], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumPUBLISH_STATUSFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumPUBLISH_STATUSFilter_1.NestedEnumPUBLISH_STATUSFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumPUBLISH_STATUSFilter_1.NestedEnumPUBLISH_STATUSFilter)
], EnumPUBLISH_STATUSFilter.prototype, "not", void 0);
EnumPUBLISH_STATUSFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumPUBLISH_STATUSFilter", {
        isAbstract: true
    })
], EnumPUBLISH_STATUSFilter);
exports.EnumPUBLISH_STATUSFilter = EnumPUBLISH_STATUSFilter;
