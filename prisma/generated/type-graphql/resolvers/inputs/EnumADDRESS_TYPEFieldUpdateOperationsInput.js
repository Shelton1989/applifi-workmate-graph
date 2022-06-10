"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumADDRESS_TYPEFieldUpdateOperationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ADDRESS_TYPE_1 = require("../../enums/ADDRESS_TYPE");
let EnumADDRESS_TYPEFieldUpdateOperationsInput = class EnumADDRESS_TYPEFieldUpdateOperationsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ADDRESS_TYPE_1.ADDRESS_TYPE, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumADDRESS_TYPEFieldUpdateOperationsInput.prototype, "set", void 0);
EnumADDRESS_TYPEFieldUpdateOperationsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumADDRESS_TYPEFieldUpdateOperationsInput", {
        isAbstract: true
    })
], EnumADDRESS_TYPEFieldUpdateOperationsInput);
exports.EnumADDRESS_TYPEFieldUpdateOperationsInput = EnumADDRESS_TYPEFieldUpdateOperationsInput;
