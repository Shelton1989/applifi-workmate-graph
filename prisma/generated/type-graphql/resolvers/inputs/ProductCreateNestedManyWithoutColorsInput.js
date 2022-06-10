"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCreateNestedManyWithoutColorsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductCreateOrConnectWithoutColorsInput_1 = require("../inputs/ProductCreateOrConnectWithoutColorsInput");
const ProductCreateWithoutColorsInput_1 = require("../inputs/ProductCreateWithoutColorsInput");
const ProductWhereUniqueInput_1 = require("../inputs/ProductWhereUniqueInput");
let ProductCreateNestedManyWithoutColorsInput = class ProductCreateNestedManyWithoutColorsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductCreateWithoutColorsInput_1.ProductCreateWithoutColorsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductCreateNestedManyWithoutColorsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductCreateOrConnectWithoutColorsInput_1.ProductCreateOrConnectWithoutColorsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductCreateNestedManyWithoutColorsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductWhereUniqueInput_1.ProductWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductCreateNestedManyWithoutColorsInput.prototype, "connect", void 0);
ProductCreateNestedManyWithoutColorsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductCreateNestedManyWithoutColorsInput", {
        isAbstract: true
    })
], ProductCreateNestedManyWithoutColorsInput);
exports.ProductCreateNestedManyWithoutColorsInput = ProductCreateNestedManyWithoutColorsInput;
