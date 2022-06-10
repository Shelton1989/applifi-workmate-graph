"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateShippingMethodArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ShippingMethodUpdateInput_1 = require("../../../inputs/ShippingMethodUpdateInput");
const ShippingMethodWhereUniqueInput_1 = require("../../../inputs/ShippingMethodWhereUniqueInput");
let UpdateShippingMethodArgs = class UpdateShippingMethodArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShippingMethodUpdateInput_1.ShippingMethodUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ShippingMethodUpdateInput_1.ShippingMethodUpdateInput)
], UpdateShippingMethodArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShippingMethodWhereUniqueInput_1.ShippingMethodWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ShippingMethodWhereUniqueInput_1.ShippingMethodWhereUniqueInput)
], UpdateShippingMethodArgs.prototype, "where", void 0);
UpdateShippingMethodArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateShippingMethodArgs);
exports.UpdateShippingMethodArgs = UpdateShippingMethodArgs;
