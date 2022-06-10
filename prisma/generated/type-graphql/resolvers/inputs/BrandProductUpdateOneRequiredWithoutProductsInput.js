"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandProductUpdateOneRequiredWithoutProductsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BrandProductCreateOrConnectWithoutProductsInput_1 = require("../inputs/BrandProductCreateOrConnectWithoutProductsInput");
const BrandProductCreateWithoutProductsInput_1 = require("../inputs/BrandProductCreateWithoutProductsInput");
const BrandProductUpdateWithoutProductsInput_1 = require("../inputs/BrandProductUpdateWithoutProductsInput");
const BrandProductUpsertWithoutProductsInput_1 = require("../inputs/BrandProductUpsertWithoutProductsInput");
const BrandProductWhereUniqueInput_1 = require("../inputs/BrandProductWhereUniqueInput");
let BrandProductUpdateOneRequiredWithoutProductsInput = class BrandProductUpdateOneRequiredWithoutProductsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandProductCreateWithoutProductsInput_1.BrandProductCreateWithoutProductsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BrandProductCreateWithoutProductsInput_1.BrandProductCreateWithoutProductsInput)
], BrandProductUpdateOneRequiredWithoutProductsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandProductCreateOrConnectWithoutProductsInput_1.BrandProductCreateOrConnectWithoutProductsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BrandProductCreateOrConnectWithoutProductsInput_1.BrandProductCreateOrConnectWithoutProductsInput)
], BrandProductUpdateOneRequiredWithoutProductsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandProductUpsertWithoutProductsInput_1.BrandProductUpsertWithoutProductsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BrandProductUpsertWithoutProductsInput_1.BrandProductUpsertWithoutProductsInput)
], BrandProductUpdateOneRequiredWithoutProductsInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandProductWhereUniqueInput_1.BrandProductWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BrandProductWhereUniqueInput_1.BrandProductWhereUniqueInput)
], BrandProductUpdateOneRequiredWithoutProductsInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandProductUpdateWithoutProductsInput_1.BrandProductUpdateWithoutProductsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BrandProductUpdateWithoutProductsInput_1.BrandProductUpdateWithoutProductsInput)
], BrandProductUpdateOneRequiredWithoutProductsInput.prototype, "update", void 0);
BrandProductUpdateOneRequiredWithoutProductsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BrandProductUpdateOneRequiredWithoutProductsInput", {
        isAbstract: true
    })
], BrandProductUpdateOneRequiredWithoutProductsInput);
exports.BrandProductUpdateOneRequiredWithoutProductsInput = BrandProductUpdateOneRequiredWithoutProductsInput;
