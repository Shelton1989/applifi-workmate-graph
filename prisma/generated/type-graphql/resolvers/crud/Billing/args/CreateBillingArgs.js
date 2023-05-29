"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateBillingArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BillingCreateInput_1 = require("../../../inputs/BillingCreateInput");
let CreateBillingArgs = class CreateBillingArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BillingCreateInput_1.BillingCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BillingCreateInput_1.BillingCreateInput)
], CreateBillingArgs.prototype, "data", void 0);
CreateBillingArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateBillingArgs);
exports.CreateBillingArgs = CreateBillingArgs;
