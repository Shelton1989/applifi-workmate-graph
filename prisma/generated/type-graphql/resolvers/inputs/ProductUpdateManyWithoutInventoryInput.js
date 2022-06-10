"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductUpdateManyWithoutInventoryInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductCreateManyInventoryInputEnvelope_1 = require("../inputs/ProductCreateManyInventoryInputEnvelope");
const ProductCreateOrConnectWithoutInventoryInput_1 = require("../inputs/ProductCreateOrConnectWithoutInventoryInput");
const ProductCreateWithoutInventoryInput_1 = require("../inputs/ProductCreateWithoutInventoryInput");
const ProductScalarWhereInput_1 = require("../inputs/ProductScalarWhereInput");
const ProductUpdateManyWithWhereWithoutInventoryInput_1 = require("../inputs/ProductUpdateManyWithWhereWithoutInventoryInput");
const ProductUpdateWithWhereUniqueWithoutInventoryInput_1 = require("../inputs/ProductUpdateWithWhereUniqueWithoutInventoryInput");
const ProductUpsertWithWhereUniqueWithoutInventoryInput_1 = require("../inputs/ProductUpsertWithWhereUniqueWithoutInventoryInput");
const ProductWhereUniqueInput_1 = require("../inputs/ProductWhereUniqueInput");
let ProductUpdateManyWithoutInventoryInput = class ProductUpdateManyWithoutInventoryInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductCreateWithoutInventoryInput_1.ProductCreateWithoutInventoryInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductUpdateManyWithoutInventoryInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductCreateOrConnectWithoutInventoryInput_1.ProductCreateOrConnectWithoutInventoryInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductUpdateManyWithoutInventoryInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductUpsertWithWhereUniqueWithoutInventoryInput_1.ProductUpsertWithWhereUniqueWithoutInventoryInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductUpdateManyWithoutInventoryInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreateManyInventoryInputEnvelope_1.ProductCreateManyInventoryInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductCreateManyInventoryInputEnvelope_1.ProductCreateManyInventoryInputEnvelope)
], ProductUpdateManyWithoutInventoryInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductWhereUniqueInput_1.ProductWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductUpdateManyWithoutInventoryInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductWhereUniqueInput_1.ProductWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductUpdateManyWithoutInventoryInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductWhereUniqueInput_1.ProductWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductUpdateManyWithoutInventoryInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductWhereUniqueInput_1.ProductWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductUpdateManyWithoutInventoryInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductUpdateWithWhereUniqueWithoutInventoryInput_1.ProductUpdateWithWhereUniqueWithoutInventoryInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductUpdateManyWithoutInventoryInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductUpdateManyWithWhereWithoutInventoryInput_1.ProductUpdateManyWithWhereWithoutInventoryInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductUpdateManyWithoutInventoryInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductScalarWhereInput_1.ProductScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductUpdateManyWithoutInventoryInput.prototype, "deleteMany", void 0);
ProductUpdateManyWithoutInventoryInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductUpdateManyWithoutInventoryInput", {
        isAbstract: true
    })
], ProductUpdateManyWithoutInventoryInput);
exports.ProductUpdateManyWithoutInventoryInput = ProductUpdateManyWithoutInventoryInput;
