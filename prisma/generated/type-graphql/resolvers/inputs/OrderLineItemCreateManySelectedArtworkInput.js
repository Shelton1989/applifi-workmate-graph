"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderLineItemCreateManySelectedArtworkInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let OrderLineItemCreateManySelectedArtworkInput = class OrderLineItemCreateManySelectedArtworkInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderLineItemCreateManySelectedArtworkInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], OrderLineItemCreateManySelectedArtworkInput.prototype, "priceId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], OrderLineItemCreateManySelectedArtworkInput.prototype, "selectedProductId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], OrderLineItemCreateManySelectedArtworkInput.prototype, "selectedColorId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], OrderLineItemCreateManySelectedArtworkInput.prototype, "selectedSizeId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], OrderLineItemCreateManySelectedArtworkInput.prototype, "orderId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], OrderLineItemCreateManySelectedArtworkInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], OrderLineItemCreateManySelectedArtworkInput.prototype, "updatedAt", void 0);
OrderLineItemCreateManySelectedArtworkInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderLineItemCreateManySelectedArtworkInput", {
        isAbstract: true
    })
], OrderLineItemCreateManySelectedArtworkInput);
exports.OrderLineItemCreateManySelectedArtworkInput = OrderLineItemCreateManySelectedArtworkInput;
