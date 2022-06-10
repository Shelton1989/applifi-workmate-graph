"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShippingMethodListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ShippingMethodWhereInput_1 = require("../inputs/ShippingMethodWhereInput");
let ShippingMethodListRelationFilter = class ShippingMethodListRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShippingMethodWhereInput_1.ShippingMethodWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShippingMethodWhereInput_1.ShippingMethodWhereInput)
], ShippingMethodListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShippingMethodWhereInput_1.ShippingMethodWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShippingMethodWhereInput_1.ShippingMethodWhereInput)
], ShippingMethodListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShippingMethodWhereInput_1.ShippingMethodWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShippingMethodWhereInput_1.ShippingMethodWhereInput)
], ShippingMethodListRelationFilter.prototype, "none", void 0);
ShippingMethodListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("ShippingMethodListRelationFilter", {
        isAbstract: true
    })
], ShippingMethodListRelationFilter);
exports.ShippingMethodListRelationFilter = ShippingMethodListRelationFilter;
