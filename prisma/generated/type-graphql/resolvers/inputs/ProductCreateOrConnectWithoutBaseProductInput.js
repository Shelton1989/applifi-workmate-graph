"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCreateOrConnectWithoutBaseProductInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductCreateWithoutBaseProductInput_1 = require("../inputs/ProductCreateWithoutBaseProductInput");
const ProductWhereUniqueInput_1 = require("../inputs/ProductWhereUniqueInput");
let ProductCreateOrConnectWithoutBaseProductInput = class ProductCreateOrConnectWithoutBaseProductInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductWhereUniqueInput_1.ProductWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductWhereUniqueInput_1.ProductWhereUniqueInput)
], ProductCreateOrConnectWithoutBaseProductInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreateWithoutBaseProductInput_1.ProductCreateWithoutBaseProductInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductCreateWithoutBaseProductInput_1.ProductCreateWithoutBaseProductInput)
], ProductCreateOrConnectWithoutBaseProductInput.prototype, "create", void 0);
ProductCreateOrConnectWithoutBaseProductInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductCreateOrConnectWithoutBaseProductInput", {
        isAbstract: true
    })
], ProductCreateOrConnectWithoutBaseProductInput);
exports.ProductCreateOrConnectWithoutBaseProductInput = ProductCreateOrConnectWithoutBaseProductInput;
