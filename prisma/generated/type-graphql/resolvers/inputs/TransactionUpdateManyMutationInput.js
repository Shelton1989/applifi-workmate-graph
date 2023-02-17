"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionUpdateManyMutationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EnumPAYMENT_METHODFieldUpdateOperationsInput_1 = require("../inputs/EnumPAYMENT_METHODFieldUpdateOperationsInput");
const EnumPAYMENT_TYPEFieldUpdateOperationsInput_1 = require("../inputs/EnumPAYMENT_TYPEFieldUpdateOperationsInput");
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
let TransactionUpdateManyMutationInput = class TransactionUpdateManyMutationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], TransactionUpdateManyMutationInput.prototype, "amountInLowestDenomination", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], TransactionUpdateManyMutationInput.prototype, "SelectedPaymentType", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], TransactionUpdateManyMutationInput.prototype, "stripePaymentReference", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumPAYMENT_METHODFieldUpdateOperationsInput_1.EnumPAYMENT_METHODFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumPAYMENT_METHODFieldUpdateOperationsInput_1.EnumPAYMENT_METHODFieldUpdateOperationsInput)
], TransactionUpdateManyMutationInput.prototype, "paymentMethod", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumPAYMENT_TYPEFieldUpdateOperationsInput_1.EnumPAYMENT_TYPEFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumPAYMENT_TYPEFieldUpdateOperationsInput_1.EnumPAYMENT_TYPEFieldUpdateOperationsInput)
], TransactionUpdateManyMutationInput.prototype, "paymentType", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], TransactionUpdateManyMutationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], TransactionUpdateManyMutationInput.prototype, "updatedAt", void 0);
TransactionUpdateManyMutationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TransactionUpdateManyMutationInput", {
        isAbstract: true
    })
], TransactionUpdateManyMutationInput);
exports.TransactionUpdateManyMutationInput = TransactionUpdateManyMutationInput;
