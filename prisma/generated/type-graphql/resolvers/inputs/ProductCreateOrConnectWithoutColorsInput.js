"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCreateOrConnectWithoutColorsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductCreateWithoutColorsInput_1 = require("../inputs/ProductCreateWithoutColorsInput");
const ProductWhereUniqueInput_1 = require("../inputs/ProductWhereUniqueInput");
let ProductCreateOrConnectWithoutColorsInput = class ProductCreateOrConnectWithoutColorsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductWhereUniqueInput_1.ProductWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductWhereUniqueInput_1.ProductWhereUniqueInput)
], ProductCreateOrConnectWithoutColorsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreateWithoutColorsInput_1.ProductCreateWithoutColorsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductCreateWithoutColorsInput_1.ProductCreateWithoutColorsInput)
], ProductCreateOrConnectWithoutColorsInput.prototype, "create", void 0);
ProductCreateOrConnectWithoutColorsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductCreateOrConnectWithoutColorsInput", {
        isAbstract: true
    })
], ProductCreateOrConnectWithoutColorsInput);
exports.ProductCreateOrConnectWithoutColorsInput = ProductCreateOrConnectWithoutColorsInput;
