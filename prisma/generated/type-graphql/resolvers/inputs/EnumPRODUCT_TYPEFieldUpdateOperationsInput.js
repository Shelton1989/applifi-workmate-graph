"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumPRODUCT_TYPEFieldUpdateOperationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PRODUCT_TYPE_1 = require("../../enums/PRODUCT_TYPE");
let EnumPRODUCT_TYPEFieldUpdateOperationsInput = class EnumPRODUCT_TYPEFieldUpdateOperationsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PRODUCT_TYPE_1.PRODUCT_TYPE, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumPRODUCT_TYPEFieldUpdateOperationsInput.prototype, "set", void 0);
EnumPRODUCT_TYPEFieldUpdateOperationsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumPRODUCT_TYPEFieldUpdateOperationsInput", {
        isAbstract: true
    })
], EnumPRODUCT_TYPEFieldUpdateOperationsInput);
exports.EnumPRODUCT_TYPEFieldUpdateOperationsInput = EnumPRODUCT_TYPEFieldUpdateOperationsInput;
