"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrencyOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PriceOrderByRelationAggregateInput_1 = require("../inputs/PriceOrderByRelationAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let CurrencyOrderByWithRelationInput = class CurrencyOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CurrencyOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CurrencyOrderByWithRelationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CurrencyOrderByWithRelationInput.prototype, "symbol", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CurrencyOrderByWithRelationInput.prototype, "code", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceOrderByRelationAggregateInput_1.PriceOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriceOrderByRelationAggregateInput_1.PriceOrderByRelationAggregateInput)
], CurrencyOrderByWithRelationInput.prototype, "prices", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CurrencyOrderByWithRelationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CurrencyOrderByWithRelationInput.prototype, "updatedAt", void 0);
CurrencyOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CurrencyOrderByWithRelationInput", {
        isAbstract: true
    })
], CurrencyOrderByWithRelationInput);
exports.CurrencyOrderByWithRelationInput = CurrencyOrderByWithRelationInput;
