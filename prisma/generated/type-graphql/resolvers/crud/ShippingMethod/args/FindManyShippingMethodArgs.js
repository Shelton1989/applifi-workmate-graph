"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyShippingMethodArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ShippingMethodOrderByWithRelationInput_1 = require("../../../inputs/ShippingMethodOrderByWithRelationInput");
const ShippingMethodWhereInput_1 = require("../../../inputs/ShippingMethodWhereInput");
const ShippingMethodWhereUniqueInput_1 = require("../../../inputs/ShippingMethodWhereUniqueInput");
const ShippingMethodScalarFieldEnum_1 = require("../../../../enums/ShippingMethodScalarFieldEnum");
let FindManyShippingMethodArgs = class FindManyShippingMethodArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShippingMethodWhereInput_1.ShippingMethodWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShippingMethodWhereInput_1.ShippingMethodWhereInput)
], FindManyShippingMethodArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ShippingMethodOrderByWithRelationInput_1.ShippingMethodOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyShippingMethodArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShippingMethodWhereUniqueInput_1.ShippingMethodWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShippingMethodWhereUniqueInput_1.ShippingMethodWhereUniqueInput)
], FindManyShippingMethodArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyShippingMethodArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyShippingMethodArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ShippingMethodScalarFieldEnum_1.ShippingMethodScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyShippingMethodArgs.prototype, "distinct", void 0);
FindManyShippingMethodArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyShippingMethodArgs);
exports.FindManyShippingMethodArgs = FindManyShippingMethodArgs;
