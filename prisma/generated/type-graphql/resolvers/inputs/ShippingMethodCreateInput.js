"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShippingMethodCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderCreateNestedManyWithoutSelectedShippingMethodInput_1 = require("../inputs/OrderCreateNestedManyWithoutSelectedShippingMethodInput");
const PriceCreateNestedOneWithoutShippingMethodsInput_1 = require("../inputs/PriceCreateNestedOneWithoutShippingMethodsInput");
let ShippingMethodCreateInput = class ShippingMethodCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShippingMethodCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ShippingMethodCreateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ShippingMethodCreateInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ShippingMethodCreateInput.prototype, "label", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ShippingMethodCreateInput.prototype, "arrivalTimeInBusinessDays", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ShippingMethodCreateInput.prototype, "arrivalTimeInBusinessDaysRang", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ShippingMethodCreateInput.prototype, "arrivalTimeDescription", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceCreateNestedOneWithoutShippingMethodsInput_1.PriceCreateNestedOneWithoutShippingMethodsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PriceCreateNestedOneWithoutShippingMethodsInput_1.PriceCreateNestedOneWithoutShippingMethodsInput)
], ShippingMethodCreateInput.prototype, "price", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderCreateNestedManyWithoutSelectedShippingMethodInput_1.OrderCreateNestedManyWithoutSelectedShippingMethodInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderCreateNestedManyWithoutSelectedShippingMethodInput_1.OrderCreateNestedManyWithoutSelectedShippingMethodInput)
], ShippingMethodCreateInput.prototype, "Orders", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ShippingMethodCreateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ShippingMethodCreateInput.prototype, "updatedAt", void 0);
ShippingMethodCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ShippingMethodCreateInput", {
        isAbstract: true
    })
], ShippingMethodCreateInput);
exports.ShippingMethodCreateInput = ShippingMethodCreateInput;
