"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductUpsertWithoutOrderLineItemsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductCreateWithoutOrderLineItemsInput_1 = require("../inputs/ProductCreateWithoutOrderLineItemsInput");
const ProductUpdateWithoutOrderLineItemsInput_1 = require("../inputs/ProductUpdateWithoutOrderLineItemsInput");
let ProductUpsertWithoutOrderLineItemsInput = class ProductUpsertWithoutOrderLineItemsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductUpdateWithoutOrderLineItemsInput_1.ProductUpdateWithoutOrderLineItemsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductUpdateWithoutOrderLineItemsInput_1.ProductUpdateWithoutOrderLineItemsInput)
], ProductUpsertWithoutOrderLineItemsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreateWithoutOrderLineItemsInput_1.ProductCreateWithoutOrderLineItemsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductCreateWithoutOrderLineItemsInput_1.ProductCreateWithoutOrderLineItemsInput)
], ProductUpsertWithoutOrderLineItemsInput.prototype, "create", void 0);
ProductUpsertWithoutOrderLineItemsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductUpsertWithoutOrderLineItemsInput", {
        isAbstract: true
    })
], ProductUpsertWithoutOrderLineItemsInput);
exports.ProductUpsertWithoutOrderLineItemsInput = ProductUpsertWithoutOrderLineItemsInput;
