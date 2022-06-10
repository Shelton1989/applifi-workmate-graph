"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SizeCreateWithoutProductsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderLineItemCreateNestedManyWithoutSelectedSizeInput_1 = require("../inputs/OrderLineItemCreateNestedManyWithoutSelectedSizeInput");
const SizeCreateproductIdsInput_1 = require("../inputs/SizeCreateproductIdsInput");
const SIZE_REGION_1 = require("../../enums/SIZE_REGION");
let SizeCreateWithoutProductsInput = class SizeCreateWithoutProductsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SizeCreateWithoutProductsInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SizeCreateWithoutProductsInput.prototype, "value", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SIZE_REGION_1.SIZE_REGION, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SizeCreateWithoutProductsInput.prototype, "region", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SizeCreateproductIdsInput_1.SizeCreateproductIdsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SizeCreateproductIdsInput_1.SizeCreateproductIdsInput)
], SizeCreateWithoutProductsInput.prototype, "productIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemCreateNestedManyWithoutSelectedSizeInput_1.OrderLineItemCreateNestedManyWithoutSelectedSizeInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderLineItemCreateNestedManyWithoutSelectedSizeInput_1.OrderLineItemCreateNestedManyWithoutSelectedSizeInput)
], SizeCreateWithoutProductsInput.prototype, "OrderLineItems", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], SizeCreateWithoutProductsInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], SizeCreateWithoutProductsInput.prototype, "updatedAt", void 0);
SizeCreateWithoutProductsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SizeCreateWithoutProductsInput", {
        isAbstract: true
    })
], SizeCreateWithoutProductsInput);
exports.SizeCreateWithoutProductsInput = SizeCreateWithoutProductsInput;
