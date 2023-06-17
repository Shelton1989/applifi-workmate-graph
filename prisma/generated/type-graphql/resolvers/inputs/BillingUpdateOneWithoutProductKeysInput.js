"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillingUpdateOneWithoutProductKeysInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BillingCreateOrConnectWithoutProductKeysInput_1 = require("../inputs/BillingCreateOrConnectWithoutProductKeysInput");
const BillingCreateWithoutProductKeysInput_1 = require("../inputs/BillingCreateWithoutProductKeysInput");
const BillingUpdateWithoutProductKeysInput_1 = require("../inputs/BillingUpdateWithoutProductKeysInput");
const BillingUpsertWithoutProductKeysInput_1 = require("../inputs/BillingUpsertWithoutProductKeysInput");
const BillingWhereUniqueInput_1 = require("../inputs/BillingWhereUniqueInput");
let BillingUpdateOneWithoutProductKeysInput = class BillingUpdateOneWithoutProductKeysInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BillingCreateWithoutProductKeysInput_1.BillingCreateWithoutProductKeysInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BillingCreateWithoutProductKeysInput_1.BillingCreateWithoutProductKeysInput)
], BillingUpdateOneWithoutProductKeysInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BillingCreateOrConnectWithoutProductKeysInput_1.BillingCreateOrConnectWithoutProductKeysInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BillingCreateOrConnectWithoutProductKeysInput_1.BillingCreateOrConnectWithoutProductKeysInput)
], BillingUpdateOneWithoutProductKeysInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BillingUpsertWithoutProductKeysInput_1.BillingUpsertWithoutProductKeysInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BillingUpsertWithoutProductKeysInput_1.BillingUpsertWithoutProductKeysInput)
], BillingUpdateOneWithoutProductKeysInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], BillingUpdateOneWithoutProductKeysInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], BillingUpdateOneWithoutProductKeysInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BillingWhereUniqueInput_1.BillingWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BillingWhereUniqueInput_1.BillingWhereUniqueInput)
], BillingUpdateOneWithoutProductKeysInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BillingUpdateWithoutProductKeysInput_1.BillingUpdateWithoutProductKeysInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BillingUpdateWithoutProductKeysInput_1.BillingUpdateWithoutProductKeysInput)
], BillingUpdateOneWithoutProductKeysInput.prototype, "update", void 0);
BillingUpdateOneWithoutProductKeysInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BillingUpdateOneWithoutProductKeysInput", {
        isAbstract: true
    })
], BillingUpdateOneWithoutProductKeysInput);
exports.BillingUpdateOneWithoutProductKeysInput = BillingUpdateOneWithoutProductKeysInput;
