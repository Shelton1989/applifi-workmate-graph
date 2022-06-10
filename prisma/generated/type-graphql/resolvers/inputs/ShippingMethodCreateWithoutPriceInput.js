"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShippingMethodCreateWithoutPriceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderCreateNestedManyWithoutSelectedShippingMethodInput_1 = require("../inputs/OrderCreateNestedManyWithoutSelectedShippingMethodInput");
let ShippingMethodCreateWithoutPriceInput = class ShippingMethodCreateWithoutPriceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShippingMethodCreateWithoutPriceInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ShippingMethodCreateWithoutPriceInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ShippingMethodCreateWithoutPriceInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ShippingMethodCreateWithoutPriceInput.prototype, "label", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ShippingMethodCreateWithoutPriceInput.prototype, "arrivalTimeInBusinessDays", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ShippingMethodCreateWithoutPriceInput.prototype, "arrivalTimeInBusinessDaysRang", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ShippingMethodCreateWithoutPriceInput.prototype, "arrivalTimeDescription", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderCreateNestedManyWithoutSelectedShippingMethodInput_1.OrderCreateNestedManyWithoutSelectedShippingMethodInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderCreateNestedManyWithoutSelectedShippingMethodInput_1.OrderCreateNestedManyWithoutSelectedShippingMethodInput)
], ShippingMethodCreateWithoutPriceInput.prototype, "Orders", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ShippingMethodCreateWithoutPriceInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ShippingMethodCreateWithoutPriceInput.prototype, "updatedAt", void 0);
ShippingMethodCreateWithoutPriceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ShippingMethodCreateWithoutPriceInput", {
        isAbstract: true
    })
], ShippingMethodCreateWithoutPriceInput);
exports.ShippingMethodCreateWithoutPriceInput = ShippingMethodCreateWithoutPriceInput;
