"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillingCreateNestedOneWithoutProductKeysInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BillingCreateOrConnectWithoutProductKeysInput_1 = require("../inputs/BillingCreateOrConnectWithoutProductKeysInput");
const BillingCreateWithoutProductKeysInput_1 = require("../inputs/BillingCreateWithoutProductKeysInput");
const BillingWhereUniqueInput_1 = require("../inputs/BillingWhereUniqueInput");
let BillingCreateNestedOneWithoutProductKeysInput = class BillingCreateNestedOneWithoutProductKeysInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BillingCreateWithoutProductKeysInput_1.BillingCreateWithoutProductKeysInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BillingCreateWithoutProductKeysInput_1.BillingCreateWithoutProductKeysInput)
], BillingCreateNestedOneWithoutProductKeysInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BillingCreateOrConnectWithoutProductKeysInput_1.BillingCreateOrConnectWithoutProductKeysInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BillingCreateOrConnectWithoutProductKeysInput_1.BillingCreateOrConnectWithoutProductKeysInput)
], BillingCreateNestedOneWithoutProductKeysInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BillingWhereUniqueInput_1.BillingWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BillingWhereUniqueInput_1.BillingWhereUniqueInput)
], BillingCreateNestedOneWithoutProductKeysInput.prototype, "connect", void 0);
BillingCreateNestedOneWithoutProductKeysInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BillingCreateNestedOneWithoutProductKeysInput", {
        isAbstract: true
    })
], BillingCreateNestedOneWithoutProductKeysInput);
exports.BillingCreateNestedOneWithoutProductKeysInput = BillingCreateNestedOneWithoutProductKeysInput;
