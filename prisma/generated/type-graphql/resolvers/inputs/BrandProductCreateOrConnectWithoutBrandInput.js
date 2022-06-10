"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandProductCreateOrConnectWithoutBrandInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BrandProductCreateWithoutBrandInput_1 = require("../inputs/BrandProductCreateWithoutBrandInput");
const BrandProductWhereUniqueInput_1 = require("../inputs/BrandProductWhereUniqueInput");
let BrandProductCreateOrConnectWithoutBrandInput = class BrandProductCreateOrConnectWithoutBrandInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandProductWhereUniqueInput_1.BrandProductWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BrandProductWhereUniqueInput_1.BrandProductWhereUniqueInput)
], BrandProductCreateOrConnectWithoutBrandInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandProductCreateWithoutBrandInput_1.BrandProductCreateWithoutBrandInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BrandProductCreateWithoutBrandInput_1.BrandProductCreateWithoutBrandInput)
], BrandProductCreateOrConnectWithoutBrandInput.prototype, "create", void 0);
BrandProductCreateOrConnectWithoutBrandInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BrandProductCreateOrConnectWithoutBrandInput", {
        isAbstract: true
    })
], BrandProductCreateOrConnectWithoutBrandInput);
exports.BrandProductCreateOrConnectWithoutBrandInput = BrandProductCreateOrConnectWithoutBrandInput;
