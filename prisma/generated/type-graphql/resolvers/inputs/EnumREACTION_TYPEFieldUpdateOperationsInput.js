"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumREACTION_TYPEFieldUpdateOperationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const REACTION_TYPE_1 = require("../../enums/REACTION_TYPE");
let EnumREACTION_TYPEFieldUpdateOperationsInput = class EnumREACTION_TYPEFieldUpdateOperationsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => REACTION_TYPE_1.REACTION_TYPE, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumREACTION_TYPEFieldUpdateOperationsInput.prototype, "set", void 0);
EnumREACTION_TYPEFieldUpdateOperationsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumREACTION_TYPEFieldUpdateOperationsInput", {
        isAbstract: true
    })
], EnumREACTION_TYPEFieldUpdateOperationsInput);
exports.EnumREACTION_TYPEFieldUpdateOperationsInput = EnumREACTION_TYPEFieldUpdateOperationsInput;
