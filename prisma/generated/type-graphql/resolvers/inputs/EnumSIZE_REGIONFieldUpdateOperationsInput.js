"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumSIZE_REGIONFieldUpdateOperationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SIZE_REGION_1 = require("../../enums/SIZE_REGION");
let EnumSIZE_REGIONFieldUpdateOperationsInput = class EnumSIZE_REGIONFieldUpdateOperationsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SIZE_REGION_1.SIZE_REGION, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumSIZE_REGIONFieldUpdateOperationsInput.prototype, "set", void 0);
EnumSIZE_REGIONFieldUpdateOperationsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumSIZE_REGIONFieldUpdateOperationsInput", {
        isAbstract: true
    })
], EnumSIZE_REGIONFieldUpdateOperationsInput);
exports.EnumSIZE_REGIONFieldUpdateOperationsInput = EnumSIZE_REGIONFieldUpdateOperationsInput;
