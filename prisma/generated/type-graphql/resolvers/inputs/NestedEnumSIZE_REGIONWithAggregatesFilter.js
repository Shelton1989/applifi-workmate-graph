"use strict";
var NestedEnumSIZE_REGIONWithAggregatesFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumSIZE_REGIONWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumSIZE_REGIONFilter_1 = require("../inputs/NestedEnumSIZE_REGIONFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const SIZE_REGION_1 = require("../../enums/SIZE_REGION");
let NestedEnumSIZE_REGIONWithAggregatesFilter = NestedEnumSIZE_REGIONWithAggregatesFilter_1 = class NestedEnumSIZE_REGIONWithAggregatesFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SIZE_REGION_1.SIZE_REGION, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumSIZE_REGIONWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SIZE_REGION_1.SIZE_REGION], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumSIZE_REGIONWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SIZE_REGION_1.SIZE_REGION], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumSIZE_REGIONWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumSIZE_REGIONWithAggregatesFilter_1, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumSIZE_REGIONWithAggregatesFilter)
], NestedEnumSIZE_REGIONWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], NestedEnumSIZE_REGIONWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumSIZE_REGIONFilter_1.NestedEnumSIZE_REGIONFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumSIZE_REGIONFilter_1.NestedEnumSIZE_REGIONFilter)
], NestedEnumSIZE_REGIONWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumSIZE_REGIONFilter_1.NestedEnumSIZE_REGIONFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumSIZE_REGIONFilter_1.NestedEnumSIZE_REGIONFilter)
], NestedEnumSIZE_REGIONWithAggregatesFilter.prototype, "_max", void 0);
NestedEnumSIZE_REGIONWithAggregatesFilter = NestedEnumSIZE_REGIONWithAggregatesFilter_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumSIZE_REGIONWithAggregatesFilter", {
        isAbstract: true
    })
], NestedEnumSIZE_REGIONWithAggregatesFilter);
exports.NestedEnumSIZE_REGIONWithAggregatesFilter = NestedEnumSIZE_REGIONWithAggregatesFilter;
