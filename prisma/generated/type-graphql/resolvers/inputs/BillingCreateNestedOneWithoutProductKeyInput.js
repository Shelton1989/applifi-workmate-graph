"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillingCreateNestedOneWithoutProductKeyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BillingCreateOrConnectWithoutProductKeyInput_1 = require("../inputs/BillingCreateOrConnectWithoutProductKeyInput");
const BillingCreateWithoutProductKeyInput_1 = require("../inputs/BillingCreateWithoutProductKeyInput");
const BillingWhereUniqueInput_1 = require("../inputs/BillingWhereUniqueInput");
let BillingCreateNestedOneWithoutProductKeyInput = class BillingCreateNestedOneWithoutProductKeyInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BillingCreateWithoutProductKeyInput_1.BillingCreateWithoutProductKeyInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BillingCreateWithoutProductKeyInput_1.BillingCreateWithoutProductKeyInput)
], BillingCreateNestedOneWithoutProductKeyInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BillingCreateOrConnectWithoutProductKeyInput_1.BillingCreateOrConnectWithoutProductKeyInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BillingCreateOrConnectWithoutProductKeyInput_1.BillingCreateOrConnectWithoutProductKeyInput)
], BillingCreateNestedOneWithoutProductKeyInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BillingWhereUniqueInput_1.BillingWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BillingWhereUniqueInput_1.BillingWhereUniqueInput)
], BillingCreateNestedOneWithoutProductKeyInput.prototype, "connect", void 0);
BillingCreateNestedOneWithoutProductKeyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BillingCreateNestedOneWithoutProductKeyInput", {
        isAbstract: true
    })
], BillingCreateNestedOneWithoutProductKeyInput);
exports.BillingCreateNestedOneWithoutProductKeyInput = BillingCreateNestedOneWithoutProductKeyInput;
