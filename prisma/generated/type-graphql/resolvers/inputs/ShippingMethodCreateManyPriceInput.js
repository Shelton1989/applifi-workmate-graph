"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShippingMethodCreateManyPriceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ShippingMethodCreateManyPriceInput = class ShippingMethodCreateManyPriceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShippingMethodCreateManyPriceInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ShippingMethodCreateManyPriceInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ShippingMethodCreateManyPriceInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ShippingMethodCreateManyPriceInput.prototype, "label", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ShippingMethodCreateManyPriceInput.prototype, "arrivalTimeInBusinessDays", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ShippingMethodCreateManyPriceInput.prototype, "arrivalTimeInBusinessDaysRang", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ShippingMethodCreateManyPriceInput.prototype, "arrivalTimeDescription", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ShippingMethodCreateManyPriceInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ShippingMethodCreateManyPriceInput.prototype, "updatedAt", void 0);
ShippingMethodCreateManyPriceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ShippingMethodCreateManyPriceInput", {
        isAbstract: true
    })
], ShippingMethodCreateManyPriceInput);
exports.ShippingMethodCreateManyPriceInput = ShippingMethodCreateManyPriceInput;
