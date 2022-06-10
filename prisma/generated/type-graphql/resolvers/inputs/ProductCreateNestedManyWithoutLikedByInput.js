"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCreateNestedManyWithoutLikedByInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductCreateOrConnectWithoutLikedByInput_1 = require("../inputs/ProductCreateOrConnectWithoutLikedByInput");
const ProductCreateWithoutLikedByInput_1 = require("../inputs/ProductCreateWithoutLikedByInput");
const ProductWhereUniqueInput_1 = require("../inputs/ProductWhereUniqueInput");
let ProductCreateNestedManyWithoutLikedByInput = class ProductCreateNestedManyWithoutLikedByInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductCreateWithoutLikedByInput_1.ProductCreateWithoutLikedByInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductCreateNestedManyWithoutLikedByInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductCreateOrConnectWithoutLikedByInput_1.ProductCreateOrConnectWithoutLikedByInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductCreateNestedManyWithoutLikedByInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductWhereUniqueInput_1.ProductWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductCreateNestedManyWithoutLikedByInput.prototype, "connect", void 0);
ProductCreateNestedManyWithoutLikedByInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductCreateNestedManyWithoutLikedByInput", {
        isAbstract: true
    })
], ProductCreateNestedManyWithoutLikedByInput);
exports.ProductCreateNestedManyWithoutLikedByInput = ProductCreateNestedManyWithoutLikedByInput;
