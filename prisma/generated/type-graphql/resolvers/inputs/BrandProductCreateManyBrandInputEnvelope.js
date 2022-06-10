"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandProductCreateManyBrandInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BrandProductCreateManyBrandInput_1 = require("../inputs/BrandProductCreateManyBrandInput");
let BrandProductCreateManyBrandInputEnvelope = class BrandProductCreateManyBrandInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BrandProductCreateManyBrandInput_1.BrandProductCreateManyBrandInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], BrandProductCreateManyBrandInputEnvelope.prototype, "data", void 0);
BrandProductCreateManyBrandInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("BrandProductCreateManyBrandInputEnvelope", {
        isAbstract: true
    })
], BrandProductCreateManyBrandInputEnvelope);
exports.BrandProductCreateManyBrandInputEnvelope = BrandProductCreateManyBrandInputEnvelope;
