"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteBillingArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BillingWhereUniqueInput_1 = require("../../../inputs/BillingWhereUniqueInput");
let DeleteBillingArgs = class DeleteBillingArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BillingWhereUniqueInput_1.BillingWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BillingWhereUniqueInput_1.BillingWhereUniqueInput)
], DeleteBillingArgs.prototype, "where", void 0);
DeleteBillingArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteBillingArgs);
exports.DeleteBillingArgs = DeleteBillingArgs;
