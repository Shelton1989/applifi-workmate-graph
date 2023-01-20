"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NullableEnumEXPERIENCE_CATEGORYFieldUpdateOperationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EXPERIENCE_CATEGORY_1 = require("../../enums/EXPERIENCE_CATEGORY");
let NullableEnumEXPERIENCE_CATEGORYFieldUpdateOperationsInput = class NullableEnumEXPERIENCE_CATEGORYFieldUpdateOperationsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EXPERIENCE_CATEGORY_1.EXPERIENCE_CATEGORY, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NullableEnumEXPERIENCE_CATEGORYFieldUpdateOperationsInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], NullableEnumEXPERIENCE_CATEGORYFieldUpdateOperationsInput.prototype, "unset", void 0);
NullableEnumEXPERIENCE_CATEGORYFieldUpdateOperationsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("NullableEnumEXPERIENCE_CATEGORYFieldUpdateOperationsInput", {
        isAbstract: true
    })
], NullableEnumEXPERIENCE_CATEGORYFieldUpdateOperationsInput);
exports.NullableEnumEXPERIENCE_CATEGORYFieldUpdateOperationsInput = NullableEnumEXPERIENCE_CATEGORYFieldUpdateOperationsInput;
