"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCreateOrConnectWithoutInventoryInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductCreateWithoutInventoryInput_1 = require("../inputs/ProductCreateWithoutInventoryInput");
const ProductWhereUniqueInput_1 = require("../inputs/ProductWhereUniqueInput");
let ProductCreateOrConnectWithoutInventoryInput = class ProductCreateOrConnectWithoutInventoryInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductWhereUniqueInput_1.ProductWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductWhereUniqueInput_1.ProductWhereUniqueInput)
], ProductCreateOrConnectWithoutInventoryInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreateWithoutInventoryInput_1.ProductCreateWithoutInventoryInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductCreateWithoutInventoryInput_1.ProductCreateWithoutInventoryInput)
], ProductCreateOrConnectWithoutInventoryInput.prototype, "create", void 0);
ProductCreateOrConnectWithoutInventoryInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductCreateOrConnectWithoutInventoryInput", {
        isAbstract: true
    })
], ProductCreateOrConnectWithoutInventoryInput);
exports.ProductCreateOrConnectWithoutInventoryInput = ProductCreateOrConnectWithoutInventoryInput;
