"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyShippingMethodArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ShippingMethodWhereInput_1 = require("../../../inputs/ShippingMethodWhereInput");
let DeleteManyShippingMethodArgs = class DeleteManyShippingMethodArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShippingMethodWhereInput_1.ShippingMethodWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShippingMethodWhereInput_1.ShippingMethodWhereInput)
], DeleteManyShippingMethodArgs.prototype, "where", void 0);
DeleteManyShippingMethodArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyShippingMethodArgs);
exports.DeleteManyShippingMethodArgs = DeleteManyShippingMethodArgs;
