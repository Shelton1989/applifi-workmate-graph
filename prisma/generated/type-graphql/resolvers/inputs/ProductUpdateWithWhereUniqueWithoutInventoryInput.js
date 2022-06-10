"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductUpdateWithWhereUniqueWithoutInventoryInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductUpdateWithoutInventoryInput_1 = require("../inputs/ProductUpdateWithoutInventoryInput");
const ProductWhereUniqueInput_1 = require("../inputs/ProductWhereUniqueInput");
let ProductUpdateWithWhereUniqueWithoutInventoryInput = class ProductUpdateWithWhereUniqueWithoutInventoryInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductWhereUniqueInput_1.ProductWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductWhereUniqueInput_1.ProductWhereUniqueInput)
], ProductUpdateWithWhereUniqueWithoutInventoryInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductUpdateWithoutInventoryInput_1.ProductUpdateWithoutInventoryInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductUpdateWithoutInventoryInput_1.ProductUpdateWithoutInventoryInput)
], ProductUpdateWithWhereUniqueWithoutInventoryInput.prototype, "data", void 0);
ProductUpdateWithWhereUniqueWithoutInventoryInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductUpdateWithWhereUniqueWithoutInventoryInput", {
        isAbstract: true
    })
], ProductUpdateWithWhereUniqueWithoutInventoryInput);
exports.ProductUpdateWithWhereUniqueWithoutInventoryInput = ProductUpdateWithWhereUniqueWithoutInventoryInput;
