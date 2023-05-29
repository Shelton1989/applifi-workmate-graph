"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumPLANFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumPLANFilter_1 = require("../inputs/NestedEnumPLANFilter");
const PLAN_1 = require("../../enums/PLAN");
let EnumPLANFilter = class EnumPLANFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PLAN_1.PLAN, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumPLANFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PLAN_1.PLAN], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumPLANFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PLAN_1.PLAN], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumPLANFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumPLANFilter_1.NestedEnumPLANFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumPLANFilter_1.NestedEnumPLANFilter)
], EnumPLANFilter.prototype, "not", void 0);
EnumPLANFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumPLANFilter", {
        isAbstract: true
    })
], EnumPLANFilter);
exports.EnumPLANFilter = EnumPLANFilter;
