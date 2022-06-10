"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShippingMethodCreateWithoutOrdersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PriceCreateNestedOneWithoutShippingMethodsInput_1 = require("../inputs/PriceCreateNestedOneWithoutShippingMethodsInput");
let ShippingMethodCreateWithoutOrdersInput = class ShippingMethodCreateWithoutOrdersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShippingMethodCreateWithoutOrdersInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ShippingMethodCreateWithoutOrdersInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ShippingMethodCreateWithoutOrdersInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ShippingMethodCreateWithoutOrdersInput.prototype, "label", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ShippingMethodCreateWithoutOrdersInput.prototype, "arrivalTimeInBusinessDays", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ShippingMethodCreateWithoutOrdersInput.prototype, "arrivalTimeInBusinessDaysRang", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ShippingMethodCreateWithoutOrdersInput.prototype, "arrivalTimeDescription", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceCreateNestedOneWithoutShippingMethodsInput_1.PriceCreateNestedOneWithoutShippingMethodsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PriceCreateNestedOneWithoutShippingMethodsInput_1.PriceCreateNestedOneWithoutShippingMethodsInput)
], ShippingMethodCreateWithoutOrdersInput.prototype, "price", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ShippingMethodCreateWithoutOrdersInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ShippingMethodCreateWithoutOrdersInput.prototype, "updatedAt", void 0);
ShippingMethodCreateWithoutOrdersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ShippingMethodCreateWithoutOrdersInput", {
        isAbstract: true
    })
], ShippingMethodCreateWithoutOrdersInput);
exports.ShippingMethodCreateWithoutOrdersInput = ShippingMethodCreateWithoutOrdersInput;
