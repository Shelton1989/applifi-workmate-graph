"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBillingArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BillingUpdateInput_1 = require("../../../inputs/BillingUpdateInput");
const BillingWhereUniqueInput_1 = require("../../../inputs/BillingWhereUniqueInput");
let UpdateBillingArgs = class UpdateBillingArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BillingUpdateInput_1.BillingUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BillingUpdateInput_1.BillingUpdateInput)
], UpdateBillingArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BillingWhereUniqueInput_1.BillingWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BillingWhereUniqueInput_1.BillingWhereUniqueInput)
], UpdateBillingArgs.prototype, "where", void 0);
UpdateBillingArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateBillingArgs);
exports.UpdateBillingArgs = UpdateBillingArgs;
