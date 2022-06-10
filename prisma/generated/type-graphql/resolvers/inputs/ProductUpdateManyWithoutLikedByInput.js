"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductUpdateManyWithoutLikedByInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductCreateOrConnectWithoutLikedByInput_1 = require("../inputs/ProductCreateOrConnectWithoutLikedByInput");
const ProductCreateWithoutLikedByInput_1 = require("../inputs/ProductCreateWithoutLikedByInput");
const ProductScalarWhereInput_1 = require("../inputs/ProductScalarWhereInput");
const ProductUpdateManyWithWhereWithoutLikedByInput_1 = require("../inputs/ProductUpdateManyWithWhereWithoutLikedByInput");
const ProductUpdateWithWhereUniqueWithoutLikedByInput_1 = require("../inputs/ProductUpdateWithWhereUniqueWithoutLikedByInput");
const ProductUpsertWithWhereUniqueWithoutLikedByInput_1 = require("../inputs/ProductUpsertWithWhereUniqueWithoutLikedByInput");
const ProductWhereUniqueInput_1 = require("../inputs/ProductWhereUniqueInput");
let ProductUpdateManyWithoutLikedByInput = class ProductUpdateManyWithoutLikedByInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductCreateWithoutLikedByInput_1.ProductCreateWithoutLikedByInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductUpdateManyWithoutLikedByInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductCreateOrConnectWithoutLikedByInput_1.ProductCreateOrConnectWithoutLikedByInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductUpdateManyWithoutLikedByInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductUpsertWithWhereUniqueWithoutLikedByInput_1.ProductUpsertWithWhereUniqueWithoutLikedByInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductUpdateManyWithoutLikedByInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductWhereUniqueInput_1.ProductWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductUpdateManyWithoutLikedByInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductWhereUniqueInput_1.ProductWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductUpdateManyWithoutLikedByInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductWhereUniqueInput_1.ProductWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductUpdateManyWithoutLikedByInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductWhereUniqueInput_1.ProductWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductUpdateManyWithoutLikedByInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductUpdateWithWhereUniqueWithoutLikedByInput_1.ProductUpdateWithWhereUniqueWithoutLikedByInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductUpdateManyWithoutLikedByInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductUpdateManyWithWhereWithoutLikedByInput_1.ProductUpdateManyWithWhereWithoutLikedByInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductUpdateManyWithoutLikedByInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductScalarWhereInput_1.ProductScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductUpdateManyWithoutLikedByInput.prototype, "deleteMany", void 0);
ProductUpdateManyWithoutLikedByInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductUpdateManyWithoutLikedByInput", {
        isAbstract: true
    })
], ProductUpdateManyWithoutLikedByInput);
exports.ProductUpdateManyWithoutLikedByInput = ProductUpdateManyWithoutLikedByInput;
