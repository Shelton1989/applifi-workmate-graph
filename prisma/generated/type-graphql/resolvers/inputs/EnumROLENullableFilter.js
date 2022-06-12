"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumROLENullableFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumROLENullableFilter_1 = require("../inputs/NestedEnumROLENullableFilter");
const ROLE_1 = require("../../enums/ROLE");
let EnumROLENullableFilter = class EnumROLENullableFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ROLE_1.ROLE, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumROLENullableFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ROLE_1.ROLE], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumROLENullableFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ROLE_1.ROLE], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumROLENullableFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumROLENullableFilter_1.NestedEnumROLENullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumROLENullableFilter_1.NestedEnumROLENullableFilter)
], EnumROLENullableFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], EnumROLENullableFilter.prototype, "isSet", void 0);
EnumROLENullableFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumROLENullableFilter", {
        isAbstract: true
    })
], EnumROLENullableFilter);
exports.EnumROLENullableFilter = EnumROLENullableFilter;
