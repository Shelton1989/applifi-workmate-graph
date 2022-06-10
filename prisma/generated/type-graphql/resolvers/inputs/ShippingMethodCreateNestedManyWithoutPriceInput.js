"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShippingMethodCreateNestedManyWithoutPriceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ShippingMethodCreateManyPriceInputEnvelope_1 = require("../inputs/ShippingMethodCreateManyPriceInputEnvelope");
const ShippingMethodCreateOrConnectWithoutPriceInput_1 = require("../inputs/ShippingMethodCreateOrConnectWithoutPriceInput");
const ShippingMethodCreateWithoutPriceInput_1 = require("../inputs/ShippingMethodCreateWithoutPriceInput");
const ShippingMethodWhereUniqueInput_1 = require("../inputs/ShippingMethodWhereUniqueInput");
let ShippingMethodCreateNestedManyWithoutPriceInput = class ShippingMethodCreateNestedManyWithoutPriceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ShippingMethodCreateWithoutPriceInput_1.ShippingMethodCreateWithoutPriceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ShippingMethodCreateNestedManyWithoutPriceInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ShippingMethodCreateOrConnectWithoutPriceInput_1.ShippingMethodCreateOrConnectWithoutPriceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ShippingMethodCreateNestedManyWithoutPriceInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShippingMethodCreateManyPriceInputEnvelope_1.ShippingMethodCreateManyPriceInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShippingMethodCreateManyPriceInputEnvelope_1.ShippingMethodCreateManyPriceInputEnvelope)
], ShippingMethodCreateNestedManyWithoutPriceInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ShippingMethodWhereUniqueInput_1.ShippingMethodWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ShippingMethodCreateNestedManyWithoutPriceInput.prototype, "connect", void 0);
ShippingMethodCreateNestedManyWithoutPriceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ShippingMethodCreateNestedManyWithoutPriceInput", {
        isAbstract: true
    })
], ShippingMethodCreateNestedManyWithoutPriceInput);
exports.ShippingMethodCreateNestedManyWithoutPriceInput = ShippingMethodCreateNestedManyWithoutPriceInput;
