"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandUpdateOneRequiredWithoutBrandProductsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BrandCreateOrConnectWithoutBrandProductsInput_1 = require("../inputs/BrandCreateOrConnectWithoutBrandProductsInput");
const BrandCreateWithoutBrandProductsInput_1 = require("../inputs/BrandCreateWithoutBrandProductsInput");
const BrandUpdateWithoutBrandProductsInput_1 = require("../inputs/BrandUpdateWithoutBrandProductsInput");
const BrandUpsertWithoutBrandProductsInput_1 = require("../inputs/BrandUpsertWithoutBrandProductsInput");
const BrandWhereUniqueInput_1 = require("../inputs/BrandWhereUniqueInput");
let BrandUpdateOneRequiredWithoutBrandProductsInput = class BrandUpdateOneRequiredWithoutBrandProductsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandCreateWithoutBrandProductsInput_1.BrandCreateWithoutBrandProductsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BrandCreateWithoutBrandProductsInput_1.BrandCreateWithoutBrandProductsInput)
], BrandUpdateOneRequiredWithoutBrandProductsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandCreateOrConnectWithoutBrandProductsInput_1.BrandCreateOrConnectWithoutBrandProductsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BrandCreateOrConnectWithoutBrandProductsInput_1.BrandCreateOrConnectWithoutBrandProductsInput)
], BrandUpdateOneRequiredWithoutBrandProductsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandUpsertWithoutBrandProductsInput_1.BrandUpsertWithoutBrandProductsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BrandUpsertWithoutBrandProductsInput_1.BrandUpsertWithoutBrandProductsInput)
], BrandUpdateOneRequiredWithoutBrandProductsInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandWhereUniqueInput_1.BrandWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BrandWhereUniqueInput_1.BrandWhereUniqueInput)
], BrandUpdateOneRequiredWithoutBrandProductsInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandUpdateWithoutBrandProductsInput_1.BrandUpdateWithoutBrandProductsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BrandUpdateWithoutBrandProductsInput_1.BrandUpdateWithoutBrandProductsInput)
], BrandUpdateOneRequiredWithoutBrandProductsInput.prototype, "update", void 0);
BrandUpdateOneRequiredWithoutBrandProductsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BrandUpdateOneRequiredWithoutBrandProductsInput", {
        isAbstract: true
    })
], BrandUpdateOneRequiredWithoutBrandProductsInput);
exports.BrandUpdateOneRequiredWithoutBrandProductsInput = BrandUpdateOneRequiredWithoutBrandProductsInput;
