"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteShippingMethodArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ShippingMethodWhereUniqueInput_1 = require("../../../inputs/ShippingMethodWhereUniqueInput");
let DeleteShippingMethodArgs = class DeleteShippingMethodArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShippingMethodWhereUniqueInput_1.ShippingMethodWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ShippingMethodWhereUniqueInput_1.ShippingMethodWhereUniqueInput)
], DeleteShippingMethodArgs.prototype, "where", void 0);
DeleteShippingMethodArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteShippingMethodArgs);
exports.DeleteShippingMethodArgs = DeleteShippingMethodArgs;
