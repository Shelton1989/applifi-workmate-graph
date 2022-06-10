"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandProductCreateOrConnectWithoutProductsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BrandProductCreateWithoutProductsInput_1 = require("../inputs/BrandProductCreateWithoutProductsInput");
const BrandProductWhereUniqueInput_1 = require("../inputs/BrandProductWhereUniqueInput");
let BrandProductCreateOrConnectWithoutProductsInput = class BrandProductCreateOrConnectWithoutProductsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandProductWhereUniqueInput_1.BrandProductWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BrandProductWhereUniqueInput_1.BrandProductWhereUniqueInput)
], BrandProductCreateOrConnectWithoutProductsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandProductCreateWithoutProductsInput_1.BrandProductCreateWithoutProductsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BrandProductCreateWithoutProductsInput_1.BrandProductCreateWithoutProductsInput)
], BrandProductCreateOrConnectWithoutProductsInput.prototype, "create", void 0);
BrandProductCreateOrConnectWithoutProductsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BrandProductCreateOrConnectWithoutProductsInput", {
        isAbstract: true
    })
], BrandProductCreateOrConnectWithoutProductsInput);
exports.BrandProductCreateOrConnectWithoutProductsInput = BrandProductCreateOrConnectWithoutProductsInput;
