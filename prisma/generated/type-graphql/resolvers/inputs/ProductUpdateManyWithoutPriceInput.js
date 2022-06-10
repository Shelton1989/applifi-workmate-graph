"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductUpdateManyWithoutPriceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductCreateManyPriceInputEnvelope_1 = require("../inputs/ProductCreateManyPriceInputEnvelope");
const ProductCreateOrConnectWithoutPriceInput_1 = require("../inputs/ProductCreateOrConnectWithoutPriceInput");
const ProductCreateWithoutPriceInput_1 = require("../inputs/ProductCreateWithoutPriceInput");
const ProductScalarWhereInput_1 = require("../inputs/ProductScalarWhereInput");
const ProductUpdateManyWithWhereWithoutPriceInput_1 = require("../inputs/ProductUpdateManyWithWhereWithoutPriceInput");
const ProductUpdateWithWhereUniqueWithoutPriceInput_1 = require("../inputs/ProductUpdateWithWhereUniqueWithoutPriceInput");
const ProductUpsertWithWhereUniqueWithoutPriceInput_1 = require("../inputs/ProductUpsertWithWhereUniqueWithoutPriceInput");
const ProductWhereUniqueInput_1 = require("../inputs/ProductWhereUniqueInput");
let ProductUpdateManyWithoutPriceInput = class ProductUpdateManyWithoutPriceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductCreateWithoutPriceInput_1.ProductCreateWithoutPriceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductUpdateManyWithoutPriceInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductCreateOrConnectWithoutPriceInput_1.ProductCreateOrConnectWithoutPriceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductUpdateManyWithoutPriceInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductUpsertWithWhereUniqueWithoutPriceInput_1.ProductUpsertWithWhereUniqueWithoutPriceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductUpdateManyWithoutPriceInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreateManyPriceInputEnvelope_1.ProductCreateManyPriceInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductCreateManyPriceInputEnvelope_1.ProductCreateManyPriceInputEnvelope)
], ProductUpdateManyWithoutPriceInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductWhereUniqueInput_1.ProductWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductUpdateManyWithoutPriceInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductWhereUniqueInput_1.ProductWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductUpdateManyWithoutPriceInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductWhereUniqueInput_1.ProductWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductUpdateManyWithoutPriceInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductWhereUniqueInput_1.ProductWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductUpdateManyWithoutPriceInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductUpdateWithWhereUniqueWithoutPriceInput_1.ProductUpdateWithWhereUniqueWithoutPriceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductUpdateManyWithoutPriceInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductUpdateManyWithWhereWithoutPriceInput_1.ProductUpdateManyWithWhereWithoutPriceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductUpdateManyWithoutPriceInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductScalarWhereInput_1.ProductScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductUpdateManyWithoutPriceInput.prototype, "deleteMany", void 0);
ProductUpdateManyWithoutPriceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductUpdateManyWithoutPriceInput", {
        isAbstract: true
    })
], ProductUpdateManyWithoutPriceInput);
exports.ProductUpdateManyWithoutPriceInput = ProductUpdateManyWithoutPriceInput;
