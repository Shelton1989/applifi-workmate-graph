"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyBillingArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BillingWhereInput_1 = require("../../../inputs/BillingWhereInput");
let DeleteManyBillingArgs = class DeleteManyBillingArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BillingWhereInput_1.BillingWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BillingWhereInput_1.BillingWhereInput)
], DeleteManyBillingArgs.prototype, "where", void 0);
DeleteManyBillingArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyBillingArgs);
exports.DeleteManyBillingArgs = DeleteManyBillingArgs;
