"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShippingMethodAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let ShippingMethodAvgOrderByAggregateInput = class ShippingMethodAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShippingMethodAvgOrderByAggregateInput.prototype, "arrivalTimeInBusinessDays", void 0);
ShippingMethodAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ShippingMethodAvgOrderByAggregateInput", {
        isAbstract: true
    })
], ShippingMethodAvgOrderByAggregateInput);
exports.ShippingMethodAvgOrderByAggregateInput = ShippingMethodAvgOrderByAggregateInput;
