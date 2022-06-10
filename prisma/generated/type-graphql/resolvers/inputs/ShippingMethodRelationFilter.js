"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShippingMethodRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ShippingMethodWhereInput_1 = require("../inputs/ShippingMethodWhereInput");
let ShippingMethodRelationFilter = class ShippingMethodRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShippingMethodWhereInput_1.ShippingMethodWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShippingMethodWhereInput_1.ShippingMethodWhereInput)
], ShippingMethodRelationFilter.prototype, "is", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShippingMethodWhereInput_1.ShippingMethodWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShippingMethodWhereInput_1.ShippingMethodWhereInput)
], ShippingMethodRelationFilter.prototype, "isNot", void 0);
ShippingMethodRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("ShippingMethodRelationFilter", {
        isAbstract: true
    })
], ShippingMethodRelationFilter);
exports.ShippingMethodRelationFilter = ShippingMethodRelationFilter;
