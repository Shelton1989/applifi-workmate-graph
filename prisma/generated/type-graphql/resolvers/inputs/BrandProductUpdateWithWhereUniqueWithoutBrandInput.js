"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandProductUpdateWithWhereUniqueWithoutBrandInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BrandProductUpdateWithoutBrandInput_1 = require("../inputs/BrandProductUpdateWithoutBrandInput");
const BrandProductWhereUniqueInput_1 = require("../inputs/BrandProductWhereUniqueInput");
let BrandProductUpdateWithWhereUniqueWithoutBrandInput = class BrandProductUpdateWithWhereUniqueWithoutBrandInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandProductWhereUniqueInput_1.BrandProductWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BrandProductWhereUniqueInput_1.BrandProductWhereUniqueInput)
], BrandProductUpdateWithWhereUniqueWithoutBrandInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandProductUpdateWithoutBrandInput_1.BrandProductUpdateWithoutBrandInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BrandProductUpdateWithoutBrandInput_1.BrandProductUpdateWithoutBrandInput)
], BrandProductUpdateWithWhereUniqueWithoutBrandInput.prototype, "data", void 0);
BrandProductUpdateWithWhereUniqueWithoutBrandInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BrandProductUpdateWithWhereUniqueWithoutBrandInput", {
        isAbstract: true
    })
], BrandProductUpdateWithWhereUniqueWithoutBrandInput);
exports.BrandProductUpdateWithWhereUniqueWithoutBrandInput = BrandProductUpdateWithWhereUniqueWithoutBrandInput;
