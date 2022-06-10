"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandProductCreateNestedManyWithoutBrandInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BrandProductCreateManyBrandInputEnvelope_1 = require("../inputs/BrandProductCreateManyBrandInputEnvelope");
const BrandProductCreateOrConnectWithoutBrandInput_1 = require("../inputs/BrandProductCreateOrConnectWithoutBrandInput");
const BrandProductCreateWithoutBrandInput_1 = require("../inputs/BrandProductCreateWithoutBrandInput");
const BrandProductWhereUniqueInput_1 = require("../inputs/BrandProductWhereUniqueInput");
let BrandProductCreateNestedManyWithoutBrandInput = class BrandProductCreateNestedManyWithoutBrandInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BrandProductCreateWithoutBrandInput_1.BrandProductCreateWithoutBrandInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BrandProductCreateNestedManyWithoutBrandInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BrandProductCreateOrConnectWithoutBrandInput_1.BrandProductCreateOrConnectWithoutBrandInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BrandProductCreateNestedManyWithoutBrandInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandProductCreateManyBrandInputEnvelope_1.BrandProductCreateManyBrandInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BrandProductCreateManyBrandInputEnvelope_1.BrandProductCreateManyBrandInputEnvelope)
], BrandProductCreateNestedManyWithoutBrandInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BrandProductWhereUniqueInput_1.BrandProductWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BrandProductCreateNestedManyWithoutBrandInput.prototype, "connect", void 0);
BrandProductCreateNestedManyWithoutBrandInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BrandProductCreateNestedManyWithoutBrandInput", {
        isAbstract: true
    })
], BrandProductCreateNestedManyWithoutBrandInput);
exports.BrandProductCreateNestedManyWithoutBrandInput = BrandProductCreateNestedManyWithoutBrandInput;
