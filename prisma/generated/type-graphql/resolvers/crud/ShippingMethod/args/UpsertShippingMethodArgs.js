"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertShippingMethodArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ShippingMethodCreateInput_1 = require("../../../inputs/ShippingMethodCreateInput");
const ShippingMethodUpdateInput_1 = require("../../../inputs/ShippingMethodUpdateInput");
const ShippingMethodWhereUniqueInput_1 = require("../../../inputs/ShippingMethodWhereUniqueInput");
let UpsertShippingMethodArgs = class UpsertShippingMethodArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShippingMethodWhereUniqueInput_1.ShippingMethodWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ShippingMethodWhereUniqueInput_1.ShippingMethodWhereUniqueInput)
], UpsertShippingMethodArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShippingMethodCreateInput_1.ShippingMethodCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ShippingMethodCreateInput_1.ShippingMethodCreateInput)
], UpsertShippingMethodArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShippingMethodUpdateInput_1.ShippingMethodUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ShippingMethodUpdateInput_1.ShippingMethodUpdateInput)
], UpsertShippingMethodArgs.prototype, "update", void 0);
UpsertShippingMethodArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertShippingMethodArgs);
exports.UpsertShippingMethodArgs = UpsertShippingMethodArgs;
