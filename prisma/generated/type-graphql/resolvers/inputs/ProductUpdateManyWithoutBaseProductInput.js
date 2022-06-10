"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductUpdateManyWithoutBaseProductInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductCreateManyBaseProductInputEnvelope_1 = require("../inputs/ProductCreateManyBaseProductInputEnvelope");
const ProductCreateOrConnectWithoutBaseProductInput_1 = require("../inputs/ProductCreateOrConnectWithoutBaseProductInput");
const ProductCreateWithoutBaseProductInput_1 = require("../inputs/ProductCreateWithoutBaseProductInput");
const ProductScalarWhereInput_1 = require("../inputs/ProductScalarWhereInput");
const ProductUpdateManyWithWhereWithoutBaseProductInput_1 = require("../inputs/ProductUpdateManyWithWhereWithoutBaseProductInput");
const ProductUpdateWithWhereUniqueWithoutBaseProductInput_1 = require("../inputs/ProductUpdateWithWhereUniqueWithoutBaseProductInput");
const ProductUpsertWithWhereUniqueWithoutBaseProductInput_1 = require("../inputs/ProductUpsertWithWhereUniqueWithoutBaseProductInput");
const ProductWhereUniqueInput_1 = require("../inputs/ProductWhereUniqueInput");
let ProductUpdateManyWithoutBaseProductInput = class ProductUpdateManyWithoutBaseProductInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductCreateWithoutBaseProductInput_1.ProductCreateWithoutBaseProductInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductUpdateManyWithoutBaseProductInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductCreateOrConnectWithoutBaseProductInput_1.ProductCreateOrConnectWithoutBaseProductInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductUpdateManyWithoutBaseProductInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductUpsertWithWhereUniqueWithoutBaseProductInput_1.ProductUpsertWithWhereUniqueWithoutBaseProductInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductUpdateManyWithoutBaseProductInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreateManyBaseProductInputEnvelope_1.ProductCreateManyBaseProductInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductCreateManyBaseProductInputEnvelope_1.ProductCreateManyBaseProductInputEnvelope)
], ProductUpdateManyWithoutBaseProductInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductWhereUniqueInput_1.ProductWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductUpdateManyWithoutBaseProductInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductWhereUniqueInput_1.ProductWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductUpdateManyWithoutBaseProductInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductWhereUniqueInput_1.ProductWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductUpdateManyWithoutBaseProductInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductWhereUniqueInput_1.ProductWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductUpdateManyWithoutBaseProductInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductUpdateWithWhereUniqueWithoutBaseProductInput_1.ProductUpdateWithWhereUniqueWithoutBaseProductInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductUpdateManyWithoutBaseProductInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductUpdateManyWithWhereWithoutBaseProductInput_1.ProductUpdateManyWithWhereWithoutBaseProductInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductUpdateManyWithoutBaseProductInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductScalarWhereInput_1.ProductScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductUpdateManyWithoutBaseProductInput.prototype, "deleteMany", void 0);
ProductUpdateManyWithoutBaseProductInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductUpdateManyWithoutBaseProductInput", {
        isAbstract: true
    })
], ProductUpdateManyWithoutBaseProductInput);
exports.ProductUpdateManyWithoutBaseProductInput = ProductUpdateManyWithoutBaseProductInput;
