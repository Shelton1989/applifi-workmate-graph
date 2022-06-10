"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShippingMethodOrderByRelationAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let ShippingMethodOrderByRelationAggregateInput = class ShippingMethodOrderByRelationAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShippingMethodOrderByRelationAggregateInput.prototype, "_count", void 0);
ShippingMethodOrderByRelationAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ShippingMethodOrderByRelationAggregateInput", {
        isAbstract: true
    })
], ShippingMethodOrderByRelationAggregateInput);
exports.ShippingMethodOrderByRelationAggregateInput = ShippingMethodOrderByRelationAggregateInput;
