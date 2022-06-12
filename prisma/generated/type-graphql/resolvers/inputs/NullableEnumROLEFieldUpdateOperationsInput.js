"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NullableEnumROLEFieldUpdateOperationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ROLE_1 = require("../../enums/ROLE");
let NullableEnumROLEFieldUpdateOperationsInput = class NullableEnumROLEFieldUpdateOperationsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ROLE_1.ROLE, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NullableEnumROLEFieldUpdateOperationsInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], NullableEnumROLEFieldUpdateOperationsInput.prototype, "unset", void 0);
NullableEnumROLEFieldUpdateOperationsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("NullableEnumROLEFieldUpdateOperationsInput", {
        isAbstract: true
    })
], NullableEnumROLEFieldUpdateOperationsInput);
exports.NullableEnumROLEFieldUpdateOperationsInput = NullableEnumROLEFieldUpdateOperationsInput;
