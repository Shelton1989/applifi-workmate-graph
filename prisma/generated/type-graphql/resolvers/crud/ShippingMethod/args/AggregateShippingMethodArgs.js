"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateShippingMethodArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ShippingMethodOrderByWithRelationInput_1 = require("../../../inputs/ShippingMethodOrderByWithRelationInput");
const ShippingMethodWhereInput_1 = require("../../../inputs/ShippingMethodWhereInput");
const ShippingMethodWhereUniqueInput_1 = require("../../../inputs/ShippingMethodWhereUniqueInput");
let AggregateShippingMethodArgs = class AggregateShippingMethodArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShippingMethodWhereInput_1.ShippingMethodWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShippingMethodWhereInput_1.ShippingMethodWhereInput)
], AggregateShippingMethodArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ShippingMethodOrderByWithRelationInput_1.ShippingMethodOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateShippingMethodArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShippingMethodWhereUniqueInput_1.ShippingMethodWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShippingMethodWhereUniqueInput_1.ShippingMethodWhereUniqueInput)
], AggregateShippingMethodArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateShippingMethodArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateShippingMethodArgs.prototype, "skip", void 0);
AggregateShippingMethodArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateShippingMethodArgs);
exports.AggregateShippingMethodArgs = AggregateShippingMethodArgs;
