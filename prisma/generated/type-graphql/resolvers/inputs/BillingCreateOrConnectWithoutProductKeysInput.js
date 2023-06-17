"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillingCreateOrConnectWithoutProductKeysInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BillingCreateWithoutProductKeysInput_1 = require("../inputs/BillingCreateWithoutProductKeysInput");
const BillingWhereUniqueInput_1 = require("../inputs/BillingWhereUniqueInput");
let BillingCreateOrConnectWithoutProductKeysInput = class BillingCreateOrConnectWithoutProductKeysInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BillingWhereUniqueInput_1.BillingWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BillingWhereUniqueInput_1.BillingWhereUniqueInput)
], BillingCreateOrConnectWithoutProductKeysInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BillingCreateWithoutProductKeysInput_1.BillingCreateWithoutProductKeysInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BillingCreateWithoutProductKeysInput_1.BillingCreateWithoutProductKeysInput)
], BillingCreateOrConnectWithoutProductKeysInput.prototype, "create", void 0);
BillingCreateOrConnectWithoutProductKeysInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BillingCreateOrConnectWithoutProductKeysInput", {
        isAbstract: true
    })
], BillingCreateOrConnectWithoutProductKeysInput);
exports.BillingCreateOrConnectWithoutProductKeysInput = BillingCreateOrConnectWithoutProductKeysInput;
