"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCreateManyPriceInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductCreateManyPriceInput_1 = require("../inputs/ProductCreateManyPriceInput");
let ProductCreateManyPriceInputEnvelope = class ProductCreateManyPriceInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductCreateManyPriceInput_1.ProductCreateManyPriceInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], ProductCreateManyPriceInputEnvelope.prototype, "data", void 0);
ProductCreateManyPriceInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductCreateManyPriceInputEnvelope", {
        isAbstract: true
    })
], ProductCreateManyPriceInputEnvelope);
exports.ProductCreateManyPriceInputEnvelope = ProductCreateManyPriceInputEnvelope;
