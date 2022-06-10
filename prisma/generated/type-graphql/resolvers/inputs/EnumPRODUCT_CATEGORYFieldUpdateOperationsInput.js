"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumPRODUCT_CATEGORYFieldUpdateOperationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PRODUCT_CATEGORY_1 = require("../../enums/PRODUCT_CATEGORY");
let EnumPRODUCT_CATEGORYFieldUpdateOperationsInput = class EnumPRODUCT_CATEGORYFieldUpdateOperationsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PRODUCT_CATEGORY_1.PRODUCT_CATEGORY, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumPRODUCT_CATEGORYFieldUpdateOperationsInput.prototype, "set", void 0);
EnumPRODUCT_CATEGORYFieldUpdateOperationsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumPRODUCT_CATEGORYFieldUpdateOperationsInput", {
        isAbstract: true
    })
], EnumPRODUCT_CATEGORYFieldUpdateOperationsInput);
exports.EnumPRODUCT_CATEGORYFieldUpdateOperationsInput = EnumPRODUCT_CATEGORYFieldUpdateOperationsInput;
