"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShippingMethodUpdateManyWithWhereWithoutPriceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ShippingMethodScalarWhereInput_1 = require("../inputs/ShippingMethodScalarWhereInput");
const ShippingMethodUpdateManyMutationInput_1 = require("../inputs/ShippingMethodUpdateManyMutationInput");
let ShippingMethodUpdateManyWithWhereWithoutPriceInput = class ShippingMethodUpdateManyWithWhereWithoutPriceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShippingMethodScalarWhereInput_1.ShippingMethodScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ShippingMethodScalarWhereInput_1.ShippingMethodScalarWhereInput)
], ShippingMethodUpdateManyWithWhereWithoutPriceInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShippingMethodUpdateManyMutationInput_1.ShippingMethodUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ShippingMethodUpdateManyMutationInput_1.ShippingMethodUpdateManyMutationInput)
], ShippingMethodUpdateManyWithWhereWithoutPriceInput.prototype, "data", void 0);
ShippingMethodUpdateManyWithWhereWithoutPriceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ShippingMethodUpdateManyWithWhereWithoutPriceInput", {
        isAbstract: true
    })
], ShippingMethodUpdateManyWithWhereWithoutPriceInput);
exports.ShippingMethodUpdateManyWithWhereWithoutPriceInput = ShippingMethodUpdateManyWithWhereWithoutPriceInput;
