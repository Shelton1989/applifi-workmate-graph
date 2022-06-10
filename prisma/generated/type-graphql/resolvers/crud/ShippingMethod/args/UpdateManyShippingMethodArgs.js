"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyShippingMethodArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ShippingMethodUpdateManyMutationInput_1 = require("../../../inputs/ShippingMethodUpdateManyMutationInput");
const ShippingMethodWhereInput_1 = require("../../../inputs/ShippingMethodWhereInput");
let UpdateManyShippingMethodArgs = class UpdateManyShippingMethodArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShippingMethodUpdateManyMutationInput_1.ShippingMethodUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ShippingMethodUpdateManyMutationInput_1.ShippingMethodUpdateManyMutationInput)
], UpdateManyShippingMethodArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShippingMethodWhereInput_1.ShippingMethodWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShippingMethodWhereInput_1.ShippingMethodWhereInput)
], UpdateManyShippingMethodArgs.prototype, "where", void 0);
UpdateManyShippingMethodArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyShippingMethodArgs);
exports.UpdateManyShippingMethodArgs = UpdateManyShippingMethodArgs;
