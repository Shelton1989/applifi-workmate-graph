"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumROLEFieldUpdateOperationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ROLE_1 = require("../../enums/ROLE");
let EnumROLEFieldUpdateOperationsInput = class EnumROLEFieldUpdateOperationsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ROLE_1.ROLE, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumROLEFieldUpdateOperationsInput.prototype, "set", void 0);
EnumROLEFieldUpdateOperationsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumROLEFieldUpdateOperationsInput", {
        isAbstract: true
    })
], EnumROLEFieldUpdateOperationsInput);
exports.EnumROLEFieldUpdateOperationsInput = EnumROLEFieldUpdateOperationsInput;
