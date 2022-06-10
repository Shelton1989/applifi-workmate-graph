"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCreateOrConnectWithoutArtworkInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductCreateWithoutArtworkInput_1 = require("../inputs/ProductCreateWithoutArtworkInput");
const ProductWhereUniqueInput_1 = require("../inputs/ProductWhereUniqueInput");
let ProductCreateOrConnectWithoutArtworkInput = class ProductCreateOrConnectWithoutArtworkInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductWhereUniqueInput_1.ProductWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductWhereUniqueInput_1.ProductWhereUniqueInput)
], ProductCreateOrConnectWithoutArtworkInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreateWithoutArtworkInput_1.ProductCreateWithoutArtworkInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductCreateWithoutArtworkInput_1.ProductCreateWithoutArtworkInput)
], ProductCreateOrConnectWithoutArtworkInput.prototype, "create", void 0);
ProductCreateOrConnectWithoutArtworkInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductCreateOrConnectWithoutArtworkInput", {
        isAbstract: true
    })
], ProductCreateOrConnectWithoutArtworkInput);
exports.ProductCreateOrConnectWithoutArtworkInput = ProductCreateOrConnectWithoutArtworkInput;
