"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumLIST_TYPEFieldUpdateOperationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LIST_TYPE_1 = require("../../enums/LIST_TYPE");
let EnumLIST_TYPEFieldUpdateOperationsInput = class EnumLIST_TYPEFieldUpdateOperationsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LIST_TYPE_1.LIST_TYPE, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumLIST_TYPEFieldUpdateOperationsInput.prototype, "set", void 0);
EnumLIST_TYPEFieldUpdateOperationsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumLIST_TYPEFieldUpdateOperationsInput", {
        isAbstract: true
    })
], EnumLIST_TYPEFieldUpdateOperationsInput);
exports.EnumLIST_TYPEFieldUpdateOperationsInput = EnumLIST_TYPEFieldUpdateOperationsInput;
