"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyBillingArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BillingUpdateManyMutationInput_1 = require("../../../inputs/BillingUpdateManyMutationInput");
const BillingWhereInput_1 = require("../../../inputs/BillingWhereInput");
let UpdateManyBillingArgs = class UpdateManyBillingArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BillingUpdateManyMutationInput_1.BillingUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BillingUpdateManyMutationInput_1.BillingUpdateManyMutationInput)
], UpdateManyBillingArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BillingWhereInput_1.BillingWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BillingWhereInput_1.BillingWhereInput)
], UpdateManyBillingArgs.prototype, "where", void 0);
UpdateManyBillingArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyBillingArgs);
exports.UpdateManyBillingArgs = UpdateManyBillingArgs;
