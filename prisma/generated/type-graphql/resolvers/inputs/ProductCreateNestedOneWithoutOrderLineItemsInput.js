"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCreateNestedOneWithoutOrderLineItemsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductCreateOrConnectWithoutOrderLineItemsInput_1 = require("../inputs/ProductCreateOrConnectWithoutOrderLineItemsInput");
const ProductCreateWithoutOrderLineItemsInput_1 = require("../inputs/ProductCreateWithoutOrderLineItemsInput");
const ProductWhereUniqueInput_1 = require("../inputs/ProductWhereUniqueInput");
let ProductCreateNestedOneWithoutOrderLineItemsInput = class ProductCreateNestedOneWithoutOrderLineItemsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreateWithoutOrderLineItemsInput_1.ProductCreateWithoutOrderLineItemsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductCreateWithoutOrderLineItemsInput_1.ProductCreateWithoutOrderLineItemsInput)
], ProductCreateNestedOneWithoutOrderLineItemsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreateOrConnectWithoutOrderLineItemsInput_1.ProductCreateOrConnectWithoutOrderLineItemsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductCreateOrConnectWithoutOrderLineItemsInput_1.ProductCreateOrConnectWithoutOrderLineItemsInput)
], ProductCreateNestedOneWithoutOrderLineItemsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductWhereUniqueInput_1.ProductWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductWhereUniqueInput_1.ProductWhereUniqueInput)
], ProductCreateNestedOneWithoutOrderLineItemsInput.prototype, "connect", void 0);
ProductCreateNestedOneWithoutOrderLineItemsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductCreateNestedOneWithoutOrderLineItemsInput", {
        isAbstract: true
    })
], ProductCreateNestedOneWithoutOrderLineItemsInput);
exports.ProductCreateNestedOneWithoutOrderLineItemsInput = ProductCreateNestedOneWithoutOrderLineItemsInput;
