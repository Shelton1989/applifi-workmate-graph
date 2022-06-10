"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCreateOrConnectWithoutSizesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductCreateWithoutSizesInput_1 = require("../inputs/ProductCreateWithoutSizesInput");
const ProductWhereUniqueInput_1 = require("../inputs/ProductWhereUniqueInput");
let ProductCreateOrConnectWithoutSizesInput = class ProductCreateOrConnectWithoutSizesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductWhereUniqueInput_1.ProductWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductWhereUniqueInput_1.ProductWhereUniqueInput)
], ProductCreateOrConnectWithoutSizesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreateWithoutSizesInput_1.ProductCreateWithoutSizesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductCreateWithoutSizesInput_1.ProductCreateWithoutSizesInput)
], ProductCreateOrConnectWithoutSizesInput.prototype, "create", void 0);
ProductCreateOrConnectWithoutSizesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductCreateOrConnectWithoutSizesInput", {
        isAbstract: true
    })
], ProductCreateOrConnectWithoutSizesInput);
exports.ProductCreateOrConnectWithoutSizesInput = ProductCreateOrConnectWithoutSizesInput;
