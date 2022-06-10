"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueShippingMethodArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ShippingMethodWhereUniqueInput_1 = require("../../../inputs/ShippingMethodWhereUniqueInput");
let FindUniqueShippingMethodArgs = class FindUniqueShippingMethodArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShippingMethodWhereUniqueInput_1.ShippingMethodWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ShippingMethodWhereUniqueInput_1.ShippingMethodWhereUniqueInput)
], FindUniqueShippingMethodArgs.prototype, "where", void 0);
FindUniqueShippingMethodArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueShippingMethodArgs);
exports.FindUniqueShippingMethodArgs = FindUniqueShippingMethodArgs;
