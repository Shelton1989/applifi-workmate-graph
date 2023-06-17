"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductKeyCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BillingCreateNestedOneWithoutProductKeyInput_1 = require("../inputs/BillingCreateNestedOneWithoutProductKeyInput");
let ProductKeyCreateInput = class ProductKeyCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductKeyCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BillingCreateNestedOneWithoutProductKeyInput_1.BillingCreateNestedOneWithoutProductKeyInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BillingCreateNestedOneWithoutProductKeyInput_1.BillingCreateNestedOneWithoutProductKeyInput)
], ProductKeyCreateInput.prototype, "Billing", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductKeyCreateInput.prototype, "key", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ProductKeyCreateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ProductKeyCreateInput.prototype, "updatedAt", void 0);
ProductKeyCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductKeyCreateInput", {
        isAbstract: true
    })
], ProductKeyCreateInput);
exports.ProductKeyCreateInput = ProductKeyCreateInput;
