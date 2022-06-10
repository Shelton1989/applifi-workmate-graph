"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandCreateNestedOneWithoutBrandProductsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BrandCreateOrConnectWithoutBrandProductsInput_1 = require("../inputs/BrandCreateOrConnectWithoutBrandProductsInput");
const BrandCreateWithoutBrandProductsInput_1 = require("../inputs/BrandCreateWithoutBrandProductsInput");
const BrandWhereUniqueInput_1 = require("../inputs/BrandWhereUniqueInput");
let BrandCreateNestedOneWithoutBrandProductsInput = class BrandCreateNestedOneWithoutBrandProductsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandCreateWithoutBrandProductsInput_1.BrandCreateWithoutBrandProductsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BrandCreateWithoutBrandProductsInput_1.BrandCreateWithoutBrandProductsInput)
], BrandCreateNestedOneWithoutBrandProductsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandCreateOrConnectWithoutBrandProductsInput_1.BrandCreateOrConnectWithoutBrandProductsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BrandCreateOrConnectWithoutBrandProductsInput_1.BrandCreateOrConnectWithoutBrandProductsInput)
], BrandCreateNestedOneWithoutBrandProductsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandWhereUniqueInput_1.BrandWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BrandWhereUniqueInput_1.BrandWhereUniqueInput)
], BrandCreateNestedOneWithoutBrandProductsInput.prototype, "connect", void 0);
BrandCreateNestedOneWithoutBrandProductsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BrandCreateNestedOneWithoutBrandProductsInput", {
        isAbstract: true
    })
], BrandCreateNestedOneWithoutBrandProductsInput);
exports.BrandCreateNestedOneWithoutBrandProductsInput = BrandCreateNestedOneWithoutBrandProductsInput;
