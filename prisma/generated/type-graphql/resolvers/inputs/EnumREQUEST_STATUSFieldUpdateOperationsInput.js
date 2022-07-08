"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumREQUEST_STATUSFieldUpdateOperationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const REQUEST_STATUS_1 = require("../../enums/REQUEST_STATUS");
let EnumREQUEST_STATUSFieldUpdateOperationsInput = class EnumREQUEST_STATUSFieldUpdateOperationsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => REQUEST_STATUS_1.REQUEST_STATUS, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumREQUEST_STATUSFieldUpdateOperationsInput.prototype, "set", void 0);
EnumREQUEST_STATUSFieldUpdateOperationsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumREQUEST_STATUSFieldUpdateOperationsInput", {
        isAbstract: true
    })
], EnumREQUEST_STATUSFieldUpdateOperationsInput);
exports.EnumREQUEST_STATUSFieldUpdateOperationsInput = EnumREQUEST_STATUSFieldUpdateOperationsInput;
