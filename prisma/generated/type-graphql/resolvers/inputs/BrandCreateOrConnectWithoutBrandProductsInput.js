"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandCreateOrConnectWithoutBrandProductsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BrandCreateWithoutBrandProductsInput_1 = require("../inputs/BrandCreateWithoutBrandProductsInput");
const BrandWhereUniqueInput_1 = require("../inputs/BrandWhereUniqueInput");
let BrandCreateOrConnectWithoutBrandProductsInput = class BrandCreateOrConnectWithoutBrandProductsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandWhereUniqueInput_1.BrandWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BrandWhereUniqueInput_1.BrandWhereUniqueInput)
], BrandCreateOrConnectWithoutBrandProductsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandCreateWithoutBrandProductsInput_1.BrandCreateWithoutBrandProductsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BrandCreateWithoutBrandProductsInput_1.BrandCreateWithoutBrandProductsInput)
], BrandCreateOrConnectWithoutBrandProductsInput.prototype, "create", void 0);
BrandCreateOrConnectWithoutBrandProductsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BrandCreateOrConnectWithoutBrandProductsInput", {
        isAbstract: true
    })
], BrandCreateOrConnectWithoutBrandProductsInput);
exports.BrandCreateOrConnectWithoutBrandProductsInput = BrandCreateOrConnectWithoutBrandProductsInput;
