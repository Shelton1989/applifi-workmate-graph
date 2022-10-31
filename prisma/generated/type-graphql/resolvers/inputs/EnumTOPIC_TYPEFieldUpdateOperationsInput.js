"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumTOPIC_TYPEFieldUpdateOperationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TOPIC_TYPE_1 = require("../../enums/TOPIC_TYPE");
let EnumTOPIC_TYPEFieldUpdateOperationsInput = class EnumTOPIC_TYPEFieldUpdateOperationsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TOPIC_TYPE_1.TOPIC_TYPE, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumTOPIC_TYPEFieldUpdateOperationsInput.prototype, "set", void 0);
EnumTOPIC_TYPEFieldUpdateOperationsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumTOPIC_TYPEFieldUpdateOperationsInput", {
        isAbstract: true
    })
], EnumTOPIC_TYPEFieldUpdateOperationsInput);
exports.EnumTOPIC_TYPEFieldUpdateOperationsInput = EnumTOPIC_TYPEFieldUpdateOperationsInput;
