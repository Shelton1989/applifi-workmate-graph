"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SizeCreateWithoutOrderLineItemsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductCreateNestedManyWithoutSizesInput_1 = require("../inputs/ProductCreateNestedManyWithoutSizesInput");
const SizeCreateproductIdsInput_1 = require("../inputs/SizeCreateproductIdsInput");
const SIZE_REGION_1 = require("../../enums/SIZE_REGION");
let SizeCreateWithoutOrderLineItemsInput = class SizeCreateWithoutOrderLineItemsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SizeCreateWithoutOrderLineItemsInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SizeCreateWithoutOrderLineItemsInput.prototype, "value", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SIZE_REGION_1.SIZE_REGION, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SizeCreateWithoutOrderLineItemsInput.prototype, "region", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreateNestedManyWithoutSizesInput_1.ProductCreateNestedManyWithoutSizesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductCreateNestedManyWithoutSizesInput_1.ProductCreateNestedManyWithoutSizesInput)
], SizeCreateWithoutOrderLineItemsInput.prototype, "Products", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SizeCreateproductIdsInput_1.SizeCreateproductIdsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SizeCreateproductIdsInput_1.SizeCreateproductIdsInput)
], SizeCreateWithoutOrderLineItemsInput.prototype, "productIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], SizeCreateWithoutOrderLineItemsInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], SizeCreateWithoutOrderLineItemsInput.prototype, "updatedAt", void 0);
SizeCreateWithoutOrderLineItemsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SizeCreateWithoutOrderLineItemsInput", {
        isAbstract: true
    })
], SizeCreateWithoutOrderLineItemsInput);
exports.SizeCreateWithoutOrderLineItemsInput = SizeCreateWithoutOrderLineItemsInput;
