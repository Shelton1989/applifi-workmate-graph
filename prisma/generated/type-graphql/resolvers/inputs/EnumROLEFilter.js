"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumROLEFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumROLEFilter_1 = require("../inputs/NestedEnumROLEFilter");
const ROLE_1 = require("../../enums/ROLE");
let EnumROLEFilter = class EnumROLEFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ROLE_1.ROLE, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumROLEFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ROLE_1.ROLE], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumROLEFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ROLE_1.ROLE], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumROLEFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumROLEFilter_1.NestedEnumROLEFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumROLEFilter_1.NestedEnumROLEFilter)
], EnumROLEFilter.prototype, "not", void 0);
EnumROLEFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumROLEFilter", {
        isAbstract: true
    })
], EnumROLEFilter);
exports.EnumROLEFilter = EnumROLEFilter;
