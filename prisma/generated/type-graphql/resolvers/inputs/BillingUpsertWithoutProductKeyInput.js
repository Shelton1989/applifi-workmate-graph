"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillingUpsertWithoutProductKeyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BillingCreateWithoutProductKeyInput_1 = require("../inputs/BillingCreateWithoutProductKeyInput");
const BillingUpdateWithoutProductKeyInput_1 = require("../inputs/BillingUpdateWithoutProductKeyInput");
let BillingUpsertWithoutProductKeyInput = class BillingUpsertWithoutProductKeyInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BillingUpdateWithoutProductKeyInput_1.BillingUpdateWithoutProductKeyInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BillingUpdateWithoutProductKeyInput_1.BillingUpdateWithoutProductKeyInput)
], BillingUpsertWithoutProductKeyInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BillingCreateWithoutProductKeyInput_1.BillingCreateWithoutProductKeyInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BillingCreateWithoutProductKeyInput_1.BillingCreateWithoutProductKeyInput)
], BillingUpsertWithoutProductKeyInput.prototype, "create", void 0);
BillingUpsertWithoutProductKeyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BillingUpsertWithoutProductKeyInput", {
        isAbstract: true
    })
], BillingUpsertWithoutProductKeyInput);
exports.BillingUpsertWithoutProductKeyInput = BillingUpsertWithoutProductKeyInput;
