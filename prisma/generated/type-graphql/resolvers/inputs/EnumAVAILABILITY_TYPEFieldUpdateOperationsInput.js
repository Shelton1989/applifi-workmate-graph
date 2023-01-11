"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumAVAILABILITY_TYPEFieldUpdateOperationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AVAILABILITY_TYPE_1 = require("../../enums/AVAILABILITY_TYPE");
let EnumAVAILABILITY_TYPEFieldUpdateOperationsInput = class EnumAVAILABILITY_TYPEFieldUpdateOperationsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AVAILABILITY_TYPE_1.AVAILABILITY_TYPE, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumAVAILABILITY_TYPEFieldUpdateOperationsInput.prototype, "set", void 0);
EnumAVAILABILITY_TYPEFieldUpdateOperationsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumAVAILABILITY_TYPEFieldUpdateOperationsInput", {
        isAbstract: true
    })
], EnumAVAILABILITY_TYPEFieldUpdateOperationsInput);
exports.EnumAVAILABILITY_TYPEFieldUpdateOperationsInput = EnumAVAILABILITY_TYPEFieldUpdateOperationsInput;
