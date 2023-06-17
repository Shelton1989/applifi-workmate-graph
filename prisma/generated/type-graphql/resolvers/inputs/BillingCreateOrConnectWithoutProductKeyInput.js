"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillingCreateOrConnectWithoutProductKeyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BillingCreateWithoutProductKeyInput_1 = require("../inputs/BillingCreateWithoutProductKeyInput");
const BillingWhereUniqueInput_1 = require("../inputs/BillingWhereUniqueInput");
let BillingCreateOrConnectWithoutProductKeyInput = class BillingCreateOrConnectWithoutProductKeyInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BillingWhereUniqueInput_1.BillingWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BillingWhereUniqueInput_1.BillingWhereUniqueInput)
], BillingCreateOrConnectWithoutProductKeyInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BillingCreateWithoutProductKeyInput_1.BillingCreateWithoutProductKeyInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BillingCreateWithoutProductKeyInput_1.BillingCreateWithoutProductKeyInput)
], BillingCreateOrConnectWithoutProductKeyInput.prototype, "create", void 0);
BillingCreateOrConnectWithoutProductKeyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BillingCreateOrConnectWithoutProductKeyInput", {
        isAbstract: true
    })
], BillingCreateOrConnectWithoutProductKeyInput);
exports.BillingCreateOrConnectWithoutProductKeyInput = BillingCreateOrConnectWithoutProductKeyInput;
