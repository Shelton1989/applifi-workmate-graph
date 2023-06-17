"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductKeyCreateWithoutBillingInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ProductKeyCreateWithoutBillingInput = class ProductKeyCreateWithoutBillingInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductKeyCreateWithoutBillingInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductKeyCreateWithoutBillingInput.prototype, "key", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ProductKeyCreateWithoutBillingInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ProductKeyCreateWithoutBillingInput.prototype, "updatedAt", void 0);
ProductKeyCreateWithoutBillingInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductKeyCreateWithoutBillingInput", {
        isAbstract: true
    })
], ProductKeyCreateWithoutBillingInput);
exports.ProductKeyCreateWithoutBillingInput = ProductKeyCreateWithoutBillingInput;
