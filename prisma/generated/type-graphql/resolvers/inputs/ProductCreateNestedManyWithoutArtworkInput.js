"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCreateNestedManyWithoutArtworkInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductCreateOrConnectWithoutArtworkInput_1 = require("../inputs/ProductCreateOrConnectWithoutArtworkInput");
const ProductCreateWithoutArtworkInput_1 = require("../inputs/ProductCreateWithoutArtworkInput");
const ProductWhereUniqueInput_1 = require("../inputs/ProductWhereUniqueInput");
let ProductCreateNestedManyWithoutArtworkInput = class ProductCreateNestedManyWithoutArtworkInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductCreateWithoutArtworkInput_1.ProductCreateWithoutArtworkInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductCreateNestedManyWithoutArtworkInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductCreateOrConnectWithoutArtworkInput_1.ProductCreateOrConnectWithoutArtworkInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductCreateNestedManyWithoutArtworkInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductWhereUniqueInput_1.ProductWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductCreateNestedManyWithoutArtworkInput.prototype, "connect", void 0);
ProductCreateNestedManyWithoutArtworkInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductCreateNestedManyWithoutArtworkInput", {
        isAbstract: true
    })
], ProductCreateNestedManyWithoutArtworkInput);
exports.ProductCreateNestedManyWithoutArtworkInput = ProductCreateNestedManyWithoutArtworkInput;
