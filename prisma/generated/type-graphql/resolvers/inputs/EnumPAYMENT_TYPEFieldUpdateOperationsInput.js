"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumPAYMENT_TYPEFieldUpdateOperationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PAYMENT_TYPE_1 = require("../../enums/PAYMENT_TYPE");
let EnumPAYMENT_TYPEFieldUpdateOperationsInput = class EnumPAYMENT_TYPEFieldUpdateOperationsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PAYMENT_TYPE_1.PAYMENT_TYPE, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumPAYMENT_TYPEFieldUpdateOperationsInput.prototype, "set", void 0);
EnumPAYMENT_TYPEFieldUpdateOperationsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumPAYMENT_TYPEFieldUpdateOperationsInput", {
        isAbstract: true
    })
], EnumPAYMENT_TYPEFieldUpdateOperationsInput);
exports.EnumPAYMENT_TYPEFieldUpdateOperationsInput = EnumPAYMENT_TYPEFieldUpdateOperationsInput;
