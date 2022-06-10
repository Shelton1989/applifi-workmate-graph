"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductUpsertWithWhereUniqueWithoutInventoryInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductCreateWithoutInventoryInput_1 = require("../inputs/ProductCreateWithoutInventoryInput");
const ProductUpdateWithoutInventoryInput_1 = require("../inputs/ProductUpdateWithoutInventoryInput");
const ProductWhereUniqueInput_1 = require("../inputs/ProductWhereUniqueInput");
let ProductUpsertWithWhereUniqueWithoutInventoryInput = class ProductUpsertWithWhereUniqueWithoutInventoryInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductWhereUniqueInput_1.ProductWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductWhereUniqueInput_1.ProductWhereUniqueInput)
], ProductUpsertWithWhereUniqueWithoutInventoryInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductUpdateWithoutInventoryInput_1.ProductUpdateWithoutInventoryInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductUpdateWithoutInventoryInput_1.ProductUpdateWithoutInventoryInput)
], ProductUpsertWithWhereUniqueWithoutInventoryInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreateWithoutInventoryInput_1.ProductCreateWithoutInventoryInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductCreateWithoutInventoryInput_1.ProductCreateWithoutInventoryInput)
], ProductUpsertWithWhereUniqueWithoutInventoryInput.prototype, "create", void 0);
ProductUpsertWithWhereUniqueWithoutInventoryInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductUpsertWithWhereUniqueWithoutInventoryInput", {
        isAbstract: true
    })
], ProductUpsertWithWhereUniqueWithoutInventoryInput);
exports.ProductUpsertWithWhereUniqueWithoutInventoryInput = ProductUpsertWithWhereUniqueWithoutInventoryInput;
