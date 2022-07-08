"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumREQUEST_TYPEFieldUpdateOperationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const REQUEST_TYPE_1 = require("../../enums/REQUEST_TYPE");
let EnumREQUEST_TYPEFieldUpdateOperationsInput = class EnumREQUEST_TYPEFieldUpdateOperationsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => REQUEST_TYPE_1.REQUEST_TYPE, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumREQUEST_TYPEFieldUpdateOperationsInput.prototype, "set", void 0);
EnumREQUEST_TYPEFieldUpdateOperationsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumREQUEST_TYPEFieldUpdateOperationsInput", {
        isAbstract: true
    })
], EnumREQUEST_TYPEFieldUpdateOperationsInput);
exports.EnumREQUEST_TYPEFieldUpdateOperationsInput = EnumREQUEST_TYPEFieldUpdateOperationsInput;
