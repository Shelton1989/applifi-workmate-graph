"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCreateNestedManyWithoutPriceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductCreateManyPriceInputEnvelope_1 = require("../inputs/ProductCreateManyPriceInputEnvelope");
const ProductCreateOrConnectWithoutPriceInput_1 = require("../inputs/ProductCreateOrConnectWithoutPriceInput");
const ProductCreateWithoutPriceInput_1 = require("../inputs/ProductCreateWithoutPriceInput");
const ProductWhereUniqueInput_1 = require("../inputs/ProductWhereUniqueInput");
let ProductCreateNestedManyWithoutPriceInput = class ProductCreateNestedManyWithoutPriceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductCreateWithoutPriceInput_1.ProductCreateWithoutPriceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductCreateNestedManyWithoutPriceInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductCreateOrConnectWithoutPriceInput_1.ProductCreateOrConnectWithoutPriceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductCreateNestedManyWithoutPriceInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreateManyPriceInputEnvelope_1.ProductCreateManyPriceInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductCreateManyPriceInputEnvelope_1.ProductCreateManyPriceInputEnvelope)
], ProductCreateNestedManyWithoutPriceInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductWhereUniqueInput_1.ProductWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductCreateNestedManyWithoutPriceInput.prototype, "connect", void 0);
ProductCreateNestedManyWithoutPriceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductCreateNestedManyWithoutPriceInput", {
        isAbstract: true
    })
], ProductCreateNestedManyWithoutPriceInput);
exports.ProductCreateNestedManyWithoutPriceInput = ProductCreateNestedManyWithoutPriceInput;
