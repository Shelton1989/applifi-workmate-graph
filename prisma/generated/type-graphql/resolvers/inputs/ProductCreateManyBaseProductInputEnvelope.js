"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCreateManyBaseProductInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductCreateManyBaseProductInput_1 = require("../inputs/ProductCreateManyBaseProductInput");
let ProductCreateManyBaseProductInputEnvelope = class ProductCreateManyBaseProductInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductCreateManyBaseProductInput_1.ProductCreateManyBaseProductInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], ProductCreateManyBaseProductInputEnvelope.prototype, "data", void 0);
ProductCreateManyBaseProductInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductCreateManyBaseProductInputEnvelope", {
        isAbstract: true
    })
], ProductCreateManyBaseProductInputEnvelope);
exports.ProductCreateManyBaseProductInputEnvelope = ProductCreateManyBaseProductInputEnvelope;
