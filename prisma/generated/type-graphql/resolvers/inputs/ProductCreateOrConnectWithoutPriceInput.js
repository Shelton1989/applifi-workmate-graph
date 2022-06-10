"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCreateOrConnectWithoutPriceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductCreateWithoutPriceInput_1 = require("../inputs/ProductCreateWithoutPriceInput");
const ProductWhereUniqueInput_1 = require("../inputs/ProductWhereUniqueInput");
let ProductCreateOrConnectWithoutPriceInput = class ProductCreateOrConnectWithoutPriceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductWhereUniqueInput_1.ProductWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductWhereUniqueInput_1.ProductWhereUniqueInput)
], ProductCreateOrConnectWithoutPriceInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreateWithoutPriceInput_1.ProductCreateWithoutPriceInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductCreateWithoutPriceInput_1.ProductCreateWithoutPriceInput)
], ProductCreateOrConnectWithoutPriceInput.prototype, "create", void 0);
ProductCreateOrConnectWithoutPriceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductCreateOrConnectWithoutPriceInput", {
        isAbstract: true
    })
], ProductCreateOrConnectWithoutPriceInput);
exports.ProductCreateOrConnectWithoutPriceInput = ProductCreateOrConnectWithoutPriceInput;
