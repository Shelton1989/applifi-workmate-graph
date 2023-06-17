"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillingUpdateOneRequiredWithoutProductKeyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BillingCreateOrConnectWithoutProductKeyInput_1 = require("../inputs/BillingCreateOrConnectWithoutProductKeyInput");
const BillingCreateWithoutProductKeyInput_1 = require("../inputs/BillingCreateWithoutProductKeyInput");
const BillingUpdateWithoutProductKeyInput_1 = require("../inputs/BillingUpdateWithoutProductKeyInput");
const BillingUpsertWithoutProductKeyInput_1 = require("../inputs/BillingUpsertWithoutProductKeyInput");
const BillingWhereUniqueInput_1 = require("../inputs/BillingWhereUniqueInput");
let BillingUpdateOneRequiredWithoutProductKeyInput = class BillingUpdateOneRequiredWithoutProductKeyInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BillingCreateWithoutProductKeyInput_1.BillingCreateWithoutProductKeyInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BillingCreateWithoutProductKeyInput_1.BillingCreateWithoutProductKeyInput)
], BillingUpdateOneRequiredWithoutProductKeyInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BillingCreateOrConnectWithoutProductKeyInput_1.BillingCreateOrConnectWithoutProductKeyInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BillingCreateOrConnectWithoutProductKeyInput_1.BillingCreateOrConnectWithoutProductKeyInput)
], BillingUpdateOneRequiredWithoutProductKeyInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BillingUpsertWithoutProductKeyInput_1.BillingUpsertWithoutProductKeyInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BillingUpsertWithoutProductKeyInput_1.BillingUpsertWithoutProductKeyInput)
], BillingUpdateOneRequiredWithoutProductKeyInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BillingWhereUniqueInput_1.BillingWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BillingWhereUniqueInput_1.BillingWhereUniqueInput)
], BillingUpdateOneRequiredWithoutProductKeyInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BillingUpdateWithoutProductKeyInput_1.BillingUpdateWithoutProductKeyInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BillingUpdateWithoutProductKeyInput_1.BillingUpdateWithoutProductKeyInput)
], BillingUpdateOneRequiredWithoutProductKeyInput.prototype, "update", void 0);
BillingUpdateOneRequiredWithoutProductKeyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BillingUpdateOneRequiredWithoutProductKeyInput", {
        isAbstract: true
    })
], BillingUpdateOneRequiredWithoutProductKeyInput);
exports.BillingUpdateOneRequiredWithoutProductKeyInput = BillingUpdateOneRequiredWithoutProductKeyInput;
