"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumPLANFieldUpdateOperationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PLAN_1 = require("../../enums/PLAN");
let EnumPLANFieldUpdateOperationsInput = class EnumPLANFieldUpdateOperationsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PLAN_1.PLAN, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumPLANFieldUpdateOperationsInput.prototype, "set", void 0);
EnumPLANFieldUpdateOperationsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumPLANFieldUpdateOperationsInput", {
        isAbstract: true
    })
], EnumPLANFieldUpdateOperationsInput);
exports.EnumPLANFieldUpdateOperationsInput = EnumPLANFieldUpdateOperationsInput;
