"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumEXPERIENCE_CATEGORYFieldUpdateOperationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EXPERIENCE_CATEGORY_1 = require("../../enums/EXPERIENCE_CATEGORY");
let EnumEXPERIENCE_CATEGORYFieldUpdateOperationsInput = class EnumEXPERIENCE_CATEGORYFieldUpdateOperationsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EXPERIENCE_CATEGORY_1.EXPERIENCE_CATEGORY, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumEXPERIENCE_CATEGORYFieldUpdateOperationsInput.prototype, "set", void 0);
EnumEXPERIENCE_CATEGORYFieldUpdateOperationsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumEXPERIENCE_CATEGORYFieldUpdateOperationsInput", {
        isAbstract: true
    })
], EnumEXPERIENCE_CATEGORYFieldUpdateOperationsInput);
exports.EnumEXPERIENCE_CATEGORYFieldUpdateOperationsInput = EnumEXPERIENCE_CATEGORYFieldUpdateOperationsInput;
