"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandProductCreateNestedOneWithoutProductsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BrandProductCreateOrConnectWithoutProductsInput_1 = require("../inputs/BrandProductCreateOrConnectWithoutProductsInput");
const BrandProductCreateWithoutProductsInput_1 = require("../inputs/BrandProductCreateWithoutProductsInput");
const BrandProductWhereUniqueInput_1 = require("../inputs/BrandProductWhereUniqueInput");
let BrandProductCreateNestedOneWithoutProductsInput = class BrandProductCreateNestedOneWithoutProductsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandProductCreateWithoutProductsInput_1.BrandProductCreateWithoutProductsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BrandProductCreateWithoutProductsInput_1.BrandProductCreateWithoutProductsInput)
], BrandProductCreateNestedOneWithoutProductsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandProductCreateOrConnectWithoutProductsInput_1.BrandProductCreateOrConnectWithoutProductsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BrandProductCreateOrConnectWithoutProductsInput_1.BrandProductCreateOrConnectWithoutProductsInput)
], BrandProductCreateNestedOneWithoutProductsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandProductWhereUniqueInput_1.BrandProductWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BrandProductWhereUniqueInput_1.BrandProductWhereUniqueInput)
], BrandProductCreateNestedOneWithoutProductsInput.prototype, "connect", void 0);
BrandProductCreateNestedOneWithoutProductsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BrandProductCreateNestedOneWithoutProductsInput", {
        isAbstract: true
    })
], BrandProductCreateNestedOneWithoutProductsInput);
exports.BrandProductCreateNestedOneWithoutProductsInput = BrandProductCreateNestedOneWithoutProductsInput;
