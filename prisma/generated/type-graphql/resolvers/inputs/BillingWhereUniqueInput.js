"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillingWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let BillingWhereUniqueInput = class BillingWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BillingWhereUniqueInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BillingWhereUniqueInput.prototype, "tenantId", void 0);
BillingWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BillingWhereUniqueInput", {
        isAbstract: true
    })
], BillingWhereUniqueInput);
exports.BillingWhereUniqueInput = BillingWhereUniqueInput;
