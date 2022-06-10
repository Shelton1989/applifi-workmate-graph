"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandProductUpsertWithWhereUniqueWithoutBrandInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BrandProductCreateWithoutBrandInput_1 = require("../inputs/BrandProductCreateWithoutBrandInput");
const BrandProductUpdateWithoutBrandInput_1 = require("../inputs/BrandProductUpdateWithoutBrandInput");
const BrandProductWhereUniqueInput_1 = require("../inputs/BrandProductWhereUniqueInput");
let BrandProductUpsertWithWhereUniqueWithoutBrandInput = class BrandProductUpsertWithWhereUniqueWithoutBrandInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandProductWhereUniqueInput_1.BrandProductWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BrandProductWhereUniqueInput_1.BrandProductWhereUniqueInput)
], BrandProductUpsertWithWhereUniqueWithoutBrandInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandProductUpdateWithoutBrandInput_1.BrandProductUpdateWithoutBrandInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BrandProductUpdateWithoutBrandInput_1.BrandProductUpdateWithoutBrandInput)
], BrandProductUpsertWithWhereUniqueWithoutBrandInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandProductCreateWithoutBrandInput_1.BrandProductCreateWithoutBrandInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BrandProductCreateWithoutBrandInput_1.BrandProductCreateWithoutBrandInput)
], BrandProductUpsertWithWhereUniqueWithoutBrandInput.prototype, "create", void 0);
BrandProductUpsertWithWhereUniqueWithoutBrandInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BrandProductUpsertWithWhereUniqueWithoutBrandInput", {
        isAbstract: true
    })
], BrandProductUpsertWithWhereUniqueWithoutBrandInput);
exports.BrandProductUpsertWithWhereUniqueWithoutBrandInput = BrandProductUpsertWithWhereUniqueWithoutBrandInput;
