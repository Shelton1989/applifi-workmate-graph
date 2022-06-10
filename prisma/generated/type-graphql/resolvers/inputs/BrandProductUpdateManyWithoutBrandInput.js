"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandProductUpdateManyWithoutBrandInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BrandProductCreateManyBrandInputEnvelope_1 = require("../inputs/BrandProductCreateManyBrandInputEnvelope");
const BrandProductCreateOrConnectWithoutBrandInput_1 = require("../inputs/BrandProductCreateOrConnectWithoutBrandInput");
const BrandProductCreateWithoutBrandInput_1 = require("../inputs/BrandProductCreateWithoutBrandInput");
const BrandProductScalarWhereInput_1 = require("../inputs/BrandProductScalarWhereInput");
const BrandProductUpdateManyWithWhereWithoutBrandInput_1 = require("../inputs/BrandProductUpdateManyWithWhereWithoutBrandInput");
const BrandProductUpdateWithWhereUniqueWithoutBrandInput_1 = require("../inputs/BrandProductUpdateWithWhereUniqueWithoutBrandInput");
const BrandProductUpsertWithWhereUniqueWithoutBrandInput_1 = require("../inputs/BrandProductUpsertWithWhereUniqueWithoutBrandInput");
const BrandProductWhereUniqueInput_1 = require("../inputs/BrandProductWhereUniqueInput");
let BrandProductUpdateManyWithoutBrandInput = class BrandProductUpdateManyWithoutBrandInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BrandProductCreateWithoutBrandInput_1.BrandProductCreateWithoutBrandInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BrandProductUpdateManyWithoutBrandInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BrandProductCreateOrConnectWithoutBrandInput_1.BrandProductCreateOrConnectWithoutBrandInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BrandProductUpdateManyWithoutBrandInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BrandProductUpsertWithWhereUniqueWithoutBrandInput_1.BrandProductUpsertWithWhereUniqueWithoutBrandInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BrandProductUpdateManyWithoutBrandInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandProductCreateManyBrandInputEnvelope_1.BrandProductCreateManyBrandInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BrandProductCreateManyBrandInputEnvelope_1.BrandProductCreateManyBrandInputEnvelope)
], BrandProductUpdateManyWithoutBrandInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BrandProductWhereUniqueInput_1.BrandProductWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BrandProductUpdateManyWithoutBrandInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BrandProductWhereUniqueInput_1.BrandProductWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BrandProductUpdateManyWithoutBrandInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BrandProductWhereUniqueInput_1.BrandProductWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BrandProductUpdateManyWithoutBrandInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BrandProductWhereUniqueInput_1.BrandProductWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BrandProductUpdateManyWithoutBrandInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BrandProductUpdateWithWhereUniqueWithoutBrandInput_1.BrandProductUpdateWithWhereUniqueWithoutBrandInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BrandProductUpdateManyWithoutBrandInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BrandProductUpdateManyWithWhereWithoutBrandInput_1.BrandProductUpdateManyWithWhereWithoutBrandInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BrandProductUpdateManyWithoutBrandInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BrandProductScalarWhereInput_1.BrandProductScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BrandProductUpdateManyWithoutBrandInput.prototype, "deleteMany", void 0);
BrandProductUpdateManyWithoutBrandInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BrandProductUpdateManyWithoutBrandInput", {
        isAbstract: true
    })
], BrandProductUpdateManyWithoutBrandInput);
exports.BrandProductUpdateManyWithoutBrandInput = BrandProductUpdateManyWithoutBrandInput;
