"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumMEDIA_TYPEFieldUpdateOperationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MEDIA_TYPE_1 = require("../../enums/MEDIA_TYPE");
let EnumMEDIA_TYPEFieldUpdateOperationsInput = class EnumMEDIA_TYPEFieldUpdateOperationsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MEDIA_TYPE_1.MEDIA_TYPE, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumMEDIA_TYPEFieldUpdateOperationsInput.prototype, "set", void 0);
EnumMEDIA_TYPEFieldUpdateOperationsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumMEDIA_TYPEFieldUpdateOperationsInput", {
        isAbstract: true
    })
], EnumMEDIA_TYPEFieldUpdateOperationsInput);
exports.EnumMEDIA_TYPEFieldUpdateOperationsInput = EnumMEDIA_TYPEFieldUpdateOperationsInput;
