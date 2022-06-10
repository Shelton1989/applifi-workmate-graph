"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductUpdateManyWithoutArtworkInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductCreateOrConnectWithoutArtworkInput_1 = require("../inputs/ProductCreateOrConnectWithoutArtworkInput");
const ProductCreateWithoutArtworkInput_1 = require("../inputs/ProductCreateWithoutArtworkInput");
const ProductScalarWhereInput_1 = require("../inputs/ProductScalarWhereInput");
const ProductUpdateManyWithWhereWithoutArtworkInput_1 = require("../inputs/ProductUpdateManyWithWhereWithoutArtworkInput");
const ProductUpdateWithWhereUniqueWithoutArtworkInput_1 = require("../inputs/ProductUpdateWithWhereUniqueWithoutArtworkInput");
const ProductUpsertWithWhereUniqueWithoutArtworkInput_1 = require("../inputs/ProductUpsertWithWhereUniqueWithoutArtworkInput");
const ProductWhereUniqueInput_1 = require("../inputs/ProductWhereUniqueInput");
let ProductUpdateManyWithoutArtworkInput = class ProductUpdateManyWithoutArtworkInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductCreateWithoutArtworkInput_1.ProductCreateWithoutArtworkInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductUpdateManyWithoutArtworkInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductCreateOrConnectWithoutArtworkInput_1.ProductCreateOrConnectWithoutArtworkInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductUpdateManyWithoutArtworkInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductUpsertWithWhereUniqueWithoutArtworkInput_1.ProductUpsertWithWhereUniqueWithoutArtworkInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductUpdateManyWithoutArtworkInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductWhereUniqueInput_1.ProductWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductUpdateManyWithoutArtworkInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductWhereUniqueInput_1.ProductWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductUpdateManyWithoutArtworkInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductWhereUniqueInput_1.ProductWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductUpdateManyWithoutArtworkInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductWhereUniqueInput_1.ProductWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductUpdateManyWithoutArtworkInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductUpdateWithWhereUniqueWithoutArtworkInput_1.ProductUpdateWithWhereUniqueWithoutArtworkInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductUpdateManyWithoutArtworkInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductUpdateManyWithWhereWithoutArtworkInput_1.ProductUpdateManyWithWhereWithoutArtworkInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductUpdateManyWithoutArtworkInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductScalarWhereInput_1.ProductScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductUpdateManyWithoutArtworkInput.prototype, "deleteMany", void 0);
ProductUpdateManyWithoutArtworkInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductUpdateManyWithoutArtworkInput", {
        isAbstract: true
    })
], ProductUpdateManyWithoutArtworkInput);
exports.ProductUpdateManyWithoutArtworkInput = ProductUpdateManyWithoutArtworkInput;
