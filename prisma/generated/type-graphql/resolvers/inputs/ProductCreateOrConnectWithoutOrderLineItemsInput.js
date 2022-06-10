"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCreateOrConnectWithoutOrderLineItemsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductCreateWithoutOrderLineItemsInput_1 = require("../inputs/ProductCreateWithoutOrderLineItemsInput");
const ProductWhereUniqueInput_1 = require("../inputs/ProductWhereUniqueInput");
let ProductCreateOrConnectWithoutOrderLineItemsInput = class ProductCreateOrConnectWithoutOrderLineItemsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductWhereUniqueInput_1.ProductWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductWhereUniqueInput_1.ProductWhereUniqueInput)
], ProductCreateOrConnectWithoutOrderLineItemsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreateWithoutOrderLineItemsInput_1.ProductCreateWithoutOrderLineItemsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductCreateWithoutOrderLineItemsInput_1.ProductCreateWithoutOrderLineItemsInput)
], ProductCreateOrConnectWithoutOrderLineItemsInput.prototype, "create", void 0);
ProductCreateOrConnectWithoutOrderLineItemsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductCreateOrConnectWithoutOrderLineItemsInput", {
        isAbstract: true
    })
], ProductCreateOrConnectWithoutOrderLineItemsInput);
exports.ProductCreateOrConnectWithoutOrderLineItemsInput = ProductCreateOrConnectWithoutOrderLineItemsInput;
