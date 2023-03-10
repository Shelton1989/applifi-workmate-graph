"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumMEAL_TYPESNullableListFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MEAL_TYPES_1 = require("../../enums/MEAL_TYPES");
let EnumMEAL_TYPESNullableListFilter = class EnumMEAL_TYPESNullableListFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MEAL_TYPES_1.MEAL_TYPES], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumMEAL_TYPESNullableListFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MEAL_TYPES_1.MEAL_TYPES, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumMEAL_TYPESNullableListFilter.prototype, "has", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MEAL_TYPES_1.MEAL_TYPES], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumMEAL_TYPESNullableListFilter.prototype, "hasEvery", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MEAL_TYPES_1.MEAL_TYPES], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumMEAL_TYPESNullableListFilter.prototype, "hasSome", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], EnumMEAL_TYPESNullableListFilter.prototype, "isEmpty", void 0);
EnumMEAL_TYPESNullableListFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumMEAL_TYPESNullableListFilter", {
        isAbstract: true
    })
], EnumMEAL_TYPESNullableListFilter);
exports.EnumMEAL_TYPESNullableListFilter = EnumMEAL_TYPESNullableListFilter;
