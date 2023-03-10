"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumMEAL_KINDNullableListFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MEAL_KIND_1 = require("../../enums/MEAL_KIND");
let EnumMEAL_KINDNullableListFilter = class EnumMEAL_KINDNullableListFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MEAL_KIND_1.MEAL_KIND], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumMEAL_KINDNullableListFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MEAL_KIND_1.MEAL_KIND, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumMEAL_KINDNullableListFilter.prototype, "has", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MEAL_KIND_1.MEAL_KIND], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumMEAL_KINDNullableListFilter.prototype, "hasEvery", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MEAL_KIND_1.MEAL_KIND], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumMEAL_KINDNullableListFilter.prototype, "hasSome", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], EnumMEAL_KINDNullableListFilter.prototype, "isEmpty", void 0);
EnumMEAL_KINDNullableListFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumMEAL_KINDNullableListFilter", {
        isAbstract: true
    })
], EnumMEAL_KINDNullableListFilter);
exports.EnumMEAL_KINDNullableListFilter = EnumMEAL_KINDNullableListFilter;
