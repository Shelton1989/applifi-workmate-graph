"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCreateOrConnectWithoutLikedByInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductCreateWithoutLikedByInput_1 = require("../inputs/ProductCreateWithoutLikedByInput");
const ProductWhereUniqueInput_1 = require("../inputs/ProductWhereUniqueInput");
let ProductCreateOrConnectWithoutLikedByInput = class ProductCreateOrConnectWithoutLikedByInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductWhereUniqueInput_1.ProductWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductWhereUniqueInput_1.ProductWhereUniqueInput)
], ProductCreateOrConnectWithoutLikedByInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreateWithoutLikedByInput_1.ProductCreateWithoutLikedByInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductCreateWithoutLikedByInput_1.ProductCreateWithoutLikedByInput)
], ProductCreateOrConnectWithoutLikedByInput.prototype, "create", void 0);
ProductCreateOrConnectWithoutLikedByInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductCreateOrConnectWithoutLikedByInput", {
        isAbstract: true
    })
], ProductCreateOrConnectWithoutLikedByInput);
exports.ProductCreateOrConnectWithoutLikedByInput = ProductCreateOrConnectWithoutLikedByInput;
