"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumPAYMENT_METHODFieldUpdateOperationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PAYMENT_METHOD_1 = require("../../enums/PAYMENT_METHOD");
let EnumPAYMENT_METHODFieldUpdateOperationsInput = class EnumPAYMENT_METHODFieldUpdateOperationsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PAYMENT_METHOD_1.PAYMENT_METHOD, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumPAYMENT_METHODFieldUpdateOperationsInput.prototype, "set", void 0);
EnumPAYMENT_METHODFieldUpdateOperationsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumPAYMENT_METHODFieldUpdateOperationsInput", {
        isAbstract: true
    })
], EnumPAYMENT_METHODFieldUpdateOperationsInput);
exports.EnumPAYMENT_METHODFieldUpdateOperationsInput = EnumPAYMENT_METHODFieldUpdateOperationsInput;
