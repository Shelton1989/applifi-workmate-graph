"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NullableEnumADDRESS_TYPEFieldUpdateOperationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ADDRESS_TYPE_1 = require("../../enums/ADDRESS_TYPE");
let NullableEnumADDRESS_TYPEFieldUpdateOperationsInput = class NullableEnumADDRESS_TYPEFieldUpdateOperationsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ADDRESS_TYPE_1.ADDRESS_TYPE, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NullableEnumADDRESS_TYPEFieldUpdateOperationsInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], NullableEnumADDRESS_TYPEFieldUpdateOperationsInput.prototype, "unset", void 0);
NullableEnumADDRESS_TYPEFieldUpdateOperationsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("NullableEnumADDRESS_TYPEFieldUpdateOperationsInput", {
        isAbstract: true
    })
], NullableEnumADDRESS_TYPEFieldUpdateOperationsInput);
exports.NullableEnumADDRESS_TYPEFieldUpdateOperationsInput = NullableEnumADDRESS_TYPEFieldUpdateOperationsInput;
