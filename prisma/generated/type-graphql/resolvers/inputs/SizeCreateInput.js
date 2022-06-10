"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SizeCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderLineItemCreateNestedManyWithoutSelectedSizeInput_1 = require("../inputs/OrderLineItemCreateNestedManyWithoutSelectedSizeInput");
const ProductCreateNestedManyWithoutSizesInput_1 = require("../inputs/ProductCreateNestedManyWithoutSizesInput");
const SizeCreateproductIdsInput_1 = require("../inputs/SizeCreateproductIdsInput");
const SIZE_REGION_1 = require("../../enums/SIZE_REGION");
let SizeCreateInput = class SizeCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SizeCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SizeCreateInput.prototype, "value", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SIZE_REGION_1.SIZE_REGION, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SizeCreateInput.prototype, "region", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreateNestedManyWithoutSizesInput_1.ProductCreateNestedManyWithoutSizesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductCreateNestedManyWithoutSizesInput_1.ProductCreateNestedManyWithoutSizesInput)
], SizeCreateInput.prototype, "Products", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SizeCreateproductIdsInput_1.SizeCreateproductIdsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SizeCreateproductIdsInput_1.SizeCreateproductIdsInput)
], SizeCreateInput.prototype, "productIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemCreateNestedManyWithoutSelectedSizeInput_1.OrderLineItemCreateNestedManyWithoutSelectedSizeInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderLineItemCreateNestedManyWithoutSelectedSizeInput_1.OrderLineItemCreateNestedManyWithoutSelectedSizeInput)
], SizeCreateInput.prototype, "OrderLineItems", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], SizeCreateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], SizeCreateInput.prototype, "updatedAt", void 0);
SizeCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SizeCreateInput", {
        isAbstract: true
    })
], SizeCreateInput);
exports.SizeCreateInput = SizeCreateInput;
