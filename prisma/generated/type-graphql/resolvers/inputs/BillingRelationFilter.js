"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillingRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BillingWhereInput_1 = require("../inputs/BillingWhereInput");
let BillingRelationFilter = class BillingRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BillingWhereInput_1.BillingWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BillingWhereInput_1.BillingWhereInput)
], BillingRelationFilter.prototype, "is", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BillingWhereInput_1.BillingWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BillingWhereInput_1.BillingWhereInput)
], BillingRelationFilter.prototype, "isNot", void 0);
BillingRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("BillingRelationFilter", {
        isAbstract: true
    })
], BillingRelationFilter);
exports.BillingRelationFilter = BillingRelationFilter;
