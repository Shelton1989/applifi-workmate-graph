"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstShippingMethodArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ShippingMethodOrderByWithRelationInput_1 = require("../../../inputs/ShippingMethodOrderByWithRelationInput");
const ShippingMethodWhereInput_1 = require("../../../inputs/ShippingMethodWhereInput");
const ShippingMethodWhereUniqueInput_1 = require("../../../inputs/ShippingMethodWhereUniqueInput");
const ShippingMethodScalarFieldEnum_1 = require("../../../../enums/ShippingMethodScalarFieldEnum");
let FindFirstShippingMethodArgs = class FindFirstShippingMethodArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShippingMethodWhereInput_1.ShippingMethodWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShippingMethodWhereInput_1.ShippingMethodWhereInput)
], FindFirstShippingMethodArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ShippingMethodOrderByWithRelationInput_1.ShippingMethodOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstShippingMethodArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShippingMethodWhereUniqueInput_1.ShippingMethodWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShippingMethodWhereUniqueInput_1.ShippingMethodWhereUniqueInput)
], FindFirstShippingMethodArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstShippingMethodArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstShippingMethodArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ShippingMethodScalarFieldEnum_1.ShippingMethodScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstShippingMethodArgs.prototype, "distinct", void 0);
FindFirstShippingMethodArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstShippingMethodArgs);
exports.FindFirstShippingMethodArgs = FindFirstShippingMethodArgs;
