"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillingUpsertWithoutProductKeysInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BillingCreateWithoutProductKeysInput_1 = require("../inputs/BillingCreateWithoutProductKeysInput");
const BillingUpdateWithoutProductKeysInput_1 = require("../inputs/BillingUpdateWithoutProductKeysInput");
let BillingUpsertWithoutProductKeysInput = class BillingUpsertWithoutProductKeysInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BillingUpdateWithoutProductKeysInput_1.BillingUpdateWithoutProductKeysInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BillingUpdateWithoutProductKeysInput_1.BillingUpdateWithoutProductKeysInput)
], BillingUpsertWithoutProductKeysInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BillingCreateWithoutProductKeysInput_1.BillingCreateWithoutProductKeysInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BillingCreateWithoutProductKeysInput_1.BillingCreateWithoutProductKeysInput)
], BillingUpsertWithoutProductKeysInput.prototype, "create", void 0);
BillingUpsertWithoutProductKeysInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BillingUpsertWithoutProductKeysInput", {
        isAbstract: true
    })
], BillingUpsertWithoutProductKeysInput);
exports.BillingUpsertWithoutProductKeysInput = BillingUpsertWithoutProductKeysInput;
