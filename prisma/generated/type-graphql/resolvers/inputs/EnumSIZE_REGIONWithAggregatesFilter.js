"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumSIZE_REGIONWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumSIZE_REGIONFilter_1 = require("../inputs/NestedEnumSIZE_REGIONFilter");
const NestedEnumSIZE_REGIONWithAggregatesFilter_1 = require("../inputs/NestedEnumSIZE_REGIONWithAggregatesFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const SIZE_REGION_1 = require("../../enums/SIZE_REGION");
let EnumSIZE_REGIONWithAggregatesFilter = class EnumSIZE_REGIONWithAggregatesFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SIZE_REGION_1.SIZE_REGION, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumSIZE_REGIONWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SIZE_REGION_1.SIZE_REGION], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumSIZE_REGIONWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SIZE_REGION_1.SIZE_REGION], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumSIZE_REGIONWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumSIZE_REGIONWithAggregatesFilter_1.NestedEnumSIZE_REGIONWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumSIZE_REGIONWithAggregatesFilter_1.NestedEnumSIZE_REGIONWithAggregatesFilter)
], EnumSIZE_REGIONWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], EnumSIZE_REGIONWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumSIZE_REGIONFilter_1.NestedEnumSIZE_REGIONFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumSIZE_REGIONFilter_1.NestedEnumSIZE_REGIONFilter)
], EnumSIZE_REGIONWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumSIZE_REGIONFilter_1.NestedEnumSIZE_REGIONFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumSIZE_REGIONFilter_1.NestedEnumSIZE_REGIONFilter)
], EnumSIZE_REGIONWithAggregatesFilter.prototype, "_max", void 0);
EnumSIZE_REGIONWithAggregatesFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumSIZE_REGIONWithAggregatesFilter", {
        isAbstract: true
    })
], EnumSIZE_REGIONWithAggregatesFilter);
exports.EnumSIZE_REGIONWithAggregatesFilter = EnumSIZE_REGIONWithAggregatesFilter;
