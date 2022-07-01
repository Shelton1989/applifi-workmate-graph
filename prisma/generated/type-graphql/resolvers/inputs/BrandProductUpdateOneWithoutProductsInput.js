"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandProductUpdateOneWithoutProductsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BrandProductCreateOrConnectWithoutProductsInput_1 = require("../inputs/BrandProductCreateOrConnectWithoutProductsInput");
const BrandProductCreateWithoutProductsInput_1 = require("../inputs/BrandProductCreateWithoutProductsInput");
const BrandProductUpdateWithoutProductsInput_1 = require("../inputs/BrandProductUpdateWithoutProductsInput");
const BrandProductUpsertWithoutProductsInput_1 = require("../inputs/BrandProductUpsertWithoutProductsInput");
const BrandProductWhereUniqueInput_1 = require("../inputs/BrandProductWhereUniqueInput");
let BrandProductUpdateOneWithoutProductsInput = class BrandProductUpdateOneWithoutProductsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandProductCreateWithoutProductsInput_1.BrandProductCreateWithoutProductsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BrandProductCreateWithoutProductsInput_1.BrandProductCreateWithoutProductsInput)
], BrandProductUpdateOneWithoutProductsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandProductCreateOrConnectWithoutProductsInput_1.BrandProductCreateOrConnectWithoutProductsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BrandProductCreateOrConnectWithoutProductsInput_1.BrandProductCreateOrConnectWithoutProductsInput)
], BrandProductUpdateOneWithoutProductsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandProductUpsertWithoutProductsInput_1.BrandProductUpsertWithoutProductsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BrandProductUpsertWithoutProductsInput_1.BrandProductUpsertWithoutProductsInput)
], BrandProductUpdateOneWithoutProductsInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], BrandProductUpdateOneWithoutProductsInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], BrandProductUpdateOneWithoutProductsInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandProductWhereUniqueInput_1.BrandProductWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BrandProductWhereUniqueInput_1.BrandProductWhereUniqueInput)
], BrandProductUpdateOneWithoutProductsInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandProductUpdateWithoutProductsInput_1.BrandProductUpdateWithoutProductsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BrandProductUpdateWithoutProductsInput_1.BrandProductUpdateWithoutProductsInput)
], BrandProductUpdateOneWithoutProductsInput.prototype, "update", void 0);
BrandProductUpdateOneWithoutProductsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BrandProductUpdateOneWithoutProductsInput", {
        isAbstract: true
    })
], BrandProductUpdateOneWithoutProductsInput);
exports.BrandProductUpdateOneWithoutProductsInput = BrandProductUpdateOneWithoutProductsInput;
