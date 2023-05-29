"use strict";
var NestedEnumPLANFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumPLANFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PLAN_1 = require("../../enums/PLAN");
let NestedEnumPLANFilter = NestedEnumPLANFilter_1 = class NestedEnumPLANFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PLAN_1.PLAN, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumPLANFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PLAN_1.PLAN], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumPLANFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PLAN_1.PLAN], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumPLANFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumPLANFilter_1, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumPLANFilter)
], NestedEnumPLANFilter.prototype, "not", void 0);
NestedEnumPLANFilter = NestedEnumPLANFilter_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumPLANFilter", {
        isAbstract: true
    })
], NestedEnumPLANFilter);
exports.NestedEnumPLANFilter = NestedEnumPLANFilter;
