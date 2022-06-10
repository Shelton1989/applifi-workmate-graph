"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandProductUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BrandUpdateOneRequiredWithoutBrandProductsInput_1 = require("../inputs/BrandUpdateOneRequiredWithoutBrandProductsInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EnumPRODUCT_CATEGORYFieldUpdateOperationsInput_1 = require("../inputs/EnumPRODUCT_CATEGORYFieldUpdateOperationsInput");
const EnumPRODUCT_TYPEFieldUpdateOperationsInput_1 = require("../inputs/EnumPRODUCT_TYPEFieldUpdateOperationsInput");
const EnumSTATUSFieldUpdateOperationsInput_1 = require("../inputs/EnumSTATUSFieldUpdateOperationsInput");
const NullableDateTimeFieldUpdateOperationsInput_1 = require("../inputs/NullableDateTimeFieldUpdateOperationsInput");
const ProductUpdateManyWithoutBaseProductInput_1 = require("../inputs/ProductUpdateManyWithoutBaseProductInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let BrandProductUpdateInput = class BrandProductUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], BrandProductUpdateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput)
], BrandProductUpdateInput.prototype, "releaseYear", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], BrandProductUpdateInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumPRODUCT_TYPEFieldUpdateOperationsInput_1.EnumPRODUCT_TYPEFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumPRODUCT_TYPEFieldUpdateOperationsInput_1.EnumPRODUCT_TYPEFieldUpdateOperationsInput)
], BrandProductUpdateInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumPRODUCT_CATEGORYFieldUpdateOperationsInput_1.EnumPRODUCT_CATEGORYFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumPRODUCT_CATEGORYFieldUpdateOperationsInput_1.EnumPRODUCT_CATEGORYFieldUpdateOperationsInput)
], BrandProductUpdateInput.prototype, "category", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandUpdateOneRequiredWithoutBrandProductsInput_1.BrandUpdateOneRequiredWithoutBrandProductsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BrandUpdateOneRequiredWithoutBrandProductsInput_1.BrandUpdateOneRequiredWithoutBrandProductsInput)
], BrandProductUpdateInput.prototype, "brand", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumSTATUSFieldUpdateOperationsInput_1.EnumSTATUSFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumSTATUSFieldUpdateOperationsInput_1.EnumSTATUSFieldUpdateOperationsInput)
], BrandProductUpdateInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductUpdateManyWithoutBaseProductInput_1.ProductUpdateManyWithoutBaseProductInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductUpdateManyWithoutBaseProductInput_1.ProductUpdateManyWithoutBaseProductInput)
], BrandProductUpdateInput.prototype, "Products", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], BrandProductUpdateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], BrandProductUpdateInput.prototype, "updatedAt", void 0);
BrandProductUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BrandProductUpdateInput", {
        isAbstract: true
    })
], BrandProductUpdateInput);
exports.BrandProductUpdateInput = BrandProductUpdateInput;
