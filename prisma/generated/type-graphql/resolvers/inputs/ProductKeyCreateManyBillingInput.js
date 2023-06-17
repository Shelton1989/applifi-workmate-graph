"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductKeyCreateManyBillingInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ProductKeyCreateManyBillingInput = class ProductKeyCreateManyBillingInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductKeyCreateManyBillingInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductKeyCreateManyBillingInput.prototype, "createdBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductKeyCreateManyBillingInput.prototype, "key", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ProductKeyCreateManyBillingInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ProductKeyCreateManyBillingInput.prototype, "updatedAt", void 0);
ProductKeyCreateManyBillingInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductKeyCreateManyBillingInput", {
        isAbstract: true
    })
], ProductKeyCreateManyBillingInput);
exports.ProductKeyCreateManyBillingInput = ProductKeyCreateManyBillingInput;
