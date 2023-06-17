"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductKeyWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ProductKeyWhereUniqueInput = class ProductKeyWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductKeyWhereUniqueInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductKeyWhereUniqueInput.prototype, "billingId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductKeyWhereUniqueInput.prototype, "key", void 0);
ProductKeyWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductKeyWhereUniqueInput", {
        isAbstract: true
    })
], ProductKeyWhereUniqueInput);
exports.ProductKeyWhereUniqueInput = ProductKeyWhereUniqueInput;
