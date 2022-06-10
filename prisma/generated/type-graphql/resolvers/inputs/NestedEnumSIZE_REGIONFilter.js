"use strict";
var NestedEnumSIZE_REGIONFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumSIZE_REGIONFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SIZE_REGION_1 = require("../../enums/SIZE_REGION");
let NestedEnumSIZE_REGIONFilter = NestedEnumSIZE_REGIONFilter_1 = class NestedEnumSIZE_REGIONFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SIZE_REGION_1.SIZE_REGION, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumSIZE_REGIONFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SIZE_REGION_1.SIZE_REGION], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumSIZE_REGIONFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SIZE_REGION_1.SIZE_REGION], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumSIZE_REGIONFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumSIZE_REGIONFilter_1, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumSIZE_REGIONFilter)
], NestedEnumSIZE_REGIONFilter.prototype, "not", void 0);
NestedEnumSIZE_REGIONFilter = NestedEnumSIZE_REGIONFilter_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumSIZE_REGIONFilter", {
        isAbstract: true
    })
], NestedEnumSIZE_REGIONFilter);
exports.NestedEnumSIZE_REGIONFilter = NestedEnumSIZE_REGIONFilter;
