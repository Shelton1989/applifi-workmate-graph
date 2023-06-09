"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductKeyCreateManyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ProductKeyCreateManyInput = class ProductKeyCreateManyInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductKeyCreateManyInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductKeyCreateManyInput.prototype, "billingId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductKeyCreateManyInput.prototype, "createdBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductKeyCreateManyInput.prototype, "key", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ProductKeyCreateManyInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ProductKeyCreateManyInput.prototype, "updatedAt", void 0);
ProductKeyCreateManyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductKeyCreateManyInput", {
        isAbstract: true
    })
], ProductKeyCreateManyInput);
exports.ProductKeyCreateManyInput = ProductKeyCreateManyInput;
