"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyBillingArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BillingCreateManyInput_1 = require("../../../inputs/BillingCreateManyInput");
let CreateManyBillingArgs = class CreateManyBillingArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BillingCreateManyInput_1.BillingCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyBillingArgs.prototype, "data", void 0);
CreateManyBillingArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyBillingArgs);
exports.CreateManyBillingArgs = CreateManyBillingArgs;
