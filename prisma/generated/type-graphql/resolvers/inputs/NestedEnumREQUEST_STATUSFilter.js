"use strict";
var NestedEnumREQUEST_STATUSFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumREQUEST_STATUSFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const REQUEST_STATUS_1 = require("../../enums/REQUEST_STATUS");
let NestedEnumREQUEST_STATUSFilter = NestedEnumREQUEST_STATUSFilter_1 = class NestedEnumREQUEST_STATUSFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => REQUEST_STATUS_1.REQUEST_STATUS, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumREQUEST_STATUSFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [REQUEST_STATUS_1.REQUEST_STATUS], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumREQUEST_STATUSFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [REQUEST_STATUS_1.REQUEST_STATUS], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumREQUEST_STATUSFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumREQUEST_STATUSFilter_1, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumREQUEST_STATUSFilter)
], NestedEnumREQUEST_STATUSFilter.prototype, "not", void 0);
NestedEnumREQUEST_STATUSFilter = NestedEnumREQUEST_STATUSFilter_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumREQUEST_STATUSFilter", {
        isAbstract: true
    })
], NestedEnumREQUEST_STATUSFilter);
exports.NestedEnumREQUEST_STATUSFilter = NestedEnumREQUEST_STATUSFilter;
