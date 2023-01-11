"use strict";
var NestedEnumPUBLISH_STATUSFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumPUBLISH_STATUSFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PUBLISH_STATUS_1 = require("../../enums/PUBLISH_STATUS");
let NestedEnumPUBLISH_STATUSFilter = NestedEnumPUBLISH_STATUSFilter_1 = class NestedEnumPUBLISH_STATUSFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PUBLISH_STATUS_1.PUBLISH_STATUS, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumPUBLISH_STATUSFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PUBLISH_STATUS_1.PUBLISH_STATUS], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumPUBLISH_STATUSFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PUBLISH_STATUS_1.PUBLISH_STATUS], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumPUBLISH_STATUSFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumPUBLISH_STATUSFilter_1, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumPUBLISH_STATUSFilter)
], NestedEnumPUBLISH_STATUSFilter.prototype, "not", void 0);
NestedEnumPUBLISH_STATUSFilter = NestedEnumPUBLISH_STATUSFilter_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumPUBLISH_STATUSFilter", {
        isAbstract: true
    })
], NestedEnumPUBLISH_STATUSFilter);
exports.NestedEnumPUBLISH_STATUSFilter = NestedEnumPUBLISH_STATUSFilter;
