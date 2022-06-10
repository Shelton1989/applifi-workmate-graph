"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateShippingMethodArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ShippingMethodCreateInput_1 = require("../../../inputs/ShippingMethodCreateInput");
let CreateShippingMethodArgs = class CreateShippingMethodArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShippingMethodCreateInput_1.ShippingMethodCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ShippingMethodCreateInput_1.ShippingMethodCreateInput)
], CreateShippingMethodArgs.prototype, "data", void 0);
CreateShippingMethodArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateShippingMethodArgs);
exports.CreateShippingMethodArgs = CreateShippingMethodArgs;
