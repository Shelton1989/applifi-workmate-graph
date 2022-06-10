"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BrandProductUpdateManyWithoutBrandInput_1 = require("../inputs/BrandProductUpdateManyWithoutBrandInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EnumSTATUSFieldUpdateOperationsInput_1 = require("../inputs/EnumSTATUSFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let BrandUpdateInput = class BrandUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], BrandUpdateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], BrandUpdateInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], BrandUpdateInput.prototype, "tagline", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandProductUpdateManyWithoutBrandInput_1.BrandProductUpdateManyWithoutBrandInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BrandProductUpdateManyWithoutBrandInput_1.BrandProductUpdateManyWithoutBrandInput)
], BrandUpdateInput.prototype, "BrandProducts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumSTATUSFieldUpdateOperationsInput_1.EnumSTATUSFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumSTATUSFieldUpdateOperationsInput_1.EnumSTATUSFieldUpdateOperationsInput)
], BrandUpdateInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], BrandUpdateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], BrandUpdateInput.prototype, "updatedAt", void 0);
BrandUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BrandUpdateInput", {
        isAbstract: true
    })
], BrandUpdateInput);
exports.BrandUpdateInput = BrandUpdateInput;
