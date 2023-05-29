"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueBillingArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BillingWhereUniqueInput_1 = require("../../../inputs/BillingWhereUniqueInput");
let FindUniqueBillingArgs = class FindUniqueBillingArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BillingWhereUniqueInput_1.BillingWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BillingWhereUniqueInput_1.BillingWhereUniqueInput)
], FindUniqueBillingArgs.prototype, "where", void 0);
FindUniqueBillingArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueBillingArgs);
exports.FindUniqueBillingArgs = FindUniqueBillingArgs;
